 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 2. Set up a React Query client.
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </WagmiProvider>
  </StrictMode>,
)
