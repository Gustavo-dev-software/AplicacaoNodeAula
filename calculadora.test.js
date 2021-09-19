//import { expect, Test } from '@jest/core';
//import * as Calculadora from './calculadora';

const calculadora = require('./calculadora');

test("testando soma de 1+1", () => {
    expect(calculadora.soma(1, 1)).toBe(2);
});

test("testar divisao de 42/6", () => {
    expect(calculadora.divisao(42, 6)).toBe(7);
});

test("testar multiplicacao de 2*2", () => {
    expect(calculadora.multiplicacao(2, 2)).toBe(4);
});

test("testar subtracao de 5-1", () => {
    expect(calculadora.subtracao(5, 1)).toBe(4);
});