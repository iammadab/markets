const generateInstructionObj = (markets, providerMap) => {

	const instructionObj = {}

	markets.forEach(market => {

		instructionObj[market] = providerMap[market]

	})

	return instructionObj

}

module.exports = generateInstructionObj
