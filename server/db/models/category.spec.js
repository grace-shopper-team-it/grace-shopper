const { expect, assert } = require("chai");
const chai = require("chai");
const db = require("../index");
const Category = db.model("category");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

xdescribe("Category model", () => {
  it("has a name", async () => {
    try {
      await Category.create({});
    } catch (error) {
      expect(error.message).to.include("notNull Violation");
    }
  });

  it("has a name which is not an empty string", async () => {
    try {
      await Category.create({
        name: ""
      });
    } catch (error) {
      expect(error.message).to.include("Validation error");
    }
  });
});
