import Background from './components/Background/component'
import WeatherModal from './components/weather/WeatherModal/component'
import AuthProvider from './context/useAuth'
import ModalProvider from './context/useModal'
import WeatherProvider from './context/useWeather'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather',
  description: 'Weather all world by coordinates',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png" />
      </head>
      <body>
        <AuthProvider>
          <ModalProvider>
            <WeatherProvider>
              <Background />
              <WeatherModal />
              {children}
            </WeatherProvider>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
