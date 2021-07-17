# RESTful web service - Dockerfile for Nodejs Webapp

Created a RESTful web service that runs in a Docker container.
Dockerfile used to make your Nodejs web app run inside a Docker container.

# Insight:
The web service contains four GET routes:
1) One that displays a collection of records.
2) One that displays a single record that corresponds to an ID. Example: I created two routes; /customers and /customers/1 (note: that '1' is the ID of a given customer in my database).
3) One that displays a collection of records for a given entity. Example: /customers/1/addons (note: that '1' is the ID of a given customer in my database).
4) One that displays a single record from a collection of a given entity. Example: /customers/1/addons/2 (note: that '2' is that ID of a given order submitted by customer with ID '1' in my database).


The Dockerfile:

```dockerfile
# we will use the latest version of node available from the Docker Hub.
FROM node:latest

# Created app directory
WORKDIR /usr/src/app

# Installed app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Installed the packages while the image is building
RUN npm install

# Bundle app source, i.e. copying all your required files for the app
# Note: files & folders inside .dockerignore will not be copied.
COPY . .

# Exposing port 3000 to be used by the docker network
EXPOSE 3000

# Runtime command to be executed when the container is launched
CMD ["node", "app.js"]
```

### Running the nodejs app on your machine and showing it from a docker container: 


1) Create a directory in node.js the repo

```
mkdir nodejs_dockerfile
```

2) Build the docker image

```
docker build -t image-name .
```

3) Run the docker container from the image

```
docker run -d -p 3000:3000 image-name
```
### JSON file based database:
```
{
    "customer1" : {
       "name" : "Brad",
       "dessert" : "Choco Vanilla Shake",
       "price" : "price1",
       "addons": {
          "1":"With low Calorie sugar",
          "2":"with toppings and cream",
          "3":"with cream only"

       },  
       
       "id": 1
    },
    
    "customer2" : {
       "name" : "Gaby",
       "dessert" : "Red Velvet muffin shake",
       "price" : "price3",
       "id": 2
    },
    
    "customer3" : {
       "name" : "Eli",
       "password" : "Blueberry Chesse Shake",
       "price" : "price3",
       "id": 3
    }
 }

```
