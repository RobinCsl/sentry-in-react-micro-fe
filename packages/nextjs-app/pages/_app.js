import { hub } from '../initSentryHub'
import { ErrorBoundary }from '@robincsl/sentry'
import * as Sentry from "@sentry/node"
import {makeMain} from "@sentry/hub"

console.log(Sentry.getCurrentHub())
console.log(Sentry.getHubFromCarrier())
const old = makeMain(hub)
console.log({old})
console.log({hub})
// Sentry.init({
//   dsn: "http://467e9a03e4774033902d0c9015a722da@0.0.0.0:9000/7",
//   beforeSend(event) {
//     console.log("nextjs-app", event)
//     // Don't send the event to Sentry
//     return null
//   }
// })
export default function App({ Component, pageProps, err, defaultHub = hub }) {
  if (Component.ErrorBoundary) {
    {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
    return  Component.ErrorBoundary(<Component {...pageProps} err={err} defaultHub={defaultHub} />) 
  }
  
  return (
    <ErrorBoundary hub={hub}>
      <Component {...pageProps} err={err} defaultHub={defaultHub} />
    </ErrorBoundary>
  )
}


// import '../initSentry'
// function App({ Component, pageProps, err }) {
//   if (Component.ErrorBoundary) {
//     //     {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}

//     return Component.ErrorBoundary(<Component {...pageProps} err={err} />)
//   }
//   return <Component {...pageProps} />
// }

// export default App;
