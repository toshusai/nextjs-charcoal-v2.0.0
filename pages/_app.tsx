import type { AppProps } from "next/app";
import { CharcoalProvider } from "@charcoal-ui/react";
import { dark, light } from "@charcoal-ui/theme";
import { prefersColorScheme, themeSelector } from "@charcoal-ui/styled";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CharcoalProvider
      themeMap={{
        ":root": light,
        [themeSelector("light")]: light,
        [themeSelector("dark")]: dark,
        [prefersColorScheme("dark")]: dark,
      }}
    >
      <Component {...pageProps} />
    </CharcoalProvider>
  );
}
