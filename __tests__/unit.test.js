// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// PHONE NUMBER
test('Phone number 1', () =>{
    expect(functions.isPhoneNumber("(916) 345-6789")).toBe(true);
});
test('Phone number 2', () =>{
    expect(functions.isPhoneNumber("916-345-6789")).toBe(true);
});
test('Phone number 3', () =>{
    expect(functions.isPhoneNumber("9163456789")).toBe(false);
});
test('Phone number 4', () =>{
    expect(functions.isPhoneNumber("916.345.6789")).toBe(false);
});

// EMAIL
test('Email 1', () => {
    expect(functions.isEmail("domlovsac@gmail.com")).toBe(true);
});
test('Email 2', () => {
    expect(functions.isEmail("domlovsac@ucsd_uc.com")).toBe(true);
});
test('Email 3', () => {
    expect(functions.isEmail("d.omlovsac@g-mail.com")).toBe(false);
});
test('Email 4', () => {
    expect(functions.isEmail("d.omlovsac@gmail.info")).toBe(false);
});

// STRONG PASSWORD
test('Password 1', () => {
    expect(functions.isStrongPassword("agth3IRPH")).toBe(true);
});
test('Password 2', () => {
    expect(functions.isStrongPassword("P683dsJ4JFG")).toBe(true);
});
test('Password 3', () => {
    expect(functions.isStrongPassword("0000")).toBe(false);
});
test('Password 4', () => {
    expect(functions.isStrongPassword("pass word")).toBe(false);
});

// DATE
test('Date 1', () => {
    expect(functions.isDate("11/13/2021")).toBe(true);
});
test('Date 2', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});
test('Date 3', () => {
    expect(functions.isDate("111321")).toBe(false);
});
test('Date 4', () => {
    expect(functions.isDate("11/13/21")).toBe(false);
});

// HEXCOLOR
test('HexColor 1', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
test('HexColor 2', () => {
    expect(functions.isHexColor("#B14")).toBe(true);
});
test('HexColor 3', () => {
    expect(functions.isHexColor("B!#543c2")).toBe(false);
});
test('HexColor 4', () => {
    expect(functions.isHexColor("0#")).toBe(false);
});


// TODO - Part 2