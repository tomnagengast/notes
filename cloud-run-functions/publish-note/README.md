# Cloud Run

```sh
gcloud secrets create github-token --replication-policy="automatic"
echo -n "$GITHUB_TOKEN" | gcloud secrets versions add github-token --data-file=- 
gcloud secrets versions access latest --secret="github-token"


# Grant the Cloud Run service account access to the secret
SERVICE_ACCOUNT=$(gcloud run services describe $(basename $(pwd)) --region us-central1 --format 'value(status.serviceAccountEmail)')
gcloud secrets add-iam-policy-binding github-token \
    --member="serviceAccount:YOUR_SERVICE_ACCOUNT@YOUR_PROJECT.iam.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"

# Deploy to Cloud Run
gcloud beta run deploy $(basename $(pwd)) \
      --source . \
      --function publishNote \
      --region us-central1 \
      --allow-unauthenticated \
      --set-env-vars GITHUB_TOKEN=github-token
```

```sh
SERVICE_NAME=$(basename $(pwd))
SERVICE_URL="$(gcloud run services describe $SERVICE_NAME --region us-central1 --format 'value(status.url)')"

curl -X POST $SERVICE_URL  \
    -H "Content-Type: application/json" \
    -d '{"name": "Tom"}'
```
