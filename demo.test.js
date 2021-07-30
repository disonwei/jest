import axios from "axios";
import {
    runCallback,
    createObject,
    getData
} from "./demo";


jest.mock("axios")


// 1. 捕获函数的调用和返回结果 
// 2.可以让我们自由设置返回结果
// 3. mock 第三个作用改变函数内部实现


test("测试runcallback", () => {
    const func = jest.fn();

    runCallback(func);

    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(1)
    expect(func.mock.calls[0]).toEqual([])

    console.log(func.mock);


})

test("测试runcallback2", () => {
    // mock 函数 1. 捕获函数的调用和返回结果 
    // 2.可以让我们自由设置返回结果
    const func = jest.fn(()=>{
        console.log("123")
        return "dell"
    });
    func.mockImplementation(()=>{
        console.log("123")
        return "dell"
    })
    func.mockReturnValue("dison")


    runCallback(func);

    console.log(func.mock);

    expect(func.mock.results[0].value).toEqual("dison")

})



test("测试createOnject", () => {
    const func = jest.fn()

    createObject(func)
    console.log(func.mock)

})


test("测试getData", async () => {
// mock 第三个作用改变函数内部实现
    axios.get.mockResolvedValue({
        data: "hello"
    })

    await getData().then((data) => {
        expect(data).toBe("hello")
    })
})