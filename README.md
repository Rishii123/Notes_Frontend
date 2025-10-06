
# Multi-Tenant Notes App

A modern, full-stack notes application supporting multiple tenants, user authentication, and team collaboration.  
Built with React (frontend) and Express/MongoDB (backend).

---

## 🚀 Features

- **Multi-Tenant Support:** Organize notes by tenant (organization/team)
- **User Authentication:** Secure login and registration
- **Notes Management:** Create, edit, delete, and view notes
- **Team Collaboration:** Share notes within your tenant
- **Responsive Design:** Works on mobile and desktop
- **Plans:** Choose a plan that fits your needs

---

## 🖥️ Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Express.js, MongoDB, JWT, CORS
- **Deployment:** Vercel (frontend), Render (backend)

---

## 📝 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd from\ starting
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and JWT secret
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

### 4. Environment Variables

- **Backend:**  
  Create `backend/.env` with:
  ```
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```
- **Frontend:**  
  Update `src/api/api.js` with your backend URL.

---

## 🌐 Deployment

- **Frontend:**  
  Deployed on [Vercel](https://vercel.com/).  
  Set root directory to `frontend`.

- **Backend:**  
  Deployed on [Render](https://render.com/).  
  Set root directory to `backend`.  
  Add environment variables in Render dashboard.

---

## 📱 Screenshots

![Home Page](https://static.vecteezy.com/system/resources/previews/025/729/946/original/note-taking-app-icon-in-illustration-vector.jpg)

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ About

Multi-Tenant Notes App helps individuals and teams organize, share, and secure their notes.  
Built for productivity, collaboration, and scalability.

---
