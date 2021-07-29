import {
    fetchData,
    fetchData2,
    fetchData3
} from "./fetchData"

//  回调类型异步函数的测试
test("fetchData 返回结果 true", (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done();
    })
})


test("fetchData2 返回结果 true", () => {
    return fetchData2().then((response) => {
        expect(response.data).toEqual({
            success: true
        })
    })
})



test("fetchData3 返回结果 404", () => {
    expect.assertions(1);
    return fetchData3().catch((e) => {
        expect(e.toString().indexOf("404") > -1).toEqual(true)
    })
})


test("fetchData2 返回结果 true", () => {
    return expect(fetchData2()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})


test("fetchData2 返回结果 true", async () => {
    await expect(fetchData2()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test("fetchData2 返回结果 true", async () => {
    const response = await fetchData2();

    expect(response.data).toEqual({
        success: true
    })

})



test("fetchData3 返回结果 404", () => {
    return expect(fetchData3()).rejects.toThrow()
})

test("fetchData3 返回结果 404", async () => {
    await expect(fetchData3()).rejects.toThrow()
})

test("fetchData3 返回结果 404", async () => {
    expect.assertions(1)
    try {
        await fetchData3();

    } catch (e) {
        await expect(fetchData3()).rejects.toThrow()
    }

})