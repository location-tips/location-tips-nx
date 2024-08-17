import '@location-tips/location-tips-uikit/styles/index.css';

import { Header } from '@front/components/Header';
import { ThemeProvider } from '@front/components/ThemeProvider';
import { Modal } from '@front/components/Modal';

import './global.css';

export const metadata = {
  title: 'Welcome to frontend',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider />
        <Header />
        {children}
        <Modal />
      </body>
    </html>
  );
}
