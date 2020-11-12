const groupAt = 
	groupIndex =>
		[ "AM", 0, "IT", 0, "OC", groupIndex ]

const outcomeAt =
	(group, outcomeIndex) => 
		[ ...groups[group], "MO", outcomeIndex, "OT", "OO"]


const groups = {
	
	"DNB": groupAt(22)

}

const map = {
	
	"DNB:1": outcomeAt("DNB", 0),

	"DNB:2": outcomeAt("DNB", 1)

}

console.log(map)

module.exports = map
