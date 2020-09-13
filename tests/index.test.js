const assert = require("assert").strict
const markets = require("../markets")
const providerMaps = require("../providers")

describe("Consistency Test", () => {
	
	it("All markets should be found in all providers", () => {

		const errors = []

		const marketList = Object.keys(markets)

		Object.keys(providerMaps).forEach(provider => {
	
			const providerMarkets = Object.keys(providerMaps[provider])

			for(market of marketList){

				const hasMarket = providerMarkets.includes(market)

				if(!hasMarket){
					errors.push(marketNotFound(provider, market))
					continue
				}

				if(!providerMap[provider][market]){
					errors.push(marketNoValue(provider, market))
					continue
				}

			}

		})

		if(errors.length > 0)
			console.log(errors)

		assert.strictEqual(errors.length, 0)


	})

})

function marketNotFound(provider, market){
	return `Provider ${provider} does not have ${market} market`
}

function marketNoValue(provider, market){
	return `Provider ${provider} has no value for ${market} market`
}
