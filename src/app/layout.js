import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'hongyeonju',
  description: '홍연주(HONG YEONJU) Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://hongyeonju.com',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
