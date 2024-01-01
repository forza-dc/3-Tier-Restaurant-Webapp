# 3-Tier React / NodeJS / MongoDB Web Application

![Forza Restaurant Image](Forza-Restaurant-Image.png)

## Overview

Restaurantly is a 3-tier web application that utilizes MongoDB for the database, Node.js for the backend server, and React for the frontend. 
The project is built on top of the provided HTML5 and Bootstrap template for a restaurant website.

## How to Run

Follow the steps below to run the Restaurantly web application:

### 1. Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account and connection string.

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/Restaurantly.git
cd Restaurantly

3. Install Dependencies
``` bash
npm install

4. Set Up MongoDB Connection
Replace <YOUR_MONGODB_CONNECTION_STRING> in the server.js file with your MongoDB Atlas connection string.

```javascript
const mongoURI = 'mongodb+srv://forza101:Mongo100@forza-cluster.ai8yjp5.mongodb.net/';

5. Run the Application
```bash
node server.js
The server will start running at http://localhost:5000.

6. Access the Application
Open your web browser and navigate to http://localhost:5000 to view the Restaurantly web application.

Features
Menu Page: Browse through the restaurant's menu.
Contact Page: Place orders via phone or use the contact form.
Location Map: View the restaurant's location on a map.
Feel free to explore and customize the application as needed. If you encounter any issues or have questions, please reach out to us.

Happy Dining!

```typescript
Replace `<YOUR_MONGODB_CONNECTION_STRING>` with your actual info