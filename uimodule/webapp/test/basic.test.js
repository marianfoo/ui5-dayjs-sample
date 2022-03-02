const Main = require("./pageObjects/Main")

describe("ui5 basic", () => {
    before(async () => {
        await Main.open()
    })

    // it("should have the right title", async () => {
    //     const title = await browser.getTitle()
    //     expect(title).toEqual("appTitle")
    // })

    it("get field", async () => {
        const simple_test = await Main.getField("testId")
        var text = simple_test.getText();
        expect(text).toEqual("01.01.2020")
    })
})