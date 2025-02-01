# React + Vite

# Email Validation using React Vite

This repository contains a simple email validation application built with React and Vite. The project ensures that user-entered email addresses are valid using the `validator` package.

## Features
- Real-time email validation
- Instant feedback on email validity
- Built using React and Vite for fast performance

## Installation and Setup
Follow these steps to set up and run the project:

### 1. Install Node.js
Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

### 2. Create a New React Vite Project
Run the following commands to set up a Vite project:

```sh
npx create-vite@latest email-validation-app --template react
cd email-validation-app
npm install
```

### 3. Install Dependencies
Inside the project folder, install the `validator` package:

```sh
npm install validator
```

### 4. Run the Project
To start the development server, use:

```sh
npm run dev
```

## Project Structure
```
email-validation-app/
├── src/
│   ├── App.js
│   ├── email_validation.js
│   ├── main.jsx
│   ├── assets/
│   ├── styles/
│   ├── App.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Key Code Snippets

### Email Validation Component (`email_validation.js`)
This component validates an email address entered by the user:

```jsx
import React, { useState } from "react";
import validator from "validator";

const EmailValidation = () => {
    const [emailError, setEmailError] = useState("");
    
    const validateEmail = (e) => {
        const email = e.target.value;
        setEmailError(validator.isEmail(email) ? "Valid Email ✅" : "Invalid Email ❌");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Email Validation in React</h2>
            <input type="text" placeholder="Enter Email" onChange={validateEmail} />
            <p style={{ fontWeight: "bold", color: "black" }}>{emailError}</p>
        </div>
    );
};

export default EmailValidation;
```

### App Component (`App.js`)
This file integrates the email validation component:

```jsx
import React from 'react';
import './App.css';
import EmailValidation from './email_validation';

function App() {
    return (
        <>
            <EmailValidation />
        </>
    );
}

export default App;
```

## Deployment
To deploy the project, build the application using:

```sh
npm run build
```

For hosting, you can deploy it on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).


