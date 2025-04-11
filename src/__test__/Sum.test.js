import Sum from "../Sum";

test('testing for sum func', ()=>{
    const result = Sum(1,2);
    expect(result).toBe(3);
});