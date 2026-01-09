import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'hongyeonju',
  description: '홍연주(HONG YEONJU) Portfolio',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://hongyeonju.com',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: '/favicon.ico',
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
