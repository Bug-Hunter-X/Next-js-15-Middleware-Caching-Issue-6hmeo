```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'public, max-age=60');
  return res;
}

export const config = {
  matcher: ['/'],
};
```