# Building a Microservices Application on Cloud using Docker, Kubernetes, Jenkins and Git.

### Microservices Overview

- **Authentication -** The Authentication Service is responsible for handling user authentication and authorization. It provides endpoints for user registration and login.
<br/>
- **Customer -** The Customer Service manages customer-related operations within the application. It handles buying services, cancelling orders and viewing order history.
<br/>
- **Freelancer -** The Freelancer Service handles operations related to freelancers. It manages freelancer profiles along with their ability to add, delete or update services.

```bash
AUTHENTICATION_MICROSERVICE_URL = "http://127.0.0.1:5001"
CUSTOMER_MICROSERVICE_URL = "http://127.0.0.1:5002"
FREELANCER_MICROSERVICE_URL = "http://127.0.0.1:5003"
```


## Docker Commands

#### Build Docker Images
Navigate to the respective folders with Dockerfiles
```bash
docker build -t authentication-service .
docker build -t customer-service .
docker build -t freelancer-service .
```

#### Deploying MySQL in Docker on a Custom Network
Disable active MySQL running on localhost with port 3306
```bash
docker network create mynetwork
docker run -d --name mysql-db --network mynetwork -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=253_265_284_309 -p 3306:3306 mysql:latest
```

#### Run Docker Images
```bash
docker run -d --name authentication-container -p 5001:5001 --network mynetwork authentication-service
docker run -d --name customer-container -p 5002:5002 --network mynetwork customer-service
docker run -d --name freelancer-container -p 5003:5003 --network mynetwork freelancer-service
```

#### Apply Deployment and Service Manifests
Navigate to the respective folders with Manifest files
```bash
kubectl apply -f authentication-deployment.yaml
kubectl apply -f customer-deployment.yaml
kubectl apply -f freelancer-deployment.yaml
```
```bash
kubectl apply -f authentication-service.yaml
kubectl apply -f customer-service.yaml
kubectl apply -f freelancer-service.yaml
```

#### Validation of Deployments and Services
```bash
kubectl get deployments
kubectl get services
```
