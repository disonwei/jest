import Counter from "./Counter"



describe("counter 测试代码", () => {


    let counter = null;

    beforeAll(() => {
        // counter=new Counter();
    })

    beforeEach(() => {
        counter = new Counter();
    })

    afterAll(() => {
        console.log("afterall")
    })


    afterEach(() => {

    })


    describe("测试增加相关",() => {


        beforeEach(()=>{

        })



        test.only("测试addOne方法", () => {

            counter.addOne();
            expect(counter.number).toBe(1);
        })

        test("测试addTwo方法", () => {

            counter.addTwo();
            expect(counter.number).toBe(2);
        })

    })


    describe("测试减少相关的", () => {
        test("测试minusOne方法", () => {
            counter.minusOne();
            expect(counter.number).toBe(-1);
        })

        test("测试minusTwo方法", () => {
            counter.minusTwo();
            expect(counter.number).toBe(-2);
        })
    })


})