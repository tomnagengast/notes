const { Octokit } = require('@octokit/rest');

// Configuration
const config = {
  owner: 'tomnagengast',
  repo: 'notes',
  fileName: 'running-on-shortcuts',
  filePath: `src/notes/running-on-shortcuts.md`,
  githubToken: process.env.GITHUB_TOKEN
};

// Initialize Octokit
const octokit = new Octokit({
  auth: config.githubToken
});

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

// Helper to print colored console messages
const print = {
  error: (msg) => console.error(`${colors.red}Error: ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.yellow}${msg}${colors.reset}`)
};

async function getFileContent() {
  try {
    const response = await octokit.repos.getContent({
      owner: config.owner,
      repo: config.repo,
      path: config.filePath,
    });
    return response.data;
  } catch (error) {
    if (error.status === 404) {
      return 'NEW_FILE';
    }
    throw new Error(`Failed to get file content: ${error.message}`);
  }
}

async function createOrUpdateFile(content, sha = null, commitMessage = 'Update Note') {
  const isNew = !sha;
  const params = {
    owner: config.owner,
    repo: config.repo,
    path: config.filePath,
    message: commitMessage,
    content: Buffer.from(content).toString('base64')
  };

  if (!isNew) {
    params.sha = sha;
  }

  try {
    print.info(isNew ? 'Creating new file...' : 'Updating existing file...');
    
    const response = await octokit.repos.createOrUpdateFileContents(params);
    
    print.success(isNew ? 'File created successfully!' : 'File updated successfully!');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to ${isNew ? 'create' : 'update'} file: ${error.message}`);
  }
}

async function main() {
  try {
    // Get content from stdin
    let content = '';
    process.stdin.setEncoding('utf8');
    
    console.log('Enter content (Ctrl+D when finished):');
    
    for await (const chunk of process.stdin) {
      content += chunk;
    }

    print.info('Checking if file exists...');
    const fileInfo = await getFileContent();

    if (fileInfo === 'NEW_FILE') {
      await createOrUpdateFile(content);
    } else {
      await createOrUpdateFile(content, fileInfo.sha);
    }
  } catch (error) {
    print.error(error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  getFileContent,
  createOrUpdateFile,
  main
}; 
