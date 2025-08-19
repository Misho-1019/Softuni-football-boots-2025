# Softuni-football-boots-2025
Softuni React Project Defense

# Softuni Football Boots 2025 ⚽👟

A React + Vite single-page app for browsing and managing football boots, created for a university defense project. The client is deployed to Firebase Hosting and integrates forms, validation, likes, and comments.

## ✨ Key Features
- **Catalog** of football boots with cards and detail pages
- **Authentication** (login/register, session via backend at `VITE_APP_SERVER_URL`)
- **Protected actions**: create/edit/delete boots (AuthGuard)
- **Comments** with optimistic UI updates
- **Likes** with per-item total & user-like checks
- **Profile** page for the current user
- **Responsive UI** (Bootstrap + custom CSS) and toast notifications

## 🧭 App Navigation (Routes)
| Path | Component | Guard | Purpose |
|---|---|---|---|
| `/` | `Home` | — | Landing page |
| `/info` | `Info` | — | Static info page |
| `/boots` | `Catalog` | — | List all boots |
| `/boots/:bootId/details` | `BootDetails` | — | Boot details, like counter |
| `/boots/:bootId/comments` | `CommentSection` | **Auth** | Read/add comments (optimistic) |
| `/boots/create` | `CreateBoot` | **Auth** | Create a new boot |
| `/boots/:bootId/edit` | `EditBoots` | **Auth** | Edit existing boot |
| `/login` | `Login` | **Guest** | Sign in |
| `/register` | `Register` | **Guest** | Create account |
| `/logout` | `Logout` | **Auth** | End session |
| `/profile` | `Profile` | **Auth** | User profile |

> Guards live in `components/guards/` (`AuthGuard`, `GuestGuard`) and are wired in `App.jsx` with nested routes.

## 🧱 Tech Stack
- **Frontend:** React 18, Vite, React Router
- **Forms & Validation:** React Hook Form, Yup, `@hookform/resolvers`
- **UX:** React Toastify, Bootstrap + custom CSS
- **State/Context:** `UserProvider`, `userContext`
- **Deploy:** Firebase Hosting

## 🗂️ Project Structure (client)
```
client/
├─ src/
│  ├─ api/               # bootApi, authApi, commentApi, likeApi
│  ├─ components/
│  │  ├─ catalog/        # Catalog, BootItem
│  │  ├─ comment/        # CommentSection
│  │  ├─ create/         # CreateBoot
│  │  ├─ details/        # BootDetails
│  │  ├─ edit/           # EditBoots
│  │  ├─ guards/         # AuthGuard, GuestGuard
│  │  ├─ header/, footer/# Layout
│  │  ├─ home/, info/    # Pages
│  │  ├─ login/, register/, logout/
│  │  └─ profile/
│  ├─ context/           # userContext
│  ├─ hooks/             # useAuth, usePersistedState
│  ├─ providers/         # UserProvider
│  ├─ utils/             # request wrapper
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ firebase.json
```

## ⚙️ Configuration
Create `.env.development` / `.env.production` in `client/` (examples already included). The API base is read from:
```
VITE_APP_SERVER_URL=<your-backend-base-url>
```
APIs expect these base paths (from the code):
- Boots: `${VITE_APP_SERVER_URL}/data/boots`
- Users (auth): `${VITE_APP_SERVER_URL}/users`
- Comments, Likes: analogous under `/data`

> The `utils/request.js` wrapper centralizes fetch, JSON body, and error handling. `useAuth()` decorates requests with auth headers.

## 🚀 Getting Started
```bash
git clone <repo-url>
cd Softuni-football-boots-2025/client

# Install
npm install

# Dev
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🧪 Available Scripts
- `dev` – start Vite dev server
- `build` – production build
- `preview` – preview dist build
- `lint` – ESLint
- `deploy` – build and deploy to Firebase Hosting

## 📦 Deploy (Firebase Hosting)
```bash
npm install -g firebase-tools
firebase login
# ensure firebase.json is present and hosting is configured
npm run deploy
```
`firebase.json` and `.firebaserc` are already included in `/client`.

## 🔐 Auth & Data Flow (high level)
- `UserProvider` + `userContext` expose user identity (e.g., `email`, `_id`)
- `useAuth()` provides `request` methods that add auth headers
- Feature hooks:
  - `useBoots()`, `useBoot(id)` – list/fetch boots
  - `useLikeBoot()`, `getTotalLikes()`, `hasUserLiked()` – likes API
  - `useComments(bootId)`, `useCreateComment()` – comments with optimistic UI
- Guards in routing restrict create/edit/logout/profile to authenticated users

## 🧰 Troubleshooting
- **Blank data / 401** → Check `VITE_APP_SERVER_URL` and that your backend is reachable
- **CORS errors** → Enable CORS on the backend for the hosting origin
- **Firebase 404 after refresh** → Set rewrites in Firebase Hosting to serve `index.html` for SPA routes
- **Env vars not picked up** → Restart Vite after editing `.env.*`

## 📝 License
Educational use (Software University – 2025). Update as needed.


## Workshop 4 - Deployment
1. Server Deployment (Google Cloud Platform Cloud Run)
 - [x] Register into GCP
 - [x] Create project in GCP
 - [x] [Install Docker Desktop](https://www.docker.com/products/docker-desktop/)
 - [x] Create Dockerfile
 - [x] Create Docker Image `docker build -t softuni-practice-server . `
 - [x] Check docker images `docker images`
 - [x] Start local container `docker run -p 8080:8080 softuni-practice-server`
 - [x] Change image name `docker tag softuni-practice-server europe-west4-docker.pkg.dev/football-boots-456601/softuni-practice-server-repo/softuni-practice-server` 
 - [x] [Install gcloud SDK](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe)
 - [x] Init and login `gcloud init` `gcloud login`
 - [x] List available projects `gcloud project list`
 - [x] Set default project `gcloud config set project football-boots-456601`
 - [x] Check current project `gcloud config get-value project`
 - [x] Authorize gcloud for docker `gcloud auth configure-docker europe-west4-docker.pkg.dev`
 - [x] Deploy to cloud run `gcloud run deploy softuni-practice-server --image europe-west4-docker.pkg.dev/football-boots-456601/softuni-practice-server-repo/softuni-practice-server --min-instances 0 --max-instances 1 --region europe-west4 --platform=managed --allow-unauthenticated`
 
2. Client Deployment
 - [x] [Use env variables in vite](https://vite.dev/guide/env-and-mode)
 - [x] Prepare client to work with deployed server (use env variables for server url)
 - [x] Install firebase `npm i -g firebase-tools`
 - [x] Login to firebase sdk `firebase login`
 - [x] Link firebase project to GCP project
 - [x] Initialize firebase hosting `firebase init hosting`
 - [x] Deploy client `npm run build` `firebase deploy`
 - [x] Config npm script
3. CI/CD