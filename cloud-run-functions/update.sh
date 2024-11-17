#!/bin/bash

# Configuration
GITHUB_TOKEN="<key>"
OWNER="tomnagengast"
REPO="notes"
FILE_NAME="running-on-shortcuts"
FILE_PATH="src/notes/$FILE_NAME.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to handle errors
handle_error() {
    echo -e "${RED}Error: $1${NC}"
    exit 1
}

# Function to check if jq is installed
check_dependencies() {
    if ! command -v jq &> /dev/null; then
        handle_error "jq is required but not installed. Please install jq first."
    fi
}

# Function to get current file content and SHA
get_file_content() {
    response=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
                    -H "Accept: application/vnd.github.v3+json" \
                    "https://api.github.com/repos/$OWNER/$REPO/contents/$FILE_PATH")
    
    # Check if the request returned an error
    if echo "$response" | jq -e .message > /dev/null; then
        message=$(echo "$response" | jq -r .message)
        if [ "$message" = "Not Found" ]; then
            echo "NEW_FILE"
            return
        else
            handle_error "Failed to get file content: $message"
        fi
    fi
    
    echo "$response"
}

# Function to create or update file
create_or_update_file() {
    local content="$1"
    local sha="$2"
    local commit_message="$3"
    local is_new="$4"
    
    # Base64 encode the new content
    encoded_content=$(echo -n "$content" | base64)
    
    # Create JSON payload
    if [ "$is_new" = true ]; then
        # New file doesn't need SHA
        json_data=$(jq -n \
                    --arg msg "$commit_message" \
                    --arg content "$encoded_content" \
                    '{message: $msg, content: $content}')
        echo -e "${YELLOW}Creating new file...${NC}"
    else
        # Update existing file needs SHA
        json_data=$(jq -n \
                    --arg msg "$commit_message" \
                    --arg content "$encoded_content" \
                    --arg sha "$sha" \
                    '{message: $msg, content: $content, sha: $sha}')
        echo -e "${YELLOW}Updating existing file...${NC}"
    fi
    
    # Make the create/update request
    response=$(curl -s -X PUT \
                    -H "Authorization: Bearer $GITHUB_TOKEN" \
                    -H "Accept: application/vnd.github.v3+json" \
                    -H "Content-Type: application/json" \
                    -d "$json_data" \
                    "https://api.github.com/repos/$OWNER/$REPO/contents/$FILE_PATH")
    
    # Check if the operation was successful
    if echo "$response" | jq -e .message > /dev/null; then
        handle_error "Failed to create/update file: $(echo "$response" | jq -r .message)"
    fi
    
    if [ "$is_new" = true ]; then
        echo -e "${GREEN}File created successfully!${NC}"
    else
        echo -e "${GREEN}File updated successfully!${NC}"
    fi
}

# Function to generate timestamp for filename
generate_timestamp() {
    date +"%Y-%m-%d-%H%M%S"
}

# Main script
main() {
    # Check for required dependencies
    check_dependencies
    
    # Allow custom filename or generate one
    custom_filename=$FILE_NAME
    
    if [[ ! "$custom_filename" =~ \..+ ]]; then
        FILE_PATH="$FILE_PATH.md"
    fi
    
    # Get the commit message
    commit_message="Update Note"
    
    # Get the content
    echo "Enter content (Ctrl+D when finished):"
    new_content=$(cat)
    
    # Check if file exists and get info
    echo "Checking if file exists..."
    file_info=$(get_file_content)
    
    if [ "$file_info" = "NEW_FILE" ]; then
        create_or_update_file "$new_content" "" "$commit_message" true
    else
        # Extract SHA and update
        sha=$(echo "$file_info" | jq -r .sha)
        create_or_update_file "$new_content" "$sha" "$commit_message" false
    fi
}

# Run the script
main
