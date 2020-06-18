For Next.js to correctly capture errors, we need to use Sentry.init in the root of the Next.js app, i.e. in `_app.js`. See for example http://localhost:3000/server/test1 :
- when using `initSentryHub.js`, the error is not reported to Sentry, despite making the hub the main hub.
- when using `initSentry.js`, the error is reported to Sentry

Using error boundaries with hubs for different pages seems to only work in the client side for now it seems. The server side errors are caught by the DSN for `initSentry.js`.

Reason is that we are using BrowserClient when initiliasing Hubs and they only make sense client-side. This concept of Hubs and Clients does not seem to be available in Sentry for Node.js... To be continued.
