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
import { createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Infura project ID
const infuraApiKey = "2GQEuel4OBbYmZKDFtjGoOA7ZXv";

// Define Viem HTTP transport for the mainnet
const mainnetClient = {
  chain: mainnet,
  transport: http({ url: `https://mainnet.infura.io/v3/${infuraApiKey}` }),
};

// Define wallet connectors
const connectors = connectorsForWallets(
  [
    {
      groupName: "Popular",
      wallets: [
        walletConnectWallet({ chains: [mainnet], projectId: infuraApiKey }),
      ],
    },
    {
      groupName: "Other",
      wallets: [
        argentWallet({ chains: [mainnet] }),
        trustWallet({ chains: [mainnet] }),
        ledgerWallet({ chains: [mainnet] }),
      ],
    },
  ],
  { appName: "YourAppName" }
);

// Create wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: mainnetClient.transport,
});

// Initialize the Query Client
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={darkTheme()} chains={[mainnet]}>
        {children}
      </RainbowKitProvider>
    </QueryClientProvider>
  );
}
