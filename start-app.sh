#!/bin/bash

# Start the backend
cd back-end
start "C:\Users\Acer\OneDrive\Documents\cmder\Cmder.exe" /TASK "{backend}" /C "C:\Users\Acer\OneDrive\Documents\cmder\Cmder.exe" /START "C:\Users\Acer\OneDrive\Documents\AI-Powered-News-Article-Classifier-with-History\back-end" /C "node server.js"

# Start the frontend
cd ../front-end
start "C:\Users\Acer\OneDrive\Documents\cmder\Cmder.exe" /TASK "{Frontend}" /C "C:\Users\Acer\OneDrive\Documents\cmder\Cmder.exe" /START "C:\Users\Acer\OneDrive\Documents\AI-Powered-News-Article-Classifier-with-History\front-end" /C "npm start"
