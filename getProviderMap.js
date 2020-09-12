const makeGetProviderMap = maps => provider => {

	if(!maps)
		return {}
	
	return maps[provider] ? maps[provider] : {}

}

module.exports = makeGetProviderMap
