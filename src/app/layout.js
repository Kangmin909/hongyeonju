import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'hongyeonju',
  description: '홍연주(HONG YEONJU) Portfolio',
  openGraph: {
    type: 'website',
    url: 'https://hongyeonju.com',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: 'https://hongyeonju.vercel.app/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HONG YEONJU',
    description: '작가 홍연주',
    images: 'https://hongyeonju.vercel.app/favicon.ico',
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
