import {
    add,
    minus,
    multi
} from "./math"


test("测试加法", () => {
    expect(add(3, 7)).toBe(10);
})

test("测试减法", () => {
    expect(minus(3, 7)).toBe(-4);
})

test("测试乘法", () => {
    expect(multi(3, 7)).toBe(21);
})


// npm run jest
// jest (babel-jest)
// babel-core
// 取 .babelre 配置
// 在运行测试之前 结合babel 先把代码转化
// 运行转化过的测试用例代码