import './globals.css'
// import type { Metadata } from 'next'
import Link from 'next/link'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const menuItem = (url:string, title:string, className?:string) => (
  <div className={`bg-black text-white py-2 px-3 rounded-lg ${className}`}><Link href={url}>{title}</Link></div>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="container mx-auto py-[10px]">
          {/* header */}
          <div className='inline-flex w-full' style={{marginBottom:"20px"}}>
            {menuItem('/','Home', 'bg-white !text-blue-500 text-lg')}
            <div className='inline-flex justify-end space-x-3 w-full'>
              {menuItem('/dashboard','Dashboard')}
              {menuItem('/settings','Settings')}
              {menuItem('/calculator','Calculator')}
              {menuItem('/search','Search')}
            </div>
          </div>
          {children}
        </body>
    </html>
  )
}
