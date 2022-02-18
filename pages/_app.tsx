import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import Script from 'next/script';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {darkTheme, globalStyles, lightTheme} from 'styles/next-theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 6,
    },
  },
});
function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Script
            src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
            strategy="beforeInteractive"
          ></Script>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
