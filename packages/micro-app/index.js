import React from 'react';
import { withErrorBoundary, init } from '@robincsl/sentry';

const { hub } = init({
  dsn: "http://865a179e70294228a63cc493ebef5eac@0.0.0.0:9000/8",
  beforeSend(event) {
    console.log("@robincsl/micro-app", event)
    // Don't send the event to Sentry
    return null
  }
})

const INITIAL_VALUE = 0;

function increment(value, setValue) {
  return () => setValue(value+1);
}
function decrement(value, setValue) {
  return () => setValue(value-1);
}
function reset(setValue) {
  return () => setValue(INITIAL_VALUE);
}


function MicroApp() {

  const [value, setValue] = React.useState(INITIAL_VALUE);

  if (value === 5) {
    throw new Error("You just broke the Internet! 😱")
  }

  return (
    <div style={{background: "#555", padding: "12px"}}>
      <h2><code>@robincsl/micro-app</code></h2>
      <p>The current value is: {value}</p>
      <button onClick={increment(value,setValue)}>Increment</button>
      <button onClick={decrement(value,setValue)}>Decrement</button>
      <button onClick={reset(setValue)}>Reset</button>
    </div>
  )
}

export default withErrorBoundary(MicroApp, hub)
