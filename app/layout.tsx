import { ReactNode } from 'react';

// Подключаем CSS-файлы
import '../public/css/swiper-bundle.min.css';
import '../public/css/select2.min.css';
import '../public/css/style.css';

export const metadata = {
  title: 'CBD',
  description: 'Продукт для жизни',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body className="home">
        {children}
        <script src="/js/jquery-3.6.3.min.js" defer></script>
        <script src="/js/swiper-bundle.min.js" defer></script>
        <script src="/js/jquery.spincrement.js" defer></script>
        <script src="/js/select2.min.js" defer></script>
        <script src="/js/jquery.maskedinput.js" defer></script>
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  );
}