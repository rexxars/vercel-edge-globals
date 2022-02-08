import { NextResponse } from 'next/server';

export default function middleware(
  request,
  event,
) {
  return NextResponse.json({
    window: typeof window === 'undefined' ? 'undefined' : {
      fetch: typeof window.fetch,
      Promise: typeof window.Promise
    },

    global: typeof global === 'undefined' ? 'undefined' : {
      fetch: typeof global.fetch,
      Promise: typeof global.Promise
    },

    globalThis: typeof globalThis === 'undefined' ? 'undefined' : {
      fetch: typeof globalThis.fetch,
      Promise: typeof globalThis.Promise
    },

    self: typeof self === 'undefined' ? 'undefined' : {
      fetch: typeof self.fetch,
      Promise: typeof self.Promise
    },

    Promise: typeof Promise,
    fetch: typeof fetch,
  });
}