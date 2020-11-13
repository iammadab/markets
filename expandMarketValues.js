// Converts from 1X2:1 to { 1X2: { 1: val } }
// Also converts the group and outcome to user friendly names

const nameMap = require("./name")


const getName = (...values) => {
	return values.map(val => nameMap[val] || val)
}

const expandMarketValues = compressedMarket => {
	
	const expandedValues = {}

	Object.keys(compressedMarket).forEach(key => {
	
		let [ marketGroup, marketOutcome ] = getName(...key.split(":"))

		if(!expandedValues[marketGroup])
			expandedValues[marketGroup] = {}

		expandedValues[marketGroup][marketOutcome] = compressedMarket[key]

	})

	return expandedValues

}

module.exports = expandMarketValues
