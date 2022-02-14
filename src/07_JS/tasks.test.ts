import {ActionType, div, mult, salaryReducer, sub, sum} from "./tasks";

test('sum', () => {
    const salary = 100;
    const add = 20;

    const result = sum(salary, add);

    expect(result).toBe(120);
})

test('mult', () => {
    const salary = 100;
    const coef = 2;
    const result = mult(salary, coef);

    expect(result).toBe(200);
})

test('sub', () => {
    const salary = 100;
    const num = 20;

    const result = sub(salary, num);

    expect(result).toBe(80);
})

test('div', () => {
    const salary = 100;
    const num = 2;

    const result = div(salary, num);

    expect(result).toBe(50);
})

test('salaryReducer sum', () => {
    const salary = 100;
    const action: ActionType = {
        type: 'sum',
        payload: 20
    }
    expect(salaryReducer(salary, action)).toBe(120);
})

test('salaryReducer mult', () => {
    const salary = 100;
    const action: ActionType = {
        type: 'mult',
        payload: 3
    }
    expect(salaryReducer(salary, action)).toBe(300);
})

test('salaryReducer sub', () => {
    const salary = 100;
    const action: ActionType = {
        type: 'sub',
        payload: 20
    }
    expect(salaryReducer(salary, action)).toBe(80);
})

test('salaryReducer div', () => {
    const salary = 100;
    const action: ActionType = {
        type: 'div',
        payload: 2
    }
    expect(salaryReducer(salary, action)).toBe(50);
})