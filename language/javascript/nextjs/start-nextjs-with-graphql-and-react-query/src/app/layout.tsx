import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  )
}
