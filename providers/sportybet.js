const groupAt = 
	groupName => 
		[ "data", "markets", `sarr:${groupName}:name` ]

const mgroupAt =
	(groupName, specifier) => 
		[ "data", "markets", `filter:${groupName}:name`, `sarr:${specifier}:specifier` ]

const outcomeAt = 
	(group, outcomeName) =>
		[ ...groups[group], "outcomes", `sarr:${outcomeName}:desc`, "odds" ]

const groups = {

	"1X2": groupAt("1X2"),

	"O0.5": mgroupAt("Over/Under", "total=0.5")

}

const map = {

	"1X2:1": outcomeAt("1X2", "Home"),

	"1X2:X": outcomeAt("1X2", "Draw"),

	"1X2:2": outcomeAt("1X2", "Away"),

	"O0.5:YES": outcomeAt("O0.5", "Over 0.5"),

	"O0.5:NO": outcomeAt("O0.5", "Under 0.5")

}

module.exports = map
