const assert = require("assert").strict
const makeGetMarkets = require("../getMarkets")

describe("Get Markets", () => {

	it("should return the keys of the market object", () => {

		const getMarkets = makeGetMarkets({ m1: 1, m2: 2 })
		assert.deepEqual(getMarkets(), [ "m1", "m2" ])


		const getMarkets2 = makeGetMarkets({ ma: 5, mb: 4, m7: 4 })
		assert.deepEqual(getMarkets2(), [ "ma", "mb", "m7" ])

	})

})	
