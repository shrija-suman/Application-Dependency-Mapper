#!/bin/bash

# Build script for Application Dependency Mapper

echo "Building Application Dependency Mapper..."

# Install backend dependencies
cd src/main/backend
npm install

echo "Build complete."