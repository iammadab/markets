// Naming markets
// <market-group>:<market-outcome>
// e.g 1X2:1 (market-group = 1X2, market-outcome = 1)
//
// Specifying opposites
// Each market points to an array that contains one or more of their opposites
// Opposites can either be standalone markets or combination of makerts
// Opposites that are combinations are separated by +
// e.g 1X2:1 : [ "DC:X2", "1X2:X + 1X2:2" ]
// DC - double chance

const markets = {
	
	"1X2:1": [ "1X2:X + 1X2:2", "DC:X2" ],

	"1X2:X": [ "1X2:1 + 1X2:2", "DC:12" ],

	"1X2:2": [ "1X2:1 + 1X2:X", "DC:1X" ]

}

module.exports = markets
