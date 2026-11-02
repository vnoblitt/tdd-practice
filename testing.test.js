import { capitalize, reverseString, Calculator, caesar, checkIfLetter, analyzeArray} from "./testing";

// Capitalize
test('capitalize("hello world") returns Hello world', () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test('capitalize("liberty") returns Liberty', () => {
    expect(capitalize("liberty")).toBe("Liberty");
});

test('capitalize("aaa") returns Aaa', () => {
    expect(capitalize("aaa")).toBe("Aaa");
});

// Reverse String
test('reverseString("texas") returns saxet', () => {
    expect(reverseString('texas')).toBe("saxet")
});

// Calculator
test('new Calculator() works', () => {
    const calc = new Calculator();
    expect(calc).toEqual({});
});

test('add(-2,2) returns 0', () => {
    const calc = new Calculator();
    expect(calc.add(2,2)).toBe(4);
});

test('subtract(5, 3) returns 2', () => {
    const calc = new Calculator();
    expect(calc.subtract(5,3)).toBe(2);
});

test('multiply(5, 3) returns 15', () => {
    const calc = new Calculator();
    expect(calc.multiply(5,3)).toBe(15);
});

test('divide(6, 3) returns 2', () => {
    const calc = new Calculator();
    expect(calc.divide(6,3)).toBe(2);
});

// Caesar
test('checkIfLetter("?") returns false', () => {
    expect(checkIfLetter('?')).toBe(false);
});

test('caesar("aaa",1) returns "bbb"', () => {
    expect(caesar("aaa",1)).toBe("bbb");
});

test('caesar("zzz",1) returns "aaa"', () => {
    expect(caesar("zzz",1)).toBe("aaa");
});

test('caesar("alpha Bravo 12",8) returns "itxpi Jzidw 12"', () => {
    expect(caesar("alpha Bravo 12",8)).toBe("itxpi Jzidw 12");
});

test('caesar("Hello, World!",3) returns "Khoor, Zruog!"', () => {
    expect(caesar("Hello, World!",3)).toBe("Khoor, Zruog!");
});

// Analyze Array
test('analyzeArray returns an object', () => {
    const object = analyzeArray([]);
    expect(typeof object).toBe("object");
});

test('[1,8,3,4,2,6].average returns 4', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBe(4);
});

test('[1,1,1,1,1,1].average returns 1', () => {
    const object = analyzeArray([1,1,1,1,1,1]);
    expect(object.average).toBe(1);
});

test('object.max returns 8', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.max).toBe(8);
});

test('object.min returns 1', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.min).toBe(1);
});

test('object.length returns 6', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.length).toBe(6);
});