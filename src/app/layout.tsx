import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components/ui'
import { Providers } from '@/components/providers/Providers'

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
        <link rel="stylesheet" href="https://luisrrleal.com/styles/leal-styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >
        <Providers>
          <div className='p-40'>
            <Navbar />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>

    </html>
  )
}

