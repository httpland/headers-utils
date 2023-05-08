// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.

import { filterHeadersEntries } from "./filter_entries.ts";
import { equalsHeaders } from "./equal.ts";
import { assert, describe, it } from "./_dev_deps.ts";

describe("filterHeadersEntries", () => {
  it("should return new headers filtered by predicate", () => {
    const table: [Headers, (entry: [string, string]) => boolean, Headers][] = [
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
        ([key]) => key === "date",
        new Headers({ date: "xxx" }),
      ],
    ];

    table.forEach(([headers, predicate, expected]) => {
      assert(equalsHeaders(filterHeadersEntries(headers, predicate), expected));
    });
  });
});
