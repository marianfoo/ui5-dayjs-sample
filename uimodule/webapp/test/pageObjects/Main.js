const Page = require("./Page")

class Main extends Page {
    async open() {
        await super.open(`/test/flpSandbox.html#demarianzeisdatelibsample-tile`)
    }

    _viewName = "de.marianzeis.datelibsample.view.MainView"


    async getField(id){
        const cbSelector1 = {
            timeout: 15000, 
            selector: {
                id: id,
                viewName: this._viewName
            }
        }

        return await browser.asControl(cbSelector1)
    }
}

module.exports = new Main()