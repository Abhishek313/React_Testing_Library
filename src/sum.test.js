import {sum,sub} from './sum'

test("testing for sum function",() => {
    let a=30;
    let b=10;
    let output=40;
 expect(sum(a,b)).toBe(output) 
});

test("testing for sub function",() => {
    expect(sub(10,10)).toBe(0) 
   });