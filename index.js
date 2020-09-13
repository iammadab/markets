const makeExtractMarkets = require("./extractMarkets")
const extractMarkets = makeExtractMarkets()

const markets = extractMarkets("p1", { a: 3 })
console.log(markets)
