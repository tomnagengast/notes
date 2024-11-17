SERVICE_URL="$(gcloud run services describe $(basename $(pwd)) --region us-central1 --format 'value(status.url)')"

curl -X POST $SERVICE_URL  \
    -H "Content-Type: application/json" \
    -d '{"name": "Tom"}'
