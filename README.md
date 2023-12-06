[![aamirtech](https://aamir.tech/favicon.ico)](https://aamir.tech)

# @aamirtech/utils

[![GitHub license](https://img.shields.io/npm/l/%40aamirtech%2Futils)](https://github.com/aamirtech/utils/blob/master/LICENSE)
[![Maintainer](https://img.shields.io/badge/maintainer-aamirv1-green)](https://github.com/aamirv1)
[![Downloads](https://img.shields.io/npm/dm/%40aamirtech%2Futils)](https://www.npmjs.com/package/@aamirtech/utils)
[![Npm package version](https://img.shields.io/npm/v/%40aamirtech%2Futils)](https://npmjs.com/@aamirtech/utils)

Library to help you create a Snowflake Id or parse the same. This solves the problem of generating unique identifiers at scale.

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
import { Snowflake } from "@aamirtech/utils";

console.log(Snowflake.generate());
// 7133860161289977856
```

#### OTP Generation

```javascript
import { Otp } from "@aamirtech/utils";

console.log(Otp.generateNumeric(6));
// 478792478792

console.log(Otp.generateAlphabetic(6));
// QTBRGF

console.log(Otp.generateAlphaNumeric(6));
// 7H23JF
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

The project contains part based on a fork off of (snowflake-generator)[https://github.com/FatAussieFatBoy/snowflake-generator].
