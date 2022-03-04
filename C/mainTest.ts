var assert = require("assert");
var { Main } = require("./main.js");
describe("Tests", () => {
	describe("Valid Isbn 10", () => {
		it("A valid isb10 should return a valid isbn13.", () => {
			var main = new Main();
			var result = main.Isbn("3866155239");
			assert.equal(result, "9783866155237");
		});
		it("A valid isb10 with an X should return a valid isbn13.", () => {
			var main = new Main();
			var result = main.Isbn("817450494X");
			assert.equal(result, "9788174504944");
		});
	});
	describe("Invalid Isbn 10", () => {
		it("Should return invalid with an X character", () => {
			var main = new Main();
			var result = main.Isbn("031606652X");
			assert.equal(result, "Invalid");
		});
		it("Should return invalid", () => {
			var main = new Main();
			var result = main.Isbn("0345453747");
			assert.equal(result, "Invalid");
		});
	});
	describe("Valid Isbn 13", () => {
		it("Should return valid Isbn13", () => {
			var main = new Main();
			var result = main.Isbn("9780345453747");
			assert.equal(result, "Valid");
		});
		it("Should return valid Isbn13 with a character X", () => {
			var main = new Main();
			var result = main.Isbn("9780345453747");
			assert.equal(result, "Valid");
		});
	});
	describe("Invalid Isbn13", () => {
		it("Should return invalid Isbn13", () => {
			//var res = 2;
			var main = new Main();
			var result = main.Isbn("9783876155237");
			assert.equal(result, "Invalid");
		});
		it("Should return invalid Isbn13 with a character X", () => {
			//var res = 2;
			var main = new Main();
			var result = main.Isbn("978387615523X");
			assert.equal(result, "Invalid");
		});
	});
});
