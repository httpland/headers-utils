// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Returns a new {@link Headers} with all entries of the given headers except the ones that have a key(field name) that does not match the given predicate.
 *
 * @example
 * ```ts
 * import { filterHeadersKeys } from "https://deno.land/x/headers_utils@$VERSION/filter_keys.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * const headers = filterHeadersKeys(
 *   new Headers({
 *     "date": "<date>",
 *     "content-type": "<content-type>",
 *   }),
 *   (key) => key.startsWith("content"),
 * );
 *
 * assert(headers.has("content-type"));
 * assertFalse(headers.has("date"));
 * ```
 */
export function filterHeadersKeys(
  headers: Headers,
  predicate: (key: string) => boolean,
): Headers {
  return new Headers([...headers].filter(([key]) => predicate(key)));
}
