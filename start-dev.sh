#!/bin/bash

# Start JSON Server in background
echo "Starting JSON Server on port 3001..."
npx json-server --watch db.json --port 3001 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Start Vite dev server
echo "Starting Vite dev server on port 5173..."
npm run dev

# Kill JSON Server when Vite stops
kill $SERVER_PID