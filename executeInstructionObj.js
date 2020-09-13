const makeExecuteInstructionObj = executeInstruction => (instructionObj, providerData) => {

	const compressedMarketValues = {} 

	const markets = Object.keys(instructionObj)

	// For each market
	// We extract the instruction
	// And execute that instruction on the data provided by the provider
	markets.forEach(market => {
		
		const marketInstruction = instructionObj[market]
		
		const instructionResult = executeInstruction(marketInstruction, providerData)

		compressedMarketValues[market] = instructionResult
	
	})

	return compressedMarketValues

}

module.exports = makeExecuteInstructionObj
