import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Superagent Swift Documentation - Community made Swift SDK for Superagent</title>
          
        ) : (
          <title>{`${pageProps.title} - Superagent Swift SDK`}</title>
        )}
          <meta name="description" content={pageProps.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://superagent-swift.vercel.app" />
          <meta property="og:title" content="Superagent Swift Documentation" />
          <meta property="og:description" content={pageProps.description} />
          <meta property="og:image" content="/create-agent.jpeg" />
  
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="This is a community-made SwiftSDK for the Superagen LLM Framework. You need to have a superagent API Key in order to use the SDK. To get your API key head over to superagent.sh or fork the main repo and self-host it." />
          <meta name="twitter:url" content="https://superagent-swift.vercel.app" />
          <meta name="twitter:title" content="Superagent Swift Documentation" />
          <meta name="twitter:description" content={pageProps.description} />
          <meta name="twitter:image" content="/create-agent.jpeg" />
        
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
