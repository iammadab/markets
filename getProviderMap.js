const providerMaps = require("./providers")

const makeGetProviderMap = (
	
	maps = providerMaps 
	
) => provider => {

	if(!maps)
		return {}
	
	return maps[provider] ? maps[provider] : {}

}

module.exports = makeGetProviderMap
