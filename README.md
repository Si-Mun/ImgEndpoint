# ImgEndpoint
 

Deploying Endpoint in Cloud Run
To deploy our endpoint in Cloud Run, please follow these steps:

1.	 Clone the imgendpoint repository from GitHub.
2.	Open the Index.js file and update the following:
3.	Replace key.js with your own Service Account key file for Firebase.
4.	Update the Cloud Project ID and Bucket with your own values.
5.	Upload the modified repository to GitHub.
6.	Open the Google Cloud Platform (GCP) console and navigate to Cloud Run.
7.	Click on "Create Service" to create a new service.
8.	Select the option "Continuously deploy new revisions from a source repository".
9.	Click on "Set Up With Cloud Build".
10.	Choose GitHub as the source repository and select the repository that you have already added the service to.
11.	Enable the option "Allow unauthenticated invocations" for public access to the endpoint.
12.	Configure the port to 3000.
13.	Click on "Create" to deploy the service.
14.	Wait for the deployment to complete. You will be notified if the service is successfully deployed.
15.	Any changes you make to the service in the GitHub repository will trigger an automatic rebuild in Cloud Run.
16.	You can monitor the changes and build status of your service in Cloud Build.
17.	Please note that these steps assume you have already set up your GCP account and have the necessary permissions to create and deploy services in Cloud Run.

