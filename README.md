# ImgEndpoint
 

Deploying Endpoint in Cloud Run
To deploy our endpoint in Cloud Run, please follow these steps:

Clone the imgendpoint repository from GitHub.

Open the Index.js file and update the following:

Replace key.js with your own Service Account key file for Firebase.
Update the Cloud Project ID and Bucket with your own values.
Upload the modified repository to GitHub.

Open the Google Cloud Platform (GCP) console and navigate to Cloud Run.

Click on "Create Service" to create a new service.

Select the option "Continuously deploy new revisions from a source repository".

Click on "Set Up With Cloud Build".

Choose GitHub as the source repository and select the repository that you have already added the service to.

Enable the option "Allow unauthenticated invocations" for public access to the endpoint.

Configure the port to 3000.

Click on "Create" to deploy the service.

Wait for the deployment to complete. You will be notified if the service is successfully deployed.

Any changes you make to the service in the GitHub repository will trigger an automatic rebuild in Cloud Run.

You can monitor the changes and build status of your service in Cloud Build.

Please note that these steps assume you have already set up your GCP account and have the necessary permissions to create and deploy services in Cloud Run.
