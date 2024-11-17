gcloud beta run deploy $(basename $(pwd)) \
      --source . \
      --function publishNote \
      --region us-central1  \
      --remove-env-vars=GITHUB_TOKEN \
      --service-account=github@the-nags.iam.gserviceaccount.com \
      --update-secrets=GITHUB_TOKEN=github-token:latest \
      --allow-unauthenticated
