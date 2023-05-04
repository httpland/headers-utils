// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Check two `Headers` field name and field value equality.
 *
 * ```ts
 * import { equalsHeaders } from "https://deno.land/x/headers_utils@$VERSION/equal.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(equalsHeaders(new Headers({ a: "b" }), new Headers({ a: "b" })));
 * assertFalse(equalsHeaders(new Headers({ a: "b" }), new Headers({ c: "d" })));
 * ```
 */
export function equalsHeaders(left: Headers, right: Headers): boolean {
  const lefts = [...left];
  const rights = [...right];

  if (lefts.length !== rights.length) return false;

  for (const [key, value] of lefts.concat(rights)) {
    if (!left.has(key) || !right.has(key)) {
      return false;
    }

    if (left.get(key) !== value || right.get(key) !== value) {
      return false;
    }
  }

  return true;
}
