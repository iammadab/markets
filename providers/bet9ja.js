const groupAt = 
	groupIndex => 
		[ "ClassiQuotaList", groupIndex, "QuoteList" ]

const outcomeAt = 
	(group, outcomeIndex) => 
		[ ...groups[group], outcomeIndex, "QuotaValore" ] 

const groups = {
	
	"1X2": groupAt(0),

	"DC": groupAt(1)
}


const map = {

	"1X2:1": outcomeAt("1X2", 0),

	"1X2:X": outcomeAt("1X2", 1),

	"1X2:2": outcomeAt("1X2", 2),

	"DC:1X": outcomeAt("DC", 0),

	"DC:12": outcomeAt("DC", 1),

	"DC:X2": outcomeAt("DC", 2)

}

console.log(map)

module.exports = map
