[![aamirtech](https://aamir.tech/favicon.ico)](https://aamir.tech)

# @aamirtech/utils

[![GitHub license](https://img.shields.io/npm/l/%40aamirtech%2Futils)](https://github.com/aamirtech/utils/blob/master/LICENSE)
[![Maintainer](https://img.shields.io/badge/maintainer-aamirv1-green)](https://github.com/aamirv1)
[![Downloads](https://img.shields.io/npm/dm/%40aamirtech%2Futils)](https://www.npmjs.com/package/@aamirtech/utils)
[![Npm package version](https://img.shields.io/npm/v/%40aamirtech%2Futils)](https://npmjs.com/@aamirtech/utils)

Library packed with your basic code utils.

## Installation

Install with npm

```bash
  npm install @aamirtech/utils
```

Install with yarn

```bash
  yarn add @aamirtech/utils
```

Install with bun

```bash
  bun add @aamirtech/utils
```

## Usage

#### Simple Snowflake Generation

```javascript
import { Id } from "@aamirtech/utils";

console.log(Snowflake.generate());
// 7167216930510602240
```

#### Publid ID / OTP Generation

| Option     | Type    | Default | Description                        |
| ---------- | ------- | ------- | ---------------------------------- |
| length     | number  | 6       | Length of the public id            |
| alphabetic | boolean | true    | Include alphabets in the public id |
| numeric    | boolean | true    | Include numbers in the public id   |

```javascript
import { getPublicId } from "@aamirtech/utils";

// Mix of Alphabets and Numbers (default)
console.log(getPublicId(6));
// 7C43DU

// Alphabets only
console.log(getPublicId(6, { alphabetic: true }));
// FZPUWJ

// Numbers only
console.log(getPublicId(6, { numeric: true }));
// 252537
```

## Tests

Tests are written in Bun Test. To run tests, run the following command:

```bash
  bun test
```

To run tests with coverage, run the following command:

```bash
  bun test:coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

The project contains part based on a fork off of (snowflake-generator)[https://github.com/FatAussieFatBoy/snowflake-generator].

```

```
