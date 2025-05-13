import './globals.css'
import Navbar from '@/components/navbar'
import SiteFooter from '@/components/footer'
import FloatingBlob from '@/components/floatingBlob'


export const metadata = {
  title: 'Kevank Nigeria LTD.',
  description: 'Building a Better Future, Together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FloatingBlob />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
