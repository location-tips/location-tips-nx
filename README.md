# LocationTips

- [Structure](#structure)
- [Installation](#installation)
- [Start](#start)

## <a name="structure"></a>Structure

### types

Common types fro frontend and backend
Using:

```
import type { <any type> } from "@types";
```

### frontend

Frontend built on Next.js 14 framework

#### UI Kit

##### Edit `.npmrc`

we are keeping uikit packages in github npm registry. To be able to install it, you need to configure `.npmrc`
create github token with access to project packages (access to read) `https://github.com/settings/tokens`
find `.npmrc` in your home folder `vi ~/.npmrc`
add the following strings to it

```
@location-tips:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GITHUB_TOKEN>
```

### backend

Backend built on Nest.js framework
To be able working with firebase create `.env` file in backend's root folder `packages/backend`

```
FIREBASE_SERVICE_ACCOUNT_KEY=<ask_me_for_the_key>
GEMINI_API_KEY=
VERTEX_AI_ACCOUNT_KEY=
GOOGLE_MAPS_API_KEY=
GOOGLE_MAPS_ID=
```

#### Databases

- Firestore (NoSQL database) in Firebase + vector search

## <a name="installation"></a>Installation

### Monorepo deps

```
npm install
```

## <a name="run"></a>Run

### Start all

```
npm run start
```

### Start frontend

```
npm run front
```

### Start backend

```
npm run back
```
