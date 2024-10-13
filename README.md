# **QA Assessment Project**

This project consists of a **frontend web application** built using **HTML, CSS, JavaScript** and a **backend** for user authentication using **Firebase**. The frontend includes pages for handling albums and photos, fetched dynamically from a public API (`jsonplaceholder.typicode.com`), with added functionality for search and pagination.

The project also includes **Python Selenium scripts** for automating frontend testing.

## **Table of Contents**
1. [Frontend](#frontend)
   - [Pages](#pages)
   - [Features](#features)
2. [Backend](#backend)
   - [Firebase Authentication Setup](#firebase-authentication-setup)
3. [Python Automation](#python-automation)
   - [Setup for Testing](#setup-for-testing)
   - [Test Scripts](#test-scripts)
4. [How to Run the Project](#how-to-run-the-project)
   - [Running the Frontend](#running-the-frontend)
   - [Running the Automation Tests](#running-the-automation-tests)
5. [Project Structure](#project-structure)

---

## **Frontend**

### **Pages**

- **Landing Page**: A simple welcome page that links to the login page.
- **Login Page**: Users can log in via **Firebase Authentication** using email and password.
- **Home Page**: This is the dashboard that users access after successfully logging in.
- **Album Page**: Lists albums fetched from the API with pagination and search functionality.
- **Photo Page**: Displays photos in a grid format with pagination.

### **Features**
1. **User Authentication**: Managed via Firebase for secure email/password login.
2. **Dynamic Data Fetching**: Uses the `jsonplaceholder.typicode.com` API to fetch albums and photos.
3. **Pagination**: Both albums and photos are paginated, allowing users to navigate between sets of data.
4. **Search**: The album page includes a search feature for filtering albums by title.
5. **Responsive UI**: The pages are styled to be responsive and user-friendly across devices.

---

## **Backend**

### **Firebase Authentication Setup**

1. **Set Up Firebase**:
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - In your Firebase project dashboard, navigate to **Authentication** and enable **Email/Password** authentication.
   - In **Project Settings**, get your Firebase configuration details for setting up Firebase in the frontend.

2. **Integrating Firebase with the Frontend**:
   - In the frontend, include Firebase SDK scripts in your **`login.html`** file:

   ```html
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>
