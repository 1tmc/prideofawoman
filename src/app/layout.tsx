import "../styles/index.scss";
import { DM_Sans, Nunito_Sans, Pacifico } from 'next/font/google'

const body = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--base-font',
});

const heading = Nunito_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--heading-font',
});

const script = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--script-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="The Pride of a Woman Christian Network is dedicated to raising women of purpose, power, and prayer. Located in Accra, Ghana." />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <title>The Pride of a Woman Christian Network</title>
      </head>
      <body suppressHydrationWarning={true} className={`${body.variable} ${heading.variable} ${script.variable}`}>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
