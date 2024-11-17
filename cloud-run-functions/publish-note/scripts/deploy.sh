gcloud beta run deploy $(basename $(pwd)) \
      --function publishNote \
      --region us-central1  \
      --service-account=$(gcloud run services describe $(basename $(pwd)) --region us-central1 --format 'value(spec.template.spec.serviceAccountName)')\
      --allow-unauthenticated \
      --source ..
#   --set-env-vars GITHUB_TOKEN=github-token \
#   --port 8080
