// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { equalsHeaders } from "./equal.ts";
import { assert, assertFalse, describe, it } from "./_dev_deps.ts";

describe("equalsHeaders", () => {
  it("should return false", () => {
    const table: [Headers, Headers][] = [
      [new Headers({ a: "" }), new Headers()],
      [new Headers(), new Headers({ a: "" })],
      [new Headers({ a: "" }), new Headers({ a: "", b: "" })],
      [new Headers({ a: "", b: "c" }), new Headers({ a: "", d: "c" })],
      [new Headers({ a: "a" }), new Headers({ a: "b" })],
      [
        new Headers({ a: "b", b: "c" }),
        new Headers({ a: "b", b: "c", c: "d" }),
      ],
    ];

    table.forEach(([a, b]) => {
      assertFalse(equalsHeaders(a, b));
    });
  });

  it("should return true", () => {
    const table: [Headers, Headers][] = [
      [new Headers(), new Headers()],
      [new Headers({ a: "" }), new Headers({ a: "" })],
      [new Headers([["a", ""]]), new Headers({ a: "" })],
      [
        new Headers({ a: "", b: "c", c: "abc" }),
        new Headers({ a: "", b: "c", c: "abc" }),
      ],
      [
        new Headers({ a: " " }),
        new Headers({ a: "" }),
      ],
      [
        new Headers({ a: "   a " }),
        new Headers({ a: "        a       " }),
      ],
    ];

    table.forEach(([a, b]) => {
      assert(equalsHeaders(a, b));
    });
  });
});
