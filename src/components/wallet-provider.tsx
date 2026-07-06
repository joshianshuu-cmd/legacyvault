
"use client";

import { createContext, useContext, ReactNode } from "react";
import { WagmiProvider } from 'wagmi';
import { http } from 'wagmi';
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { useAccount, useDisconnect } from "wagmi";
import '@rainbow-me/rainbowkit/styles.css';

type WalletContextType = {
  isConnected: boolean;
  address: `0x${string}` | undefined;
  disconnectWallet: () => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const config = getDefaultConfig({
  appName: 'Legacy Vault',
  projectId: 'db8cde9705ae847fded8154c8035b24f',
  chains: [base, mainnet, polygon, optimism, arbitrum],
  ssr: true,
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/rzYRowG49bGz2n6WSEX7_'),
    [polygon.id]: http('https://polygon-mainnet.g.alchemy.com/v2/rzYRowG49bGz2n6WSEX7_'),
    [optimism.id]: http('https://opt-mainnet.g.alchemy.com/v2/rzYRowG49bGz2n6WSEX7_'),
    [arbitrum.id]: http('https://arb-mainnet.g.alchemy.com/v2/rzYRowG49bGz2n6WSEX7_'),
    [base.id]: http('https://base-mainnet.g.alchemy.com/v2/rzYRowG49bGz2n6WSEX7_'),
  },
});

const queryClient = new QueryClient();

const WalletProviderContent = ({ children }: { children: ReactNode }) => {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    const value = {
        isConnected,
        address,
        disconnectWallet: () => disconnect(),
    };
    
    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    )
}

export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          theme={darkTheme({
            accentColor: '#7c3aed',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
          })}
        >
          <WalletProviderContent>{children}</WalletProviderContent>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

export { ConnectButton };
