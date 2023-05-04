// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { filterHeadersKeys } from "./filter_keys.ts";
import { equalsHeaders } from "./equal.ts";
import { assert, describe, it } from "./_dev_deps.ts";

describe("filterHeadersKeys", () => {
  it("should return new headers filtered by predicate", () => {
    const table: [Headers, (key: string) => boolean, Headers][] = [
      [
        new Headers({ "x-test": "test", "date": "xxx" }),
        () => true,
        new Headers({ "x-test": "test", "date": "xxx" }),
      ],
      [
        new Headers({ "x-test": "test", "date": "xxx" }),
        () => false,
        new Headers(),
      ],
      [
        new Headers({ "x-test": "test", "date": "xxx" }),
        (key) => key === "date",
        new Headers({ date: "xxx" }),
      ],
    ];

    table.forEach(([headers, predicate, expected]) => {
      assert(equalsHeaders(filterHeadersKeys(headers, predicate), expected));
    });
  });
});
