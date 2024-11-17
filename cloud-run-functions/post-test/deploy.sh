SERVICE_NAME=$(basename $(pwd))

gcloud beta run deploy $SERVICE_NAME \
      --source . \
      --function helloHttp \
      --region us-central1 \
      --no-allow-unauthenticated
