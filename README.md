# fashion-ecommerce-part2

## Introduction
This repository contains the code for a modern, dynamic e-commerce platform specifically designed for the fashion industry. Leveraging MongoDB, React, and Next.js, this platform offers a seamless and scalable solution for online fashion retail.

From the initial focus on schema design and queries in Part 1, this project (Part 2) shifts emphasis towards the front-end and back-end interaction. It aims to comprehensively understand how the two seamlessly integrate to create a fluid user experience. This phase is crucial in demonstrating the practical application of schema designs and database queries in a real-world setting, bringing the entire e-commerce platform to life.

## Features
- **Product Display:** Intuitive interfaces for a shopping mall-like experience, complete with product images and easy navigation to add products to the cart
- **Category Filtering:** Products are categorized for easier navigation and user experience.
![homepage](https://github.com/minu803/fashion-ecommerce-part2/assets/111295624/9eff4ebb-aec0-42a2-97b2-ae6a2baa1e3e)


- **Search Functionality:** Offers real-time product search by name. For instance, in this demonstration, I searched for "jacket".
![search](https://github.com/minu803/fashion-ecommerce-part2/assets/111295624/f2851227-9f3b-47ca-bcfa-218229a0204f)

- **Shopping Cart Functionality:** Dynamic cart management with real-time updates. When users add items to the cart, the total number of items will be displayed on the cart symbol located in the bottom right corner.
![cart](https://github.com/minu803/fashion-ecommerce-part2/assets/111295624/5b29e8bd-7c83-4e74-beae-5b3365f4ba47)
  
- **Checkout Process:** Customers can view their selected items as smaller images within the cart. To adjust quantities, they can simply click the '+' or '-' symbols beside each product. Additionally, they can enter their address, email, and name in the provided input fields for a seamless checkout experience.
![checkout](https://github.com/minu803/fashion-ecommerce-part2/assets/111295624/6bb77a08-cd2a-4088-ac0e-14cb9be8470d)

- **Payment:**: This section allows customers to securely enter their payment information for completing transactions.

![payment](https://github.com/minu803/fashion-ecommerce-part2/assets/111295624/f40e11d9-9d5c-4d06-8d22-3ae7e482fd85)


## Technology Stack
- **Frontend:** React, Next.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Processing:** Stripe API
- **State Management:** React Context API
- **Styling:** Tailwind CSS

## Schema Design
The database schema is designed to effectively manage product lines, user data, and transactional records:
- **Products Collection:** Product details including name, description, price, SKUs, categories, and images.
- **Orders Collection:** User IDs, payment status, order status, items, and shipping details.

## Installation
Provide step-by-step instructions on how to get a development environment running:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables for MongoDB and Stripe API keys in separate `.env` file.
4. Import **'products.json'** file into MongoDB Atlas
  To import the `products.json` file into your MongoDB Atlas database, follow these steps:
  - Ensure that the `products.json` file is structured correctly and is accessible.
  - Use the `mongoimport` tool provided by MongoDB. This tool helps you import JSON, CSV, or TSV files into your MongoDB database.
  - For detailed instructions, refer to the following resources:
     - MongoDB's Official Documentation on Importing with `mongoimport`: [MongoDB Atlas Import Guide](https://www.mongodb.com/docs/atlas/import/mongoimport/)
     - A helpful video tutorial: [CodeShode's MongoDB Import Tutorial on YouTube](https://www.youtube.com/watch?v=fkGafwD-b1s&ab_channel=CodeShode)
6. Run the server: `yarn dev`
7. To access the website, navigate to http://localhost:3000 in your web browser.
