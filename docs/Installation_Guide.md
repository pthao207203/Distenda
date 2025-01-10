
## Installation
# Comprehensive Installation Guide

This document provides a detailed guide to help you set up and run the project on your local machine. Please follow the steps below to ensure a successful installation.

## Prerequisites
To begin, ensure your system has the following tools installed:

- **Node.js**: Version 16.x or later (download from [Node.js official site](https://nodejs.org))
- **npm**: Bundled with Node.js for managing dependencies
- **MongoDB**: Ensure a local or cloud-based MongoDB instance is available

## Installation Steps

### Step 1: Clone the Repository
Clone the project repository to your local machine using the following command:
```bash
git clone https://github.com/pthao207203/IE104.git
```

### Step 2: Navigate to the Project Directory
Switch to the project's root directory:
```bash
cd IE104
```

### Step 3: Install Required Dependencies
Install all necessary dependencies using npm:
```bash
npm install
```
This step ensures that all the libraries and packages required for the project are downloaded and installed in your local environment.

### Step 4: Configure Environment Variables
The application requires specific environment variables to function correctly. Follow these steps:

1. Create a `.env` file in the root directory of the project.
2. Add the following variables to the `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ie104
JWT_SECRET=your_jwt_secret
```
Replace `your_jwt_secret` with a secure, randomly generated string to ensure the security of the application.

### Step 5: Start the Development Server
To launch the development server, execute the following command:
```bash
npm start
```
This will initiate the application and start listening for incoming connections on the specified port (default is 3000).

### Step 6: Access the Application
Once the server is running, open your preferred web browser and navigate to:
```
http://localhost:3000
```
This URL will take you to the application’s homepage.

## Additional Notes

- **MongoDB**: Ensure your MongoDB instance is active and accessible before starting the server. Use the MongoDB Compass or command-line tools to verify.
- **Production Considerations**: For production environments, configure secure environment variables and utilize a production-grade database (e.g., MongoDB Atlas).
- **Troubleshooting**: Should you encounter any issues during the setup, refer to the project documentation or create an issue on the project's GitHub page for support.

By adhering to these steps, you will have the project fully functional on your local machine. Should additional assistance be required, do not hesitate to reach out.
