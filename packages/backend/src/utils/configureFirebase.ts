import admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';

export const configureFirebase = () => {
  // TODO: Read the service account key from environment variable
  const envServiceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!envServiceAccountKey)
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not provided');

  const serviceAccountKey = Buffer.from(
    envServiceAccountKey,
    'base64',
  ).toString('utf-8');

  const config: ServiceAccount = JSON.parse(serviceAccountKey);

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(config),
    storageBucket: 'location-tips-409908.appspot.com',
  });
};
