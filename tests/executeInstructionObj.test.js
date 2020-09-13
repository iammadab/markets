const assert = require("assert")
const sinon = require("sinon")
const makeExecuteInstructionObj = require("../executeInstructionObj")

describe("Execute Instruction Obj", () => {

	let argsOuter, argsInner, gexecuteInstructionObj

	beforeEach(() => {

		argsOuter = {
			execute: sinon.spy(a => a * 2)
		}

		argsInner = {
			instructionObj: { a: 1, b: 2, c: 3 },
			data: {}
		}

		gexecuteInstructionObj = makeExecuteInstructionObj(...Object.values(argsOuter))

	})

	it("should return an object with the same keys as the instruction object", () => {

		const compressedMarketValues = gexecuteInstructionObj(...Object.values(argsInner))		

		assert.deepEqual(
			Object.keys(argsInner.instructionObj), 
			Object.keys(compressedMarketValues)
		)

	})	

	it("should call the execute function with each market instruction and the providerData", () => {
	
		gexecuteInstructionObj(...Object.values(argsInner))	

		assert.strictEqual(argsOuter.execute.callCount, 3)
		assert.strictEqual(argsOuter.execute.calledWith(1, argsInner.data), true)
		assert.strictEqual(argsOuter.execute.calledWith(2, argsInner.data), true)
		assert.strictEqual(argsOuter.execute.calledWith(3, argsInner.data), true)

	})

	it("should build a new obj with the result of execution with each market", () => {
	
		const compressedMarketValues = gexecuteInstructionObj(...Object.values(argsInner))

		assert.deepEqual(
			compressedMarketValues,
			{
				a: 2,
				b: 4,
				c: 6
			}
		)

	})

})
