# My Coding Test Submission - Bitnine Global Inc. Apache AGE Internship 2023

## Introduction

This repository contains my submission for the coding test as part of the Apache AGE Internship 2023 by Bitnine Global Inc. The test consists of multiple questions related to web development and basic algorithms.

## Questions and Solutions

### Question 5 - Implement Login/Signup Page && Bitnine Website Clone.

In this question, I was tasked with implementing a login/signup page that allows users to view content after signing up and logging in and aso design a website similar to bitnine's website. The solution uses Node.js, Express.js, MongoDB, JWT for the backend and React.js with Tailwind for the frontend.

- **Backend**:

  - **Technologies**: Node.js, Express.js, MongoDB, JWT
  - **Files**: `/bitnine-website/server/server.js`, `/bitine-website/server/routes/auth.js`, `/bitine-website/backend/models/User.js`
  - **Description**: The backend server is implemented using Node.js and Express.js. The user authentication and signup logic are handled in the `auth.js` route file. The `User.js` model file defines the user schema for MongoDB. JWT (JSON Web Tokens) are used for user authentication and authorization.

- **Frontend**:
  - **Technologies**: React.js, Tailwind CSS
  - **Files**: `/bitnine-website/client/src/App.js`, `/frontend/src/components`, `/client/src/pages`
  - **Description**: The frontend is developed using React.js and styled with Tailwind CSS. The main `App.js` file contains the routing logic. Separate components and pages are created for login, signup, and the content visible after login.
  - You can find the live preview [here](https://bitnine-clone-ann-glitch.vercel.apps)

### Question 6 - Basic Algorithms

In this set of questions, I was required to write JavaScript functions for various tasks:

#### Question 6-1: Palindrome or Reverse

- **File**: `/basicalgos/palindrome.js`
- **Description**: This function takes an input word as an argument, checks if it is a palindrome, and returns the original word if it is a palindrome. If it's not a palindrome, the function returns the word in reverse order.

#### Question 6-2: Find the Missing Integer

- **File**: `/basicalgos/missingNumber.js`
- **Description**: This function takes an array of the first 45 numbers with one missing number and finds the missing integer from the list using the sum formula.

#### Question 6-3: JavaScript Digital Clock

- **File**: `/basicalgoos/digitalClock.js`
- **Description**: The `digitalClock.js` file contains JavaScript code to create a simple digital clock that updates every second.

## Usage

1. Backend:

   - Install the required packages by running `yarn` inside the `/bitnine-website/server` directory.
   - Start the backend server using `yarn dev` or `node server.js`.

2. Frontend:

   - Install the required packages by running `yarn` inside the `/bitine-website/client` directory.
   - Start the frontend development server using `yarn start`.

3. Explore the Solutions:
   - The login/signup and bitnine's pages can be accessed at `http://localhost:3000`.
   - The JavaScript functions can be executed in the browser's developer console.

Feel free to explore and modify the code to suit your needs.

## Disclaimer

This repository is my submission for the Apache AGE Internship 2023 coding test. The code provided here is for educational and demonstration purposes only and may require further validation and improvements for real-world applications.
