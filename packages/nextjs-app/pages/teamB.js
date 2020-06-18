import MicroApp from '@robincsl/micro-app'
import {init, ErrorBoundary} from "@robincsl/sentry"

const { hub } = init({
  dsn: "http://467e9a03e4774033902d0c9015a722da@0.0.0.0:9000/7",
  beforeSend(event) {
    console.log("nextjs-app-teamB", event)
    // Don't send the event to Sentry
    return null
  }
})

export default function TeamB() {
  const [shouldThrowError, throwError] = React.useState(false);

  if (shouldThrowError) {
    throw new Error("Snap! The app crashed.")
  }
  return (
    <>
      <h1>Team B's Page</h1>
      <button onClick={() => throwError(true)}>Trigger application error</button>
      <MicroApp />
    </>
  )
}

TeamB.ErrorBoundary = (page) => (
    <ErrorBoundary hub={hub}>
      {page}
    </ErrorBoundary>
  )
