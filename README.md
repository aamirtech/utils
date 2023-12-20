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

console.log(Id.Snowflake());
// 7133860161289977856
```

#### OTP / Publid ID Generation

```javascript
import { Id } from "@aamirtech/utils";

console.log(Id.Numeric(6));
//426867

console.log(Id.Alphabetic(6));
// QTBRGF

console.log(Id.AlphaNumeric(6));
// 7H23JF
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

The project contains part based on a fork off of (snowflake-generator)[https://github.com/FatAussieFatBoy/snowflake-generator].
