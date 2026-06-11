# 🎨 Thumbait - AI-Powered Thumbnail Generator

An AI-Powered SaaS thumbnail generator built on the MERN stack. Thumbait is designed to streamline the content creation process by integrating the Google Gemini API for prompt-to-image generation, featuring secure JWT authentication and automated asset management via Cloudinary.

## 🚀 Tech Stack

**Frontend (Client)**
* **React (Vite):** Single Page Application (SPA) for the user studio interface.
* **State Management & UI:** Collecting generation parameters (title, prompt, style, colors).

**Backend (Server - Upcoming)**
* **Node.js & Express:** Secure REST API gateway.
* **MongoDB:** NoSQL database for secure user profiles and generation history.
* **Security:** JSON Web Tokens (JWT) for stateless session authentication.

**External APIs & Integrations**
* **Google Gemini API:** Core AI engine for processing engineered prompts into thumbnail images.
* **Cloudinary:** Cloud asset management and optimized CDN delivery for generated images.

## 🏗️ System Architecture & Data Flow

When complete, the system will operate on the following architectural flow:

1. **Client Interface:** The React SPA serves as the user studio, collecting specific generation parameters and managing local state.
2. **Secure Gateway:** The Node.js/Express backend intercepts REST API requests, utilizing JWT middleware to verify active user sessions before processing any AI generation requests.
3. **AI Generation:** The backend securely communicates with the Google Gemini API, sending highly engineered prompts based on user inputs and receiving generated image data.
4. **Asset Management:** Instead of straining the MongoDB database with heavy image blobs, generated images are automatically uploaded to Cloudinary, ensuring optimized CDN delivery and faster load times.
5. **Data Persistence:** MongoDB securely stores user profiles, encrypted credentials, and references to the Cloudinary URLs for user history tracking.

## 📂 Project Structure
```
Thumbait/
├── client/               # React (Vite) Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/               # Node.js Backend (In Development)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## 🛠️ Local Development Setup

### 1. Client Setup
Navigate to the frontend directory and install dependencies:
\`\`\`bash
cd client
npm install
npm run dev
\`\`\`
*The React application will be running on `http://localhost:5173`.*

### 2. Server Setup (Coming Soon...)
