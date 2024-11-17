region="us-central1"
gcloud beta run deploy $(basename $(pwd)) \
      --source . \
      --function publishNote \
      --region $region  \
      --remove-env-vars=GITHUB_TOKEN \
      --service-account=$(gcloud run services describe $(basename $(pwd)) --region $region --format 'value(spec.template.spec.serviceAccountName)')\
      --allow-unauthenticated \
      --update-secrets=GITHUB_TOKEN=github-token:latest \
      --ignore-file=.gcloudignore

IMAGE_URL=$(gcloud run services describe $(basename $(pwd)) --region $region --format 'value(image)')
gcloud beta run deploy $(basename $(pwd)) --image $IMAGE_URL --update-secrets=GITHUB_TOKEN=github-token:latest
