import * as index from "./index"
// @ponicode
describe("index.reset", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.reset()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.css", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.css({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.css({ key0: "foo bar", key1: "foo bar", key2: "This is a Text", key3: "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.css({ key0: "foo bar", key1: "Hello, world!", key2: "This is a Text", key3: "This is a Text", key4: "Hello, world!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.css({ key0: "Hello, world!", key1: "This is a Text", key2: "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.css({ key0: "Foo bar", key1: "Foo bar", key2: "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.css({ key0: "", key1: "", key2: "", key3: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.styleModule", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.styleModule(() => ({ key0: {}, key1: { key0: "foo bar", key1: "Foo bar", key2: "foo bar", key3: "This is a Text" }, key2: { key0: "This is a Text", key1: "foo bar" }, key3: { key0: "Foo bar", key1: "Hello, world!", key2: "Foo bar", key3: "foo bar", key4: "foo bar" }, key4: { key0: "foo bar", key1: "This is a Text", key2: "Foo bar" } }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.styleModule(() => ({ key0: { key0: "Foo bar", key1: "Foo bar", key2: "This is a Text" } }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.styleModule({ key0: {}, key1: { key0: "foo bar", key1: "foo bar" }, key2: { key0: "Foo bar", key1: "Foo bar", key2: "Hello, world!" }, key3: { key0: "Hello, world!", key1: "Foo bar", key2: "Foo bar", key3: "This is a Text" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.styleModule({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.styleModule(() => ({ key0: {}, key1: { key0: "foo bar" }, key2: {} }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.styleModule({ key0: { key0: "", key1: "", key2: "" }, key1: { key0: "" }, key2: { key0: "", key1: "", key2: "" } })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.keyframes", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: 0, key1: "Hello, world!", key2: "Hello, world!", key3: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: -5.48, key1: "Hello, world!", key2: "Hello, world!", key3: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: "This is a Text", key1: "foo bar", key2: 1, key3: -5.48, key4: "foo bar" }, key1: { key0: 1, key1: "foo bar" }, key2: { key0: "foo bar", key1: 1 }, key3: { key0: "foo bar", key1: 1, key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: "Hello, world!", key1: "Hello, world!", key2: -100, key3: -100, key4: "This is a Text" }, key1: { key0: 1, key1: "This is a Text" }, key2: { key0: "This is a Text", key1: 0 }, key3: { key0: "foo bar", key1: 1, key2: "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: "foo bar", key1: "foo bar", key2: 0, key3: 1, key4: "foo bar" }, key1: { key0: 1, key1: "This is a Text" }, key2: { key0: "This is a Text", key1: -100 }, key3: { key0: "Foo bar", key1: -5.48, key2: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.keyframes({ key0: { key0: false, key1: "", key2: -Infinity, key3: false, key4: -Infinity }, key1: { key0: -Infinity, key1: -Infinity, key2: -Infinity, key3: "", key4: "" }, key2: { key0: -Infinity, key1: -Infinity, key2: -Infinity }, key3: { key0: false, key1: "", key2: true, key3: -Infinity } })
        }
    
        expect(callFunction).not.toThrow()
    })
})
