// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { filterHeadersValues } from "./filter_values.ts";
import { equalsHeaders } from "./equal.ts";
import { assert, describe, it } from "./_dev_deps.ts";

describe("filterHeadersValues", () => {
  it("should return new headers filtered by predicate", () => {
    const table: [Headers, (value: string) => boolean, Headers][] = [
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
        (value) => value === "test",
        new Headers({ "x-test": "test" }),
      ],
    ];

    table.forEach(([headers, predicate, expected]) => {
      assert(equalsHeaders(filterHeadersValues(headers, predicate), expected));
    });
  });
});
