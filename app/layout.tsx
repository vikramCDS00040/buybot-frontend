import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata = {
  title: 'BuyBot - AI Product Recommendations',
  description: 'AI-powered product recommendation system with sentiment analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <QueryProvider>
            <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark text-text-light dark:text-text-dark transition-colors duration-300">
              {children}
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
