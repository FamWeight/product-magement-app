# Product Management App

## Description

The **Product Management App** is a Node.js application designed to help you manage various aspects of your product data. It provides an API for creating, updating, deleting, and retrieving product information. This application uses technologies like Hapi.js for building the API, Mongoose for interacting with the database, and Dotenv for managing environment variables.

- [Description](#description)
- [Dependencies](#dependencies)
- [Framework](#framework)
- [Database](#database)
- [Usage](#usage)

## Dependencies

- [@hapi/hapi](https://www.npmjs.com/package/@hapi/hapi): ^21.3.2
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.3.1
- [mongoose](https://www.npmjs.com/package/mongoose): ^7.4.2
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.0.1 (Dev Dependency)

## Framework

The application is built using the [Hapi.js](https://hapi.dev/) framework. Hapi.js is a powerful and flexible Node.js framework for building APIs.

## Database

The application uses [Mongoose](https://mongoosejs.com/) as an object modeling tool to interact with the database. It helps in managing and querying data in MongoDB.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/FamWeight/product-management-app.git
   cd product-management-app
   ```

2. Create a `.env` file in the root directory and add your environment variables:

   ```env
   HOST=yourhost
   PORT=yourport
   DB_URI=your_mongodb_connection_string
   ```

3. Start the application:

   ```bash
   npm start
   ```

---

**Author:** Wahyu Tri Novianto

- GitHub: [FamWeight](https://github.com/FamWeight)
- LinkedIn: [Wahyu Tri Novianto](www.linkedin.com/in/wahyu-tri-novianto-761868172)
