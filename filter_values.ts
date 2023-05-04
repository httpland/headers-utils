// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Returns a new `Headers` with all entries of the given headers except the ones
 * that have a value(field value) that does not match the given predicate.
 *
 * @example
 * ```ts
 * import { filterHeadersValues } from "https://deno.land/x/headers_utils@$VERSION/filter_values.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * declare const isIMFDate: (input: string) => boolean;
 *
 * const headers = filterHeadersValues(
 *   new Headers({
 *     "date": "<date>",
 *     "content-type": "<content-type>",
 *   }),
 *   isIMFDate,
 * );
 *
 * assert(headers.has("date"));
 * assertFalse(headers.has("content-type"));
 * ```
 */
export function filterHeadersValues(
  headers: Headers,
  predicate: (value: string) => boolean,
): Headers {
  return new Headers([...headers].filter(([_, value]) => predicate(value)));
}
