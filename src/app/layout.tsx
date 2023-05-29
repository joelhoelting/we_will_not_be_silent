import '@/styles/global.scss';

import DesktopNav from '@/components/navigation/DesktopNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <DesktopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
