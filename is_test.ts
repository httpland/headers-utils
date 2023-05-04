// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { isHeaders } from "./is.ts";
import { assert, assertFalse, describe, it } from "./_dev_deps.ts";

describe("isHeaders", () => {
  it("should return true if the input is headers", () => {
    assert(isHeaders(new Headers()));
  });

  it("should return false if the input is not headers", () => {
    assertFalse(isHeaders({}));
    assertFalse(isHeaders([]));
  });
});
