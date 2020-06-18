import {init, ErrorBoundary} from "@robincsl/sentry"

const { hub } = init({
  dsn: "http://467e9a03e4774033902d0c9015a722da@0.0.0.0:9000/7",
  beforeSend(event) {
    console.log("nextjs-app-teamB", event)
    // Don't send the event to Sentry
    return null
  }
})

const Test1 = () => <h1>Server Test 1</h1>

export function getServerSideProps() {
  throw new Error('Server Test 1')
}

Test1.ErrorBoundary = (page) => (
  <ErrorBoundary hub={hub}>
    {page}
  </ErrorBoundary>
)

export default Test1
