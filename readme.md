# ⚠ Made only for Nordic Code ⚠  

paste the following into `_middleware.jsx`

```js
import { cloudMiddleware } from '@nordic-code/cloud-data'

export async function middleware(request) {
    return await cloudMiddleware(request)
};
```

#### Nordic Code @ 2023