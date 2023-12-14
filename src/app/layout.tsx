import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/ui'

export const metadata: Metadata = {
  icons: { icon: '/favicon.ico' },
  title: 'Luis Leal',
  description: 'FullStack Developer | Consejos para llegar a ser el desarrollador que siempre quisiste.',
  authors: [{ name: "@luisrrleal" }],
  keywords: ["luis leal", "leal", "programador", "paginas web", "consejos"],
  openGraph: {
    type: "website",
    siteName: "Luis Leal",
    url: "https://luisrrleal.com/",
    title: "Create Next App",
    description: "FullStack Developer | Consejos para llegar a ser el desarrollador que siempre quisiste.",
    images:
      "https://nextjs-typescript-tailwindcss-eslint-prettier.vercel.app/images/og.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://luisrrleal.com/styles/leal-styles.css" />
      </head>
      <body className='p-40'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

