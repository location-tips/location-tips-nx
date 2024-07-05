import admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';
import fs from 'fs';
import { resolve } from 'path';

export const configureFirebase = () => {
    // TODO: Read the service account key from environment variable
    const serviceAccountKey = fs.readFileSync(resolve('./packages/backend/location-tips-409908-firebase-adminsdk-ow8ay-6a0383eaa5.json'));

    const config: ServiceAccount = JSON.parse(serviceAccountKey.toString());

    console.log('config', config);

    // Initialize Firebase Admin SDK
    admin.initializeApp({
        credential: admin.credential.cert(config),
        storageBucket: "location-tips-409908.appspot.com",
    });

}
