const assert = require("assert").strict
const executeInstruction = require("../executeInstruction")

describe("Execute Instruction", () => {

	let args

	beforeEach(() => {
	
		args = {
			marketInstruction: [],
			providerData: { 
				a: 1, 
				b: 2,
				c: {
					a: 54
				},
				d: {
					e: {
						f: "deep"
					}
				}
			}
		}

	})

	it("should return '-' if the data is not an object", () => {
	
		args.providerData = "invalid_provider"
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)

	})

	it("should return '-' if the marketInstruction is not an array", () => {
	
		args.marketInstruction = "invalid_instruction"
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)

	})

	it("should return the value of the path describe by the market instruction", () => {

		args.marketInstruction = ["a"]	
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			1
		)


		args.marketInstruction = ["b"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			2
		)

	})


	it("should return '-' if the instruction doesn't point to a value", () => {
	
		args.marketInstruction = ["z"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)

		args.marketInstruction = ["xx"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)

	})

	it("should resolve instructions with multi parts correctly", () => {
	
		args.marketInstruction = ["c", "a"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			54
		)

		args.marketInstruction = ["d", "e", "f"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"deep"
		)

	})

	it("should return '-' if any part of the multi part instruction fails", () => {
		
		args.marketInstruction = ["c", "p"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)

		args.marketInstruction = ["d", "p", "f"]
		assert.strictEqual(
			executeInstruction(...Object.values(args)),
			"-"
		)
	
	})	

})	
