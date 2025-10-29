#!/bin/bash

# Script to set up assets in the public folder
echo "Setting up Advocen Initiatives website assets..."

# Create public directory if it doesn't exist
mkdir -p public

# Copy logo
echo "Copying logo..."
cp logo-light.png public/

# Copy all favicon files
echo "Copying favicons..."
cp favicon_io/* public/

echo "✓ Assets setup complete!"
echo "You can now run 'npm install' and 'npm run dev' to start the development server."
