'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import Layout from '@/components/templates/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Contentlayer Next.js Example</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
