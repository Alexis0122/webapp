import type { AppProps } from "next/app";
import type { Page } from '@/types';
import { ProvidersWrapper } from "@/app";
import { RootLayout } from "@/components/layout";
import '@/globals.css'

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout ?? RootLayout

  return(
    <ProvidersWrapper>
      <Layout>
        {<Component {...pageProps}/>}
      </Layout>
    </ProvidersWrapper>
  )
}