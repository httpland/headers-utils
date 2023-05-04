# headers-utils

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/headers_utils)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/httpland/headers-utils)](https://github.com/httpland/headers-utils/releases)
[![codecov](https://codecov.io/github/httpland/headers-utils/branch/main/graph/badge.svg)](https://codecov.io/gh/httpland/headers-utils)
[![GitHub](https://img.shields.io/github/license/httpland/headers-utils)](https://github.com/httpland/headers-utils/blob/main/LICENSE)

[![test](https://github.com/httpland/headers-utils/actions/workflows/test.yaml/badge.svg)](https://github.com/httpland/headers-utils/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@httpland/headers-utils.png?mini=true)](https://nodei.co/npm/@httpland/headers-utils/)

Headers utility collection.

## equalHeaders

Check two `Headers` field name and field value equality.

```ts
import { equalsHeaders } from "https://deno.land/x/headers_utils@$VERSION/equal.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

assert(equalsHeaders(new Headers({ a: "b" }), new Headers({ a: "b" })));
assertFalse(equalsHeaders(new Headers({ a: "b" }), new Headers({ c: "d" })));
```

## filterHeadersEntries

Returns a new `Headers` with all entries of the given headers except the ones
that do not match the given predicate.

```ts
import { filterHeadersEntries } from "https://deno.land/x/headers_utils@$VERSION/filter_entries.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

declare const isIMFDate: (input: string) => boolean;

const headers = filterHeadersEntries(
  new Headers({
    "date": "<date>",
    "content-type": "<content-type>",
  }),
  ([key, value]) => isIMFDate(value),
);

assert(headers.has("date"));
assert(headers.has("content-type"));
```

## filterHeadersKeys

Returns a new `Headers` with all entries of the given headers except the ones
that have a key(header name or field name) that does not match the given
predicate.

```ts
import { filterHeadersKeys } from "https://deno.land/x/headers_utils@$VERSION/filter_keys.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

const headers = filterHeadersKeys(
  new Headers({
    "date": "<date>",
    "content-type": "<content-type>",
  }),
  (key) => key.startsWith("content"),
);

assert(headers.has("content-type"));
assertFalse(headers.has("date"));
```

## filterHeadersValues

Returns a new `Headers` with all entries of the given headers except the ones
that have a value(field value) that does not match the given predicate.

```ts
import { filterHeadersValues } from "https://deno.land/x/headers_utils@$VERSION/filter_values.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

declare const isIMFDate: (input: string) => boolean;

const headers = filterHeadersValues(
  new Headers({
    "date": "<date>",
    "content-type": "<content-type>",
  }),
  isIMFDate,
);

assert(headers.has("date"));
assertFalse(headers.has("content-type"));
```

## isHeaders

Whether the input is `Headers` or not.

```ts
import { isHeaders } from "https://deno.land/x/headers_utils@$VERSION/is.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

assert(isHeaders(new Headers()));
assertFalse(isHeaders({}));
```

## stringifyHeaders

Serialize `Headers` into string.

```ts
import { stringifyHeaders } from "https://deno.land/x/headers_utils@$VERSION/stringify.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(stringifyHeaders(new Headers()), "");
assertEquals(
  stringifyHeaders(
    new Headers({
      "content-type": "text/plain",
      "date": "Wed, 21 Oct 2015 07:28:00 GMT",
    }),
  ),
  `content-type: text/plain
date: Wed, 21 Oct 2015 07:28:00 GMT`,
);
```

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license
