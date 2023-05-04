// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Returns a new `Headers` with all entries of the given headers except the ones
 * that do not match the given predicate.
 *
 * @example
 * ```ts
 * import { filterHeadersEntries } from "https://deno.land/x/headers_utils@$VERSION/filter_entries.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * declare const isIMFDate: (input: string) => boolean;
 *
 * const headers = filterHeadersEntries(
 *   new Headers({
 *     "date": "<date>",
 *     "content-type": "<content-type>",
 *   }),
 *   ([key, value]) => isIMFDate(value),
 * );
 *
 * assert(headers.has("date"));
 * assert(headers.has("content-type"));
 * ```
 */
export function filterHeadersEntries(
  headers: Headers,
  predicate: (entry: [string, string]) => boolean,
): Headers {
  return new Headers([...headers].filter(predicate));
}
