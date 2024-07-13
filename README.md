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
``` 

#### Databases
- Firestore (NoSQL database) in Firebase
- Chromadb (vector database) starting locally in docker

## <a name="installation"></a>Installation

### Monorepo deps

```
npm install --legacy-peer-deps
```

### Chromadb

#### Docker

```
docker run -d -p 8000:8000 --rm --name chromadb -v ./chroma:/chroma/chroma -e IS_PERSISTENT=TRUE -e ANONYMIZED_TELEMETRY=TRUE chromadb/chroma:latest
```

#### Chromadb pipe (https://datapipes.chromadb.dev/)

- Install python 3.12+

```
pip install chromadb-data-pipes
```

** In case of error in pip (command not found, etc...) use pip3 instead of pip **

- Backup local data
```
cdp export "http://localhost:8000/locations" > locations_chroma_data.jsonl
```

- Restore from backup
```
Nothing to say yet
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