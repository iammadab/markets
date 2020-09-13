const generateInstructionObjFn = require("./generateInstructionObj")
const makeExecuteInstructionObj = require("./executeInstructionObj")
const expandMarketValuesFn = require("./expandMarketValues")

const makeExtractMarketValues = (
	
	generateInstructionObj = generateInstructionObjFn,
	
	executeInstructionObj = makeExecuteInstructionObj(),

	expandMarketValues = expandMarketValuesFn
	
) => (markets, providerMap, providerData) => {
	
	// The provider map has instructions for each market
	// For the markets we care about, we extract their instructions
	const instructionObj = generateInstructionObj(markets, providerMap)
	
	const compressedMarketValues = executeInstructionObj(instructionObj, providerData) 

	const marketValues = expandMarketValues(compressedMarketValues)

	return marketValues

}

module.exports = makeExtractMarketValues
