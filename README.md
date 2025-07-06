# FixItNow - On-Demand Artisan Booking Platform (MVP)

<!-- FixItNow is a Nigerian-focused on-demand platform that connects customers with verified local artisans (e.g., electricians, plumbers, carpenters) in real-time. It includes role-based experiences for customers, artisans, and platform admins.

--- -->

## Project Setup Instructions

### 1. Clone the Repository
<!-- ```bash
git clone https://github.com/yourusername/fixitnow.git
cd fixitnow
``` -->

### 2. Install Frontend Dependencies
<!-- ```bash
cd client
npm install
``` -->

### 3. Install Backend Dependencies
<!-- ```bash
cd ../server
npm install
``` -->

### 4. Environment Variables
<!-- Create a `.env` file inside `/server` with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYSTACK_SECRET_KEY=your_paystack_key
```

--- -->

## Project Architecture Overview
<!-- 
### Roles:
- Customer: Find artisans, unlock contact, track job, review
- Artisan: Register with NIN, receive jobs, track progress
- Admin: Approve artisans, monitor jobs, resolve disputes

### Tech Stack:
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Payment**: Paystack
- **Auth**: JWT + Role Middleware -->

<!-- --- -->

## Running the App

### Start Backend (API server)
<!-- ```bash
cd server
npm run dev
``` -->

### Start Frontend (React App)
<!-- ```bash
cd client
npm start
```

The app will run at `http://localhost:3000` and the API at `http://localhost:5000` -->

<!-- --- -->

## Deployment

<!-- You can deploy the app using:
- **Frontend**: [Vercel](https://vercel.com/) or Netlify
- **Backend**: [Render](https://render.com/) or Railway
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Ensure you add all `.env` variables to the respective platform environment configs. -->

<!-- --- -->

## Git Commit Format

<!-- Use this convention for all commits:
```bash
feat: add new feature (e.g., feat: create unlock contact page)
fix: bug fix (e.g., fix: resolve dashboard crash on load)
docs: update README or comments
style: CSS or UI-only changes
refactor: code restructure without feature change
```

Example:
```bash
git add .
git commit -m "feat: implement Paystack unlock contact flow"
git push origin main
``` -->

---

## Folder Structure
<!-- See the `Fixitnow-structure` file for full details on:
- Client (React app)
- Server (API routes & controllers)
- Role-based folder setup

--- -->

## Author
<!-- **Olayemi Odobo** — Passionate problem solver building Nigeria-first digital tools. -->


