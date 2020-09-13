const markets = require("./markets")

const makeGetMarkets = (
	
	marketObj = markets
	
) => () => {
	
	return Object.keys(marketObj)

}

module.exports = makeGetMarkets
