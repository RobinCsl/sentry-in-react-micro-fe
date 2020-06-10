import {BrowserClient, Hub} from '@sentry/browser';

export default function init(options) {
  const client = new BrowserClient(options);
  const hub = new Hub(client)
  return {client, hub}
}
