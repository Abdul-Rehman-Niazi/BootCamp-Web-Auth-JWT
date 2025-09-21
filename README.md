# BootCamp Web Auth JWT
This repo is only created for the purpose of submision of assignment of bootcamp with devTown web auth intensive by sir 
# 🔐 Password Hashing & JWT Authentication (Node.js + Express)

This project was built during my **DevTown Bootcamp** journey.  
It demonstrates secure authentication in Node.js using:

- **bcrypt** → Password hashing & verification  
- **jsonwebtoken (JWT)** → Token-based authentication  
- **Express.js** → REST API framework  

---

## 🚀 Features
- **Register User** → Hashes password before saving (in-memory store).  
- **Login User** → Verifies hashed password, generates JWT on success.  
- **Protected Route (/profile)** → Accessible only with a valid JWT.  

---

## 📌 API Endpoints
- `POST /register` → Register a new user  
  ```json
  {
    "username": "john",
    "password": "mypassword"
  }
POST /login → Login with credentials
✅ Returns JWT token

GET /profile → Protected route
Requires header:
Authorization: Bearer <your_token>

🛠️ Tech Stack

Node.js

Express.js

bcrypt

JSON Web Token (JWT)

💡 Learning

This project taught me:

How to hash & compare passwords securely.

How to implement JWT for protected routes.

Why authentication is essential in real-world apps.

🎓 Credits

Built as part of DevTown Bootcamp, guided by Ishan Mishra.
