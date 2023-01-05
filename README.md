charcoal v2.0.0 is not work with Next.js reporoduction repo.

```
yarn
yarn dev
open http://localhost:3000/
```

Error
```
Server Error
SyntaxError: Named export 'DismissButton' not found. The requested module '@react-aria/overlays' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@react-aria/overlays';
const { useOverlay, usePreventScroll, useModal, OverlayContainer, DismissButton } = pkg;
```