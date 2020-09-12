const expandMarketValues = compressedMarket => {
	
	const expandedValues = {}

	Object.keys(compressedMarket).forEach(key => {
	
		const [ marketGroup, marketOutcome ] = key.split(":")

		if(!expandedValues[marketGroup])
			expandedValues[marketGroup] = {}

		expandedValues[marketGroup][marketOutcome] = compressedMarket[key]

	})

	return expandedValues

}

module.exports = expandMarketValues
