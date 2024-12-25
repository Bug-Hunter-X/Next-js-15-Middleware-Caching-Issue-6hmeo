# Next.js 15 Middleware Caching Issue

This repository demonstrates a caching issue encountered in Next.js 15's Middleware.  The `Cache-Control` header is not applied consistently, leading to unexpected caching behavior.

## Bug Description

The middleware function is intended to set a `Cache-Control` header with `max-age=60`. However, in practice, the caching behavior does not reflect this setting, which causes problems with fresh content delivery.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the caching behavior in your browser's developer tools (Network tab).

## Solution

A proper solution would involve reviewing the middleware implementation for any conflicts with other caching mechanisms or server configurations.  The solution also might involve using a different caching mechanism provided by Next.js, such as revalidate, to better control caching behavior.