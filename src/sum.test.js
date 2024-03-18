import {sum,sub,func} from './sum'



test("testing for multipication",() => {
    let a = 10;
    let b = 20;
    let output = 200;
    expect(func(a,b)).toBe(output)
})