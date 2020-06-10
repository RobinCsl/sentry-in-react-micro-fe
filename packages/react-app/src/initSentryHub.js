import {withErrorBoundary as _withErrorBoundary, init} from "@robincsl/sentry"

const { hub } = init({
  dsn: "http://467e9a03e4774033902d0c9015a722da@0.0.0.0:9000/7",
  beforeSend(event) {
    console.log("react-app", event)
    // Don't send the event to Sentry
    return null
  }
})

export function withErrorBoundary(Component) {
  return _withErrorBoundary(Component, hub);
}
