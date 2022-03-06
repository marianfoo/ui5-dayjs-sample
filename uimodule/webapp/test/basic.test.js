const Main = require("./pageObjects/Main");

describe("ui5 basic", () => {
    before(async () => {
        await Main.open();
    });

    // it("should have the right title", async () => {
    //     const title = await browser.getTitle()
    //     expect(title).toEqual("appTitle")
    // })

    it("get field", async () => {
        const field = await Main.getField("testId");
        const text = await field.getText();
        expect(text).toEqual("01.01.2020");
    });
});
