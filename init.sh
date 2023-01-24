#!/bin/bash

# Find all directories that contain a package.json file
services=($(find . -name "package.json" -not -path "./gateway" -exec dirname {} \;))

# Iterate through each service directory and run npm install
for service in "${services[@]}"
do
    echo "Installing modules for service: $service"
    cd $service
    npm install
    cd ..
done

# Go to the gateway directory and run npm install
echo "Installing modules for gateway"
cd gateway
npm install