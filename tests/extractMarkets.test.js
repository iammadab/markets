const assert = require("assert").strict
const sinon = require("sinon")
const makeFetchMarket = require("../extractMarkets")

describe("Extract Markets", () => {

	let gextractMarkets, args, createArgs 

	beforeEach(() => {

		createArgs = () => ({

			getMarkets: sinon.stub().returns("market_list"),

			getProviderMap: sinon.stub().returns("provider_map"),
			
			extractMarketValues: sinon.stub().returns({ data: "yay" })

		})
	
		args = createArgs()
			
		gextractMarkets = makeFetchMarket(...Object.values(args))

	})

	it("should return an object", () => {
	
		const markets = gextractMarkets()

		assert.strictEqual(typeof markets, "object")

	})

	it("should get the market list", () => {
	
		gextractMarkets()

		assert.strictEqual(args.getMarkets.calledOnce, true)

	})

	it("should get the provider market map", () => {
	
		gextractMarkets("bet9ja")
		assert.strictEqual(args.getProviderMap.calledOnce, true)
		assert.strictEqual(args.getProviderMap.calledWith("bet9ja"), true)

		// Reset the args
		args = createArgs()

		const extractMarkets = makeFetchMarket(...Object.values(args))

		extractMarkets("provider")
		assert.strictEqual(args.getProviderMap.calledOnce, true)
		assert.strictEqual(args.getProviderMap.calledWith("provider"), true)


	})

	it("should extract the market values with the market list, map and provider data, then return that", () => {
	
		gextractMarkets("provider", "provider_data")

		assert.strictEqual(args.extractMarketValues.calledOnce, true)
		assert.strictEqual(
			args.extractMarketValues.calledWith(
				"market_list",
				"provider_map",
				"provider_data"
			),
			true
		)

	})

})
