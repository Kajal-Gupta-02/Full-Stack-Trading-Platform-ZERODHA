# Zerodha Clone – Setup Instructions

## Quick Start

### 1. Backend (port 4000)
```bash
cd backend
npm install
npm run dev       # uses nodemon  (or: npm start  for plain node)
```

### 2. Dashboard (port 3001)
```bash
cd Dashboard
npm install
PORT=3001 npm start
```

### 3. Frontend / Landing Page (port 3000)
```bash
cd frontend
npm install
npm start
```

---

## What was fixed

### Backend
| File | Fix |
|------|-----|
| `index.js` | Removed duplicate `server.js` — only `index.js` is the entry point now |
| `Controllers/AuthController.js` | Login now returns `200` (was `201`). Failed login/signup return proper `401`/`400` status codes with `success: false` |
| `Controllers/AuthController.js` | `withCredentials` removed from cookie options (it's a client-side option, not server-side) |
| `Controllers/AuthController.js` | Cookie now correctly uses `httpOnly: true`, `sameSite: "lax"`, `maxAge` in ms |
| `model/UserModel.js` | `createdAt` default changed from `new Date()` (evaluated once at startup) to `Date.now` (evaluated per document) |
| `model/UserModel.js` | `isModified("password")` guard added to pre-save hook so re-saves don't double-hash |

### Dashboard
| File | Fix |
|------|-----|
| `pages/Login.jsx` | Correctly reads `data.success` from `200` response. Shows backend error messages. Disabled button during submit |
| `pages/Signup.jsx` | Same fixes as Login |
| `context/AuthContext.js` | Cleaner cookie clear on logout |
| `components/Menu.js` | Active menu item uses `useLocation()` so it stays highlighted on navigation |
| `index.css` | Full responsive overhaul: mobile-first, responsive watchlist, auth forms work on all screen sizes |

