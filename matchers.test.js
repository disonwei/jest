// test("toBe", () => {
//     // tobe 匹配器 matchers
//     expect(10).toBe(10);
// })

test("toEqual", () => {
    // toEqual 匹配器 
    const a = {
        one: 1
    };
    expect(a).toEqual({
        one: 1
    });
})

test("toBeNull", () => {
    // toBeNull 匹配器 
    const a = null
    expect(a).toBeNull();
})

test("toBeUndifined", () => {
    // toBeNull 匹配器 
    const a = undefined
    expect(a).toBeUndefined();
})


test("toBeDefined", () => {
    // toBeNull 匹配器 
    const a = null
    expect(a).toBeDefined();
})

test("toBeTruthy", () => {
    // toBeNull 匹配器 
    const a = 1
    expect(a).toBeTruthy();
})

test("toBeFalsy", () => {
    // toBeNull 匹配器 
    const a = 0
    expect(a).toBeFalsy();
})

// 数字相关
test("toBeGreaterThan", () => {
    // toBeNull 匹配器 
    const a = 10
    expect(a).toBeGreaterThan(9);
})

test("toBeLessThan", () => {
    // toBeNull 匹配器 
    const a = 10
    expect(a).toBeLessThan(11);
})

test("toBeGreaterThanOrEqual", () => {
    // toBeNull 匹配器 
    const a = 10
    expect(a).toBeGreaterThanOrEqual(10);
})

test("toBeCloseTo", () => {
    // toBeNull 匹配器 
    const a = 0.1
    const b=0.2
    expect(a+b).toBeCloseTo(0.3);
})

// 字符串相关

test("toMatch", () => {
    const str= "http://www.baidu.com"
    expect(str).toMatch("baidu");
})
// 数组相关
test("toContain", () => {
    const str= ["dell","dison"]
    expect(str).toContain("dison");
})

// 异常
const throwNewErrorFunc=()=>{
    throw new Error("this is a new error")
}


test("toThrow", () => {
    const str= ["dell","dison"]
    expect(throwNewErrorFunc).toThrow("this is a new error");
})