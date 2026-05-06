<p align="center">
  <img src="assets/logo.png" width="150" />
</p>

<h1 align="center">🌿 Glowify</h1>
<p align="center">AI Powered Personalized Skincare Intelligence System</p>

# 🌿 Glowify — AI Powered Personalized Skincare Intelligence System

Glowify is an AI-powered skincare intelligence platform that analyzes user skin through **chatbot interaction, optional face scanning, and lifestyle data tracking** to generate **personalized skincare routines and formulation-based recommendations**.

The system focuses on **safe, non-medicated, non-product-based skincare guidance**, combining AI, dermatology knowledge, and user behavior analytics.

---
📄 Project Report  
📘 Full documentation of system design, architecture, and implementation.  

👉 [Download / View Capstone Report](https://github.com/codedbydollys10/Glowify/raw/main/docs/Capstone_Report.pdf)

## 🔗 Repository
https://github.com/codedbydollys10/Glowify.git

---

## 📌 Table of Contents
- Abstract  
- Problem Statement  
- Proposed Idea  
- Features  
- Tech Stack  
- System Architecture  
- AI Personalization Engine  
- Core Modules  
- Database Structure  
- Setup & Installation  
- Environment Variables  
- Innovation Highlights  
- Challenges Faced  
- What I Learned  
- Conclusion  

---

## 🧩 Abstract

Glowify is an AI-driven skincare personalization system designed to analyze user skin conditions using chatbot-based input, facial scan data, and health metrics.

It generates:
- Personalized skincare routines
- Ingredient compatibility insights
- Skin health reports
- Educational skincare guidance

The system ensures **safe, non-medical skincare recommendations** while improving user awareness about ingredients and skin health.

---

## ❗ Problem Statement

Most skincare platforms suffer from:

- Generic skincare recommendations  
- Lack of personalization based on real skin data  
- No ingredient compatibility awareness  
- Over-reliance on product marketing  
- No integration of lifestyle + skin correlation  

👉 Result: Users receive ineffective or unsuitable skincare guidance.

---

## 💡 Proposed Idea

Glowify solves this by creating an **AI-powered personalized skincare ecosystem** that:

- Understands user skin through chatbot + face scan  
- Tracks lifestyle health data  
- Generates custom skincare routines  
- Explains ingredient science  
- Provides safety-based formulation guidance  

---

## 🚀 Features

### 🔐 Authentication System
- Email/password login  
- Google OAuth login  
- Secure Supabase-based authentication  

---

### 🤖 AI Skin Analysis Chatbot
- Collects skin concerns and type  
- Gender-based flow (male/female logic)  
- Stores structured skin profile data  

---

### 📸 Face Scan Module (Optional)
- AI-assisted facial skin analysis  
- Can be skipped by user  
- Merges with chatbot data for better accuracy  

---

### 🧠 Personalized Skincare Kit (Core Engine)
- AI-generated skincare routine  
- Morning & night routine planning  
- Ingredient-based formulation suggestions  
- Safe home remedy recommendations  
- Graph-based skin insights  

---

### 🧪 Ingredients & Chemistry Module
- Detailed ingredient explanations  
- Compatibility checker (mix safety analysis)  
- Reaction risk detection between compounds  

---

### 🎮 GlowPlay (Gamified Learning System)
- Ingredient memory games  
- Skin science quizzes  
- Reaction safety challenges  
- Educational gamification system  

---

### 📊 Health & Lifestyle Tracker
- Water intake monitoring  
- Sleep tracking  
- Sugar intake analysis  
- Weight tracking  
- Skin impact correlation insights  

---

### 📅 Skin Cycle & Period Tracker
- 28-day cycle prediction  
- Skin fluctuation insights  
- Hormonal impact analysis  

---

### 📚 Educational System
- Myth vs Fact skincare module  
- Emergency skin care guide  
- Daily skincare tips  

---

### 🎯 Quiz System
- Personalized quizzes based on:
  - Skin type  
  - Age  
  - Gender  
- Improves skincare awareness  

---

### 👤 User Dashboard
- Personalized profile  
- Skin history tracking  
- Progress analytics  

---

## 🏗️ Tech Stack

### Frontend
- React (TSX)
- Tailwind CSS

### Backend
- Node.js
- Python
- JavaScript APIs

### Database
- Supabase (PostgreSQL)

### AI Integration
- Grok API (LLM-based skin insights & generation)

---

## 🧠 System Architecture

User Input Layer  
→ Chatbot + Face Scan + Health Data  

Data Processing Layer  
→ Supabase Database  

AI Processing Layer  
→ Grok API (analysis + generation)  

Output Layer  
→ Skincare Kit + Routine + Insights + Reports  

---

## ⚙️ Core AI Engine

Glowify AI engine processes:

- Skin type classification  
- Ingredient compatibility mapping  
- Lifestyle correlation analysis  
- Risk detection for chemical combinations  
- Personalized routine generation  

---

## 🗄️ Database Structure

Main Tables:
- Users  
- SkinProfiles  
- ChatbotResponses  
- FaceScanData  
- HealthMetrics  
- SkincareRoutines  
- IngredientLibrary  

---

## 📦 Setup & Installation

### Clone Repository
```bash
git clone https://github.com/codedbydollys10/Glowify.git
cd glowify
Install Dependencies

Frontend:

cd frontend
npm install
npm run dev

Backend:

cd backend
npm install
npm run dev

🔐 Environment Variables
Backend .env
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
GROK_API_KEY=your_key

Frontend .env
VITE_API_BASE_URL=http://localhost:5000

💡 Innovation Highlights

   AI-powered skincare personalization engine
  Dual input system (chatbot + face scan)
  Ingredient compatibility intelligence
  Gamified skincare education system
  Lifestyle-based skin prediction model
  Non-product, non-medical safe recommendation system

🧠 Challenges Faced

   Designing safe skincare logic without medical claims
   Merging multi-source user data (chatbot + scan + health)
   Ensuring ingredient compatibility accuracy
   Building consistent AI response structure
   Managing personalization complexity

📚 What I Learned

Technical Skills
    Full-stack development (React + Node.js)
    AI API integration (LLM-based systems)
    Database modeling with Supabase
    REST API architecture

System Design
    Multi-input AI pipelines
    Personalized recommendation systems
    Data-driven decision systems

Problem Solving
   Real-world skincare logic modeling
   Safety-first AI recommendation design

## ⚠️ Disclaimer
Glowify provides educational skincare guidance only.  
It does not recommend medicines or promote cosmetic products.

🏁 Conclusion
Glowify is an AI-powered personalized skincare intelligence system that analyzes skin, lifestyle, and ingredients to generate safe, science-based skincare routines and insights.


## ⭐ If you like this project
Give it a ⭐ on GitHub and share feedback!
