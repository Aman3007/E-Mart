# E-Mart 🛒

E-Mart is a **full-stack grocery shopping web application** built using the **MERN stack with Next.js**. It provides a modern, fast, and scalable e-commerce experience with product browsing, filtering, pagination, and a clean UI.

---

## 🚀 Live Demo

🔗 **Demo:** [https://e-mart-snowy.vercel.app/](https://e-mart-snowy.vercel.app/)

🔗 **GitHub Backend Repository :** [https://github.com/Aman3007/E-Mart-Backend](https://github.com/Aman3007/E-Mart-Backend)

---

## 🧩 Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* shadcn/ui
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Other Tools & Libraries

* JWT (Authentication)
* REST API architecture

---

## ✨ Features

* 🛍️ Product listing with pagination
* 🔍 Search products with debouncing
* 🏷️ Filter by category and brand
* ↕️ Sort by price, rating, and newest
* ⚡ Fast UI with Next.js
* 📱 Fully responsive design
* 🧠 Clean and scalable folder structure

---

## 📂 Project Structure

```bash

E-Mart/
│
├── app/                         # Next.js App Router
│   ├── (auth)/                  # Auth route group (no URL prefix)
│   │   ├── login/
│   │   │   └── page.js
│   │   └── register/
│   │       └── page.js
│   │
│   ├── (shop)/                  # Shop-related routes
│   │   └── page.js
│   │
│   ├── about/
│   │   └── page.js
│   │
│   ├── cart/
│   │   └── page.js
│   │
│   ├── contact/
│   │   └── page.js
│   │
│   ├── home/
│   │   └── page.js
│   │
│   ├── product/
│   │   └── [id]/                # Dynamic product page
│   │       └── page.js
│   │
│   ├── layout.js                # Root layout
│   ├── page.js                  # Entry page
│   ├── globals.css              # Global styles
│   └── favicon.ico
│
├── components/                  # Reusable UI components
│   ├── navbar/
│   │   └── Navbar.jsx
│   │
│   ├── footer/
│   │   └── Footer.jsx
│   │
│   ├── product-card/
│   │   └── ProductCard.jsx
│   │
│   └── ui/                      # shadcn/ui components
│
├── context/                     # Global state management
│   └── AppContext.js
│
├── lib/                         # Utilities and API handlers
│   ├── api.js                   # Axios / API calls
│   └── utils.js                 # Helper functions
│
├── public/                      # Static assets
│   └── images/
│
├── .gitignore
├── components.json              # shadcn/ui config
├── package.json
├── next.config.js
└── README.md



├── backend/
│   └── server.js
│   └── products.json
|   
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend (`.env.local`)

```env
API_URL=your_backend_url
```

### Backend (`.env`)

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

## 🧪 Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Aman3007/E-Mart.git
cd E-Mart
```

### 2️⃣ Install dependencies

#### Frontend

```bash

npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
npm start
```

---

## 🗄️ Database

* MongoDB is used for data storage
* Products are seeded automatically from JSON when the server connects
* Schema-based validation using Mongoose

---

## 🌐 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 👨‍💻 Role

**Full Stack Developer**
Designed and developed both frontend and backend, implemented REST APIs, database schema, filtering logic, and UI components.

---



---

