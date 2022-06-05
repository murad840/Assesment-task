#!/bin/bash
set -e 
echo "Building Docker Image "
cd web/
docker build -t web:$1 .
echo "Build completed"
echo "updating Deployment"
cp ../devops/deployment.yaml .
sed -i "s@<imagename>@web:$1@g" deployment.yaml
kubectl apply -f deployment.yaml
