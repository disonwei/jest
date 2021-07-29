const math = require("./math.js")

const {
    add,
    minus,
    mutil
} = math;


test("测试加法", () => {
    expect(add(3, 7)).toBe(10);
})