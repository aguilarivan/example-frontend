import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Box CRUD App',
  description: 'A simple CRUD app for managing boxes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}