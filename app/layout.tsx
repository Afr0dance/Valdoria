import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fennland Forum 2024',
  description: 'Classified Delegation Dossiers',
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
