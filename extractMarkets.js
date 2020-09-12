const makeFetchMarkets = (
	
	getMarkets, 
	
	getProviderMap,

	extractMarketValues

) => ( provider, providerData ) => {
	
	// List of all markets we currently provide data for
	const markets = getMarkets()

	// Instructions to extract data for each market
	// Based on the provider
	const providerMap = getProviderMap(provider)

	// Given we know the markets
	// And we have instruction for this provider
	// We just take the provider data and extract the market values
	const marketValues = extractMarketValues(markets, providerMap, providerData)

	return marketValues

}

module.exports = makeFetchMarkets
