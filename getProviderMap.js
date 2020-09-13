const makeGetProviderMap = (
	
	maps = { "p1": { "a:b": ["a"] }}
	
) => provider => {

	if(!maps)
		return {}
	
	return maps[provider] ? maps[provider] : {}

}

module.exports = makeGetProviderMap
