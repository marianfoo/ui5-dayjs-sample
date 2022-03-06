const Main = require("./pageObjects/MainDE");
const MainDE = require("./pageObjects/MainDE");

describe("ui5 basic", () => {
    before(async () => {
        await Main.open();
        // await MainDE.open();
    });

    // it("should have the right title", async () => {
    //     const title = await browser.getTitle()
    //     expect(title).toEqual("appTitle")
    // })

    it("get field english", async () => {
        const field = await Main.getField("testId");
        const text = await field.getText();
        expect(text).toEqual("Tu.12.2014");
    });
    // it("get field german", async () => {
    //     const field = await Main.getField("testId");
    //     const text = await field.getText();
    //     expect(text).toEqual("Di.12.2014");
    // });
});
