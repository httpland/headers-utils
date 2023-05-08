// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Special character. */
const enum Char {
  LF = "\n",
  Colon = ":",
  Space = " ",
}

/** Serialize {@link Headers} into string.
 *
 * @example
 * ```ts
 * import { stringifyHeaders } from "https://deno.land/x/headers_utils@$VERSION/stringify.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(stringifyHeaders(new Headers()), "");
 * assertEquals(
 *   stringifyHeaders(
 *     new Headers({
 *       "content-type": "text/plain",
 *       "date": "Wed, 21 Oct 2015 07:28:00 GMT",
 *     }),
 *   ),
 *   `content-type: text/plain
 * date: Wed, 21 Oct 2015 07:28:00 GMT`,
 * );
 * ```
 */
export function stringifyHeaders(headers: Headers): string {
  return [...headers.entries()]
    .map(stringifyFieldLine)
    .join(Char.LF);
}

function stringifyFieldLine(
  entry: readonly [fieldName: unknown, fieldValue: unknown],
): string {
  return entry[0] + Char.Colon + Char.Space + entry[1];
}
