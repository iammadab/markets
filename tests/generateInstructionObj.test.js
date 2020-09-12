const assert = require("assert")
const generateInstructionObj = require("../generateInstructionObj")

describe("Generate Instruction Obj", () => {
	
	it("should extract the instructions from the provider map based on the markets", () => {
	
		const providerMap = { a: 1, b: 2, c: 3, d: 4, e: 5 }
		const markets = [ "a", "d", "e" ]

		const instructionObj = generateInstructionObj(markets, providerMap)

		assert.deepEqual(instructionObj, { a: 1, d: 4, e: 5 })

	})

})
