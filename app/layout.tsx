import FloatingBlob from '@/components/floatingBlob'
import Navbar from '@/components/navbar'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <FloatingBlob/>
      <Navbar/>
        {children}
      </body>
    </html>
  )
}
