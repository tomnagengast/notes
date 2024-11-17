First, create a directory for the source code and cd into that directory.

```sh
mkdir -p cloud-run-functions/$SERVICE_NAME && cd $_
```

Then, create a package.json file with the following content:

```sh
{
    "dependencies": {
        "@google-cloud/functions-framework": "^3.0.0"
    }
}
```

Next, create an index.js file with the following content:

```sh
const functions = require("@google-cloud/functions-framework");

functions.http("helloHttp", (req, res) => {
    res.send(`Hello ${req.query.name || req.body.name || "World"}!`);
});
```

Now you can deploy the Cloud Run function by running the following command:

```sh
gcloud beta run deploy $SERVICE_NAME \
      --source . \
      --function helloHttp \
      --region us-central1 \
      --no-allow-unauthenticated
```

This command uses [buildpacks](https://cloud.google.com/docs/buildpacks/overview) to transform your function source code into a production-ready container image.

Please note the following:

the `–source` flag is used to tell Cloud Run to build the function into a runnable container based service
the `–function` flag (new) is used to set the entrypoint of the new service to be the function signature you want to be invoked
(optional) the `–no-allow-unauthenticated` to prevent your function from being publicly invokable

When the deployment is complete, you will see the service URL. To invoke the function, you need to send an authenticated request with your identity token or the identity token of a principle that has the Cloud Run Invoker role, as shown below:

```sh
# get the Service URL
SERVICE_NAME=post-test
SERVICE_URL="$(gcloud run services describe $SERVICE_NAME --region us-central1 --format 'value(status.url)')"

# invoke the service
curl -H "Authorization: bearer $(gcloud auth print-identity-token)" -X GET $SERVICE_URL
curl -H "Authorization: bearer $(gcloud auth print-identity-token)" -X POST $SERVICE_URL -d '{"name": "John"}'
```
