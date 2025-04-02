import './global.css';
import Script from 'next/script';

export const metadata = {
  title: 'Welcome to portpolio',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/ef95f33027.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-dark-jungle text-soft-cream">{children}</body>
    </html>
  );
}
