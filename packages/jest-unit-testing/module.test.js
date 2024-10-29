import mut from './module.js'

describe("Sum Tests", () => {
    test('Testing sum -- success', () => {
        const expected = 44;
        const got = mut.sum(22, 22);
        expect(got).toBe(expected)
    })
})


describe("Div Tests", () => {
    test("Testing div -- success", () => {
        const expected = 2
        const got = mut.div(4, 2)
        expect(got).toBe(expected)
    })
    test("Testing div -- divide by zero", () => {
        expect(mut.div(10, 0)).toBe(Infinity)
    })
    test("Testing div -- div by negative", () => {
        const expected = -10
        const got = mut.div(10, -1)
        expect(got).toBe(expected)
    })
    test("Testing div -- divide by decimal", () => {
        const expected = 4
        const got = mut.div(1, 0.25)
        expect(got).toBe(expected)
    })
    test("Testing div -- div by one", () => {
        const expected = 22
        const got = mut.div(22, 1)
        expect(got).toBe(expected)
    })
})

describe("containsNumber Tests", () => {
    test("Testing containsNumber -- catching bug", () => {
        const string = "qwerty uiop"
        const expected = true
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
    test("Testing containsNumber -- return False", () => {
        const string = "qwertyuiop"
        const expected = false
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
    test("Testing containsNumber -- empty string", () => {
        const string = ""
        const expected = false
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
    test("Testing containsNumber -- number", () => {
        const string = "1"
        const expected = true
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
    test("Testing containsNumber -- mix of numbers and NaN", () => {
        const string = "ewa1f3faffaf"
        const expected = true
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
    test("Testing containsNumber -- space", () => {
        const string = " "
        const expected = true
        const got = mut.containsNumbers(string)
        expect(got).toBe(expected)
    })
})

// .toThrow(Error) // divide by zero