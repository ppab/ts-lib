import { describe, expect, test } from "vitest";
import { createNestedObjWithValue } from "./create-nested-obj-with-value";

describe("createNestedObjWithValue", () => {
  test(`should return expected value `, () => {
    let obj = {
      myKey: 1,
      "parent.child": 2,
    };
    const result = createNestedObjWithValue(obj);
    const expected = {
      parent: { child: 2 },
      myKey: 1,
    };

    expect(result).toEqual(expected);
  });
  test(`should return expected value `, () => {
    let obj = {
      myKey: 1,
      "parent.child": 2,
      "parent.child.subChild": 2,
    };
    const result = createNestedObjWithValue(obj);
    const expected = {
      parent: { child: { subChild: 2 } },
      myKey: 1,
    };

    expect(result).toEqual(expected);
  });
});
