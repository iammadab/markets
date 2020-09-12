const assert = require("assert").strict
const makeGetProviderMap = require("../getProviderMap")

describe("Provider Map", () => {

	let args, ggetProviderMap

	beforeEach(() => {

		args = {
		
			maps: {

				"p1": "p1map",
				"p2": "p2map",
				"p3": "p3map"

			}

		}

		ggetProviderMap = makeGetProviderMap(...Object.values(args))

	})
	

	it("should return the correct map for a valid provider", () => {
	
		assert.strictEqual(ggetProviderMap("p1"), "p1map")
		assert.strictEqual(ggetProviderMap("p2"), "p2map")

	})


	it("should return an empty object if the provider doesn't exist", () => {
	
		assert.deepEqual(ggetProviderMap("invalid_provider"), {})

	})

	it("should return an empty object is the maps passed is invalid", () => {
	
		const getProviderMap = makeGetProviderMap()
		assert.deepEqual(getProviderMap("p1"), {})

	})

})
