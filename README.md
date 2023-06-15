# ImgEndpoint
 

To deploy our endpoint in Cloud Run, you can follow these few steps:
 https://github.com/Si-Mun
1.	Clone our imgendpoint repository. in Index.js 
2.	change the key.js with your own ServiceAccount in the firebase. Also change Cloud Project ID and Bucket with your own. 
3.	Then, Upload it in the github Open GCP and use Cloud Run to make a new services. 
4.	Next, click "Continuously deploy new revisions from a source repository" 
5.	And click "Set Up With Cloud Build" Choose Github and choose the repository that you've already add the services. 
6.	Click "Allow unauthenticated invocations" 
7.	Then Configure the port to 3000 
8.	Then click create 
9.	You will be notify if the services is successfull 
10.	You can change the services in the github, and the cloud run will automatically build it again for you. 
11.	You can monitoring the change of your services in the Cloud Build.


