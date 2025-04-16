# Softuni-football-boots-2025
Softuni React Project Defense


## Workshop 4 - Deployment
1. Server Deployment (Google Cloud Platform Cloud Run)
 - [x] Register into GCP
 - [x] Create project in GCP
 - [x] [Install Docker Desktop](https://www.docker.com/products/docker-desktop/)
 - [x] Create Dockerfile
 - [x] Create Docker Image `docker build -t softuni-practice-server . `
 - [x] Check docker images `docker images`
 - [x] Start local container `docker run -p 8080:8080 softuni-practice-server`
 - [x] Change image name `docker tag softuni-practice-server europe-west4-docker.pkg.dev/football-boots-456601/softuni-practice-server-repo/softuni-practice-server` 
 - [x] [Install gcloud SDK](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe)
 - [x] Init and login `gcloud init` `gcloud login`
 - [x] List available projects `gcloud project list`
 - [x] Set default project `gcloud config set project football-boots-456601`
 - [x] Check current project `gcloud config get-value project`
 - [x] Authorize gcloud for docker `gcloud auth configure-docker europe-west4-docker.pkg.dev`
 - [x] Deploy to cloud run `gcloud run deploy softuni-practice-server --image europe-west4-docker.pkg.dev/football-boots-456601/softuni-practice-server-repo/softuni-practice-server --min-instances 0 --max-instances 1 --region europe-west4 --platform=managed --allow-unauthenticated`
 
2. Client Deployment
 - [x] [Use env variables in vite](https://vite.dev/guide/env-and-mode)
 - [x] Prepare client to work with deployed server (use env variables for server url)
 - [x] Install firebase `npm i -g firebase-tools`
 - [x] Login to firebase sdk `firebase login`
 - [x] Link firebase project to GCP project
 - [x] Initialize firebase hosting `firebase init hosting`
 - [x] Deploy client `npm run build` `firebase deploy`
 - [x] Config npm script
3. CI/CD