﻿# ImgEndpoint
 
 To deploy our endpoint in Cloud Run, you can follow these few steps:
https://github.com/Si-Mun

Clone our imgendpoint repository.
in Index.js change the key.js with your own ServiceAccount in the firebase. Also change Cloud Project ID and Bucket with your own.
Then,  Upload it in the github
Open GCP and use Cloud Run to make a new services.
Next, click "Continuously deploy new revisions from a source repository" 
And click "Set Up With Cloud Build"
Choose Github and choose the repository that you've already add the services.
Click "Allow unauthenticated invocations"
Then Configure the port to 3000
Then click create
You will be notify if the services is successfull 
You can change the services in the github, and the cloud run will automatically build it again for you.
You can monitoring the change of your services in the Cloud Build.
