import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalStyles from "./styles/global.ts"
import { baseTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from './context/index.tsx'
import Main from './pages/MainPage/Main.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      {/* <ThemeProvider theme={baseTheme}> */}
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
          {/* <GlobalStyles /> */}
          <Main/>
        </QueryClientProvider>
      {/* </ThemeProvider> */}
    {/* </ContextProvider> */}
  </React.StrictMode>,
)
