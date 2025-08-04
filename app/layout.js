
// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Route Budget - Fleet Expense Management',
  description: "India's smartest Route Budget tracker for drivers, managers, and travel agencies.",
  verification: {
    google: 'ans0cRqO5iJ8FFFMeT6miph9o25dC71RWE3WLhQ6210',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
