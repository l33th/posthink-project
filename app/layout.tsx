import './globals.css'

export const metadata = {
  title: 'POSTHINK',
  description: 'Full-Stack Web Application by WMouton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
