
# Assesment Task

Kseniia Tkachenko gave this assesment task to me this task contain two parts
one is creating web server on Nodejs and second part is to configure the minikube
cluster and write build script for deployment.



## Intial Setup

first apply intial kubernetes manifists file to minikube cluster which are placed
in devops directory 

```bash
  cd devops
  kubectl create -f .
```
Point http://local.astriauniversity.com  to Nginx ingress controller IP, 
Run below command to get the IP address

```bash
kubectl get ing 
```

##


## Usage/Examples

in this command v2 is version number.you can use any pattern for versions.
```javascript
chmod +X automation-script.sh #only once 
./automation-script.sh v2 
```

