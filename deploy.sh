#!/bin/bash

# Print start message
echo "Starting the deployment process..."

# Navigate to the directory where the docker-compose file is located
cd "$(dirname "$0")" || exit 1  # Ensures we are in the script's directory

# Stop and remove existing containers, networks, images
echo "Stopping and removing existing Docker containers..."
docker-compose down

# Check if the user wants to rebuild the images
if [[ "$1" == "build" ]]; then
    echo "Building Docker images..."
    docker-compose build
fi

# Start the containers
echo "Starting Docker containers..."
docker-compose up -d  # Runs in detached mode

# Display the status of the containers
echo "Checking the status of the Docker containers..."
docker-compose ps

# Print end message
echo "Deployment process completed successfully."
