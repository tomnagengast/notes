# Cloud Run

```sh
# First, set up the GitHub token in Secret Manager: ###########################
# Create a secret in Secret Manager
gcloud secrets create github-token --replication-policy="automatic"

# Add your GitHub personal access token as the secret value
echo -n "your-github-token" | gcloud secrets versions add github-token --data-file=-

# Grant the Cloud Run service account access to the secret
gcloud secrets add-iam-policy-binding github-token \
    --member="serviceAccount:YOUR_SERVICE_ACCOUNT@YOUR_PROJECT.iam.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"

# 2. Build and deploy the Cloud Run service: #################################

# Deploy to Cloud Run
gcloud functions deploy publish-note \
--gen2 \
--runtime=nodejs20 \
--region=us-central1 \
--source=gcp \
--entry-point=publishNote \
--trigger-http \
--allow-unauthenticated \
--set-env-vars GITHUB_TOKEN=github-token
```

```sh
gcloud functions describe publish-note --gen2 --region us-central1 --format="value(url)"
```

```sh
curl -m 70 -X POST https://us-central1-the-nags.cloudfunctions.net/publish-note \
    -H "Content-Type: application/json" \
    -d '{}' 


    -H "Authorization: Bearer $(gcloud auth print-identity-token)" \
```
