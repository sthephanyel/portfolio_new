import { client, ssrCache } from '@/lib/urql'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Provider } from 'urql'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {

  if(pageProps.urqlState){
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <div className={`${sans.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
