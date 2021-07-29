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