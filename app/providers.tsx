"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  walletConnectWallet,
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";

// Hardcoded projectId
const projectId = "2GQEuel4OBbYmZKDFtjGoOA7ZXv";

// Configure chains
const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

// Define wallet connectors
const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      walletConnectWallet({ chains, projectId }),
    ],
  },
  {
    groupName: "Other",
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
], { appName: "YourAppName" });

// Create wagmi config
const wagmiConfig = createConfig({
  autoConnect: true, // Enable auto-connect if desired
  connectors,
  publicClient,
});

// Initialize the Query Client
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        {children}
      </RainbowKitProvider>
    </QueryClientProvider>
  );
}
