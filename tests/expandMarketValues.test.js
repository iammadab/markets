const assert = require("assert").strict
const expandMarketValues = require("../expandMarketValues")

describe("Expand market values", () => {

	it("should expand an object with composite markets to a nested one", () => {
	
		const compressedMarket = {

			"a:b": 1,
			"a:c": 2,
			"b:n": 3,
			"c:p": 5,
			"a:p": 7

		}

		const expandedValues = expandMarketValues(compressedMarket)

		assert.deepEqual(expandedValues, {

			a: {
				b: 1,
				c: 2,
				p: 7
			},
			b: {
				n: 3
			},
			c: {
				p: 5
			}

		})

	})

})	
