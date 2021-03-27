const stylus = require("stylus")
const { readFileSync } = require("fs")

function runStylus(name, done, force = false) {
  let template = readFileSync(__dirname + "/" + name + ".styl", "utf8")
  stylus.render(template, { paths: [__dirname] }, function (err, css) {
    if (err) throw err

    // https://jestjs.io/docs/en/snapshot-testing
    expect(css).toMatchSnapshot()
    done()
  })
}

describe("twindy", () => {
  it("should be empty", (done) => {
    runStylus("empty", done)
  })

  it("should reset", (done) => {
    runStylus("reset", done)
  })

  it("should units", (done) => {
    runStylus("units", done)
  })
})
