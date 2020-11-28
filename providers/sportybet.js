const groupAt = 
	groupName => 
		[ "data", "markets", `sarr:${groupName}:desc` ]

const outcomeAt = 
	(group, outcomeName) =>
		[ ...groups[group], "outcomes", `sarr:${outcomeName}:desc` ]

const groups = {
	"1X2": groupAt("1X2")
}

const map = {
	"1X2:1": outcomeAt("1X2", "Home"),
	"1X2:X": outcomeAt("1X2", "Draw"),
	"1X2:2": outcomeAt("1X2", "Away")
}

module.exports = map
