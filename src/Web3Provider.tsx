import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [base, mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
    [base.id]: http(),
    },

    // Required API Keys
   walletConnectProjectId :  import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694",

    // Required App Info
    appName: "Your App Name",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

import { ReactNode } from 'react';

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};