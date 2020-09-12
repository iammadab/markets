const assert = require("assert")
const sinon = require("sinon")
const makeExtractMarketValues = require("../extractMarketValues")

describe("Extract Market Values", () => {

	let argsOuter, argsInner, gextractMarketValues

	beforeEach(() => {

		argsOuter = {
			generateInstructionObj: sinon.stub().returns("instruction_obj"),
			executeInstructionObj: sinon.stub().returns("compressed_market_values"),
			expandMarketValues: sinon.stub().returns("market_values")
		}

		argsInner = {
			markets: "markets",
			providerMap: "provider_map",
			providerData: "provider_data"
		}
	
		gextractMarketValues = makeExtractMarketValues(...Object.values(argsOuter))

	})
	
	it("should use the market list and the provider map to create an instruction object", () => {

		gextractMarketValues(...Object.values(argsInner))	

		assert.strictEqual(argsOuter.generateInstructionObj.calledOnce, true)
		assert.strictEqual(
			argsOuter.generateInstructionObj.calledWith(
				argsInner.markets,
				argsInner.providerMap
			),
			true
		)

	})	


	it("should execute the instruction obj to generate the compressed market values", () => {
	
		gextractMarketValues(...Object.values(argsInner))

		assert.strictEqual(argsOuter.executeInstructionObj.calledOnce, true)
		assert.strictEqual(
			argsOuter.executeInstructionObj.calledWith(
				"instruction_obj",
				argsInner.providerData
			),
			true
		)

	})

	it("should expand the compressed market value and return that", () => {
	
		const marketValues = gextractMarketValues(...Object.values(argsInner))

		assert.strictEqual(argsOuter.expandMarketValues.calledOnce, true)
		assert.strictEqual(
			argsOuter.expandMarketValues.calledWith(
				"compressed_market_values"
			), 
			true
		)
		assert.strictEqual(marketValues, "market_values")

	})

})
