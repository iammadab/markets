const groupAt = 
	groupName => 
		[ "ClassiQuotaList", `sarr:${groupName}:ClasseQuota`, "QuoteList" ]

const outcomeAt = 
	(group, outcomeIndex) => 
		[ ...groups[group], outcomeIndex, "QuotaValore" ] 

const groups = {
	
	"1X2": groupAt("1X2"),

	"DC": groupAt("Double Chance"),

	"DNB": groupAt("DNB"),

	"GG": groupAt("GG/NG"),

	"GGO2.5": groupAt("GG/NG & O/U 2,5"),

	"O0.5": groupAt("O/U 0.5"),

	"O1.5": groupAt("O/U 1.5"),

	"O2.5": groupAt("O/U 2.5"),

	"O3.5": groupAt("O/U 3.5"),

	"O4.5": groupAt("O/U 4.5"),

	"O5.5": groupAt("O / U 5.5"),

	"FG": groupAt("First Goal"),

	"HO0.5": groupAt("H/A O/U 0.5"),

	"HO1.5": groupAt("H/A O/U 1.5"),

	"HO2.5": groupAt("H/A O/U 2.5")
}


const map = {

	"1X2:1": outcomeAt("1X2", 0),

	"1X2:X": outcomeAt("1X2", 1),

	"1X2:2": outcomeAt("1X2", 2),

	"DC:1X": outcomeAt("DC", 0),

	"DC:12": outcomeAt("DC", 1),

	"DC:X2": outcomeAt("DC", 2),

	"DNB:1": outcomeAt("DNB", 0),

	"DNB:2": outcomeAt("DNB", 1),

	"GG:YES": outcomeAt("GG", 0),

	"GG:NO": outcomeAt("GG", 1),

	"GGO2.5:YES": outcomeAt("GGO2.5", 0),

	"GGO2.5:NO": outcomeAt("GGO2.5", 1),

	// "GGO2.5:NO": outcomeAt("GGO2.5", 3),

	// "GGO2.5:NO": outcomeAt("GGO2.5", 4),

	"O0.5:YES": outcomeAt("O0.5", 0),

	"O0.5:NO": outcomeAt("O0.5", 1),

	"O1.5:YES": outcomeAt("O1.5", 0),

	"O1.5:NO": outcomeAt("O1.5", 1),

	"O2.5:YES": outcomeAt("O2.5", 0),

	"O2.5:NO": outcomeAt("O2.5", 1),

	"O3.5:YES": outcomeAt("O3.5", 0),

	"O3.5:NO": outcomeAt("O3.5", 1),

	"O4.5:YES": outcomeAt("O4.5", 0),

	"O4.5:NO": outcomeAt("O4.5", 1),

	"O5.5:YES": outcomeAt("O5.5", 0),

	"O5.5:NO": outcomeAt("O5.5", 1),

	"FG:1": outcomeAt("FG", 0),

	"FG:NONE": outcomeAt("FG", 1),

	"FG:2": outcomeAt("FG", 2),

	"HO0.5:YES": outcomeAt("HO0.5", 0),

	"HO0.5:NO": outcomeAt("HO0.5", 1),

	"AO0.5:YES": outcomeAt("HO0.5", 2),

	"AO0.5:NO": outcomeAt("HO0.5", 3),

	"HO1.5:YES": outcomeAt("HO1.5", 0),

	"HO1.5:NO": outcomeAt("HO1.5", 1),

	"AO1.5:YES": outcomeAt("HO1.5", 2),
	
	"AO1.5:NO": outcomeAt("HO1.5", 3),

	"HO2.5:YES": outcomeAt("HO2.5", 0),

	"HO2.5:NO": outcomeAt("HO2.5", 1),

	"AO2.5:YES": outcomeAt("HO2.5", 2),
	
	"AO2.5:NO": outcomeAt("HO2.5", 3),

}

module.exports = map
