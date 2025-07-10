# 🎓 Edemy – Your Complete Learning & Teaching Partner

Edemy is a powerful **Learning Management System (LMS)** that allows **teachers to create and sell courses**, while **students can browse, purchase, and learn** seamlessly.

It features:
- 👨‍🏫 Role-based experience (Teachers & Students)
- 💳 Secure payments via Stripe
- 🔐 Authentication via Clerk
- ☁️ Cloudinary for image/media uploads
- ⚙️ Backend built with Node.js & MongoDB

---

## 🚀 Features

- Create, manage, and delete courses (Teacher dashboard)
- Secure checkout and access for purchased courses (Student dashboard)
- Upload course images/media with Cloudinary
- Fully functional Stripe payment integration
- Clerk authentication (Sign up, login, role-based access)
- Built using the MERN stack (MongoDB, Express, React, Node)

---

## 🛠️ How to Setup & Run this Project

---

### 🔧 Prerequisites

- ✅ Install **Node.js**  
  - Download: https://nodejs.org/en/download/
  - Run the installer and complete setup

---

### 📁 Project Structure

edemy/
├── client/ # React Frontend
└── server/ # Node + Express Backend

yaml
Copy
Edit

---

## 🔙 Setup Backend First

1. **Open the project folder in VS Code**

2. **Setup MongoDB & Obtain Mongo URI**  
   👉 https://www.mongodb.com/cloud/atlas/register

3. **Setup Cloudinary for media uploads**  
   👉 https://cloudinary.com/users/register_free

4. **Setup Clerk for Authentication**  
   👉 https://clerk.com/

5. **Setup Stripe for Payment Gateway**  
   👉 https://dashboard.stripe.com/login

6. **Push your project to GitHub & Deploy backend to Vercel**  
   👉 https://vercel.com/

7. **Add the deployed backend URL to:**
   - Clerk Webhook settings
   - Stripe Webhook settings

⚠️ Make sure the backend is deployed and accessible before starting the frontend.

---

## 🌐 Setup & Run Frontend (Client)

1. Open the `client` folder in terminal

2. Install dependencies:
   ```bash
   npm install
Create a .env file with necessary environment variables:

Backend API URL

Clerk frontend keys

Cloudinary keys

Stripe public key

Run the project:

bash
Copy
Edit
npm run dev
(Optional) Deploy the frontend using Vercel or Netlify

🔗 Deployment Links (Optional)
Frontend: your-frontend.vercel.app

Backend: your-backend.vercel.app

❓ Need Help?
If you face any issues or need help with setup, feel free to contact:
📩 Shreyas Pathe – patheshreyas7@gmail.com

📄 License
This project is licensed under the MIT License.

Built with ❤️ by Shreyas Pathe
