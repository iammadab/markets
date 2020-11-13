// Converts from 1X2:1 to { 1X2: { 1: val } }
// Also converts the group and outcome to user friendly names

const nameMap = require("./name")

const expandMarketValues = compressedMarket => {
	
	const expandedValues = {}

	Object.keys(compressedMarket).forEach(key => {
	
		const [ marketGroup, marketOutcome ] = key.split(":")

		if(!expandedValues[marketGroup])
			expandedValues[marketGroup] = {}

		marketGroup = nameMap[marketGroup] || marketGroup
		marketOutcome = nameMap[marketOutcome] || marketOutcome

		expandedValues[marketGroup][marketOutcome] = compressedMarket[key]

	})

	return expandedValues

}

module.exports = expandMarketValues
