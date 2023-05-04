// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { stringifyHeaders } from "./stringify.ts";
import { assertEquals, describe, it } from "./_dev_deps.ts";

describe("stringifyHeaders", () => {
  it("should return string", () => {
    const table: [Headers, string][] = [
      [new Headers(), ""],
      [new Headers({ "x-test": "test" }), "x-test: test"],
      [new Headers({ "X-Test": "test" }), "x-test: test"],
      [
        new Headers({ "X-Test": "test", origin: "http://example.test" }),
        "origin: http://example.test\nx-test: test",
      ],
      [
        new Headers({ origin: "http://example.test", "X-Test": "test" }),
        "origin: http://example.test\nx-test: test",
      ],
      [
        new Headers({
          origin: "http://example.test",
          "X-Test": "test",
          "x-test": "test2",
        }),
        "origin: http://example.test\nx-test: test, test2",
      ],
      [
        new Headers({
          origin: "http://example.test",
          "X-Test": "test",
          "x-test": "test2",
        }),
        "origin: http://example.test\nx-test: test, test2",
      ],
      [
        new Headers({
          origin: "http://example.test",
          "X-Test": "test",
          "x-abc": "abc",
        }),
        "origin: http://example.test\nx-abc: abc\nx-test: test",
      ],
    ];

    table.forEach(([headers, expected]) => {
      assertEquals(stringifyHeaders(headers), expected);
    });
  });
});
