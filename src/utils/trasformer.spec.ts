import {describe, expect, test} from "vitest";
import {
    transformer,
    resolveTransformerConfig,
    mapObjectTransformer, ResolverTransformerConfigArgs,
} from "./trasformer";

describe("transformer", () => {
    describe("pickTransformer()", () => {
        const structure = {
            key1: 1,
            key2: 2,
            key3: 3,
        };

        test("should return expected value", () => {
            const result = transformer("pick", {
                ctx: structure,
                keys: ["key2"],
            });
            const expected = {
                key2: 2,
            };

            expect(result).toEqual(expected);
        });
        test("should return expected value", () => {
            const result = transformer("pick", {
                ctx: structure,
                keys: ["key2", "key3"],
            });
            const expected = {
                key2: 2,
                key3: 3,
            };

            expect(result).toEqual(expected);
        });
        test("should return expected value", () => {
            const result = transformer("pick", {
                ctx: structure,
                keys: ["key2", "key4"],
            });
            const expected = {
                key2: 2,
            };

            expect(result).toEqual(expected);
        });
        test("should return expected value", () => {
            const result = transformer("pick", {
                ctx: structure,
                keys: ["key5", "key55"],
            });
            const expected = {};

            expect(result).toEqual(expected);
        });
    });
    describe("mapObject()", () => {
        const structure = {
            key1: 1,
            key2: 2,
            key3: 3,
        };

        test("should return expected value", () => {
            const result = mapObjectTransformer({
                ctx: structure,
                objMapConfig: {
                    "test.resolvedKey": {
                        name: "pick",
                        props: {
                            keys: ["key2"],
                            ctx: {}


                        },
                    },
                    myKey: {
                        name: "get",
                        props: {
                            path: "key3",
                            ctx: {}
                        },
                    },
                },
            });
            const expected = {
                test: {resolvedKey: {key2: 2}},
                myKey: 3,
            };

            expect(result).toEqual(expected);
        });
    });
    describe("resolveTransformerConfig()", () => {
        const structure = {
            key1: 1,
            key2: 2,
            key3: 3,
            key4: {sub: 5},
        };

        test("should return expected value", () => {
            const transformerConfig: ResolverTransformerConfigArgs = {
                name: "pick",
                props: {
                    ctx: structure,
                    keys: ["key1", "key4.sub"],
                },
            };
            const result = resolveTransformerConfig(transformerConfig);
            const expected = {
                key1: 1,
                key4: {sub: 5},
            };

            expect(result).toEqual(expected);
        });
        test("should return expected value", () => {
            const transformerConfig: ResolverTransformerConfigArgs = {
                name: "mapObject",
                props: {
                    ctx: structure,
                    objMapConfig: {
                        "test.resolvedKey.child": {
                            name: "pick",
                            props: {
                                keys: ["key2"],

                                ctx: {}

                            },
                        },
                        myKey: {
                            name: "get",
                            props: {
                                path: "key3",
                                ctx: {}
                            },
                        },
                        child: {
                            name: "pick",
                            props: {
                                keys: ["key4"],
                                ctx: {}
                            },
                        },
                    },
                },
            };
            const result = resolveTransformerConfig(transformerConfig);

            const expected = {
                test: {resolvedKey: {child: {key2: 2}}},
                myKey: 3,
                child: {
                    key4: {sub: 5},
                },
            };

            expect(result).toEqual(expected);
        });
    });
});
