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
import { configureChains, createConfig } from "@wagmi/core";
import { mainnet } from "wagmi/chains";
import { infuraProvider } from "@wagmi/core/providers/infura";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Infura project ID
const infuraApiKey = "2GQEuel4OBbYmZKDFtjGoOA7ZXv";

// Configure chains with Infura provider
const { chains, publicClient } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: infuraApiKey })]
);

// Define wallet connectors
const connectors = connectorsForWallets(
  [
    {
      groupName: "Popular",
      wallets: [
        walletConnectWallet({ chains, projectId: infuraApiKey }),
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
  ],
  { appName: "YourAppName" }
);

// Create wagmi config
const wagmiConfig = createConfig({
  connectors,
  chains,
});

// Initialize the Query Client
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
    </QueryClientProvider>
  );
}
