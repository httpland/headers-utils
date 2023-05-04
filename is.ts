// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `Headers` or not.
 *
 * @example
 * ```ts
 * import { isHeaders } from "https://deno.land/x/headers_utils@$VERSION/is.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isHeaders(new Headers()));
 * assertFalse(isHeaders({}));
 * ```
 */
export function isHeaders(input: unknown): input is Headers {
  return input instanceof Headers;
}
