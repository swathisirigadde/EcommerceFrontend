# 📦 E-Commerce Product Catalog - Frontend

This is the **frontend** of the E-Commerce Product Catalog built using **React.js**, **CSS**, and **Axios**.

---

## 📁 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── AdminPanel.js
│   │   ├── Login.js
│   │   ├── ProductDetails.js
│   │   ├── ProductList.js
│   │   └── ProductList.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

---

## 🚀 Features

* 🔍 View all products in a grid
* 📄 View detailed product info
* 🔐 Admin-only access to:

  * ➕ Add a product
  * ❌ Delete a product
* 🔎 Search by product name or category
* 🧠 Simulated Login via `localStorage`

---

## 🧑‍💻 Technologies Used

* React.js
* Axios
* HTML5/CSS3
* Bootstrap (optional)

---

## ⚙️ Setup Instructions

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Test Credentials (for demo)

* User: no login needed (default)
* Admin:

  * Select role `admin` from dropdown in the login form

---

## 🌐 Backend API Endpoint

Make sure your Spring Boot backend is running at:

```
http://localhost:8080
```

API used in frontend:

* `GET /products`
* `GET /products/{id}`
* `POST /products` *(admin only)*
* `DELETE /products/{id}` *(admin only)*

---


