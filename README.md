# Node OPNsense Client API (node-opnsense)

[![npm version](https://badge.fury.io/js/%40dennis14e%2Fnode-opnsense.svg)](https://www.npmjs.com/package/@dennis14e/node-opnsense)
![Documentation](https://github.com/Dennis14e/node-opnsense/workflows/Documentation/badge.svg)
![Lint](https://github.com/Dennis14e/node-opnsense/workflows/Lint/badge.svg)

This Node Client API is mostly based on the documentation [here](https://docs.opnsense.org/development/api.html) and the source code [here](https://github.com/opnsense/core/tree/master/src/opnsense/mvc/app/controllers/OPNsense).
However, it is known that the documentation is not always up to date.

Not every one of these APIs have been tested. It is possible that e.g. input parameters may be missing.

Use at your own risk.

## Example

```javascript
const OPNsense = require('./src/index');

const client = new OPNsense.Client(
    'https://opnsense.local/',
    'api-key',
    'api-secret'
);

new OPNsense.Wol.WolClient(client).wakeByMAC('AA:BB:CC:00:11:22').then(res => {
    console.log(res);
});
```

## NPM scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run lint`    | Lint code in ./src                           |
| `npm run jsdoc`   | Generate documentation ./docs                |
| `npm run openapi` | Generate OpenAPI file ./openapi/openapi.json |
