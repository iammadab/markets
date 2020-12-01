const groupAt = 
	groupName => 
		[ "data", "markets", `sarr:${groupName}:name` ]

const mgroupAt =
	(groupName, specifier) => 
		[ "data", "markets", `farr:${groupName}:name`, `sarr:${specifier}:specifier` ]

const outcomeAt = 
	(group, outcomeName) =>
		[ ...groups[group], "outcomes", `sarr:${outcomeName}:desc`, "odds" ]

const groups = {

	"1X2": groupAt("1X2"),

	"DC": groupAt("Double Chance"),

	"DNB": groupAt("Draw No Bet"),

	"GG": groupAt("GG/NG"),

	"GGO2.5": mgroupAt("Over/Under & GG/NG", "total=2.5"),

	"O0.5": mgroupAt("Over/Under", "total=0.5"),

	"O1.5": mgroupAt("Over/Under", "total=1.5"),

	"O2.5": mgroupAt("Over/Under", "total=2.5"),

	"O3.5": mgroupAt("Over/Under", "total=3.5"),

	"O4.5": mgroupAt("Over/Under", "total=4.5"),

	"O5.5": mgroupAt("Over/Under", "total=5.5"),

	"FG": mgroupAt("1st Goal", "goalnr=1"),

	"HO0.5": mgroupAt("Home Team Over/Under", "total=0.5"),

	"HO1.5": mgroupAt("Home Team Over/Under", "total=1.5"),

	"HO2.5": mgroupAt("Home Team Over/Under", "total=2.5"),

	"AO0.5": mgroupAt("Away Team Over/Under", "total=0.5"),

	"AO1.5": mgroupAt("Away Team Over/Under", "total=1.5"),

	"AO2.5": mgroupAt("Away Team Over/Under", "total=2.5")

}

const map = {

	"1X2:1": outcomeAt("1X2", "Home"),

	"1X2:X": outcomeAt("1X2", "Draw"),

	"1X2:2": outcomeAt("1X2", "Away"),

	"DC:1X": outcomeAt("DC", "Home or Draw"),

	"DC:12": outcomeAt("DC", "Home or Away"),

	"DC:X2": outcomeAt("DC", "Draw or Away"),

	"DNB:1": outcomeAt("DNB", "Home"),

	"DNB:2": outcomeAt("DNB", "Away"),

	"GG:YES": outcomeAt("GG", "Yes"),

	"GG:NO": outcomeAt("GG", "No"),

	"GGO2.5:YES": outcomeAt("GGO2.5", "Over 2.5 & Yes"),

	"GGO2.5:NO": outcomeAt("GGO2.5", "Under 2.5 & Yes"),

	"O0.5:YES": outcomeAt("O0.5", "Over 0.5"),

	"O0.5:NO": outcomeAt("O0.5", "Under 0.5"),

	"O1.5:YES": outcomeAt("O1.5", "Over 0.5"),

	"O1.5:NO": outcomeAt("O1.5", "Under 0.5"),

	"O2.5:YES": outcomeAt("O2.5", "Over 0.5"),

	"O2.5:NO": outcomeAt("O2.5", "Under 0.5"),

	"O3.5:YES": outcomeAt("O3.5", "Over 0.5"),

	"O3.5:NO": outcomeAt("O3.5", "Under 0.5"),

	"O4.5:YES": outcomeAt("O4.5", "Over 0.5"),

	"O4.5:NO": outcomeAt("O4.5", "Under 0.5"),

	"O5.5:YES": outcomeAt("O5.5", "Over 0.5"),

	"O5.5:NO": outcomeAt("O5.5", "Under 0.5"),

	"FG:1": outcomeAt("FG", "Home"),

	"FG:NONE": outcomeAt("FG", "None"),

	"FG:2": outcomeAt("FG", "Away"),

	"HO0.5:YES": outcomeAt("HO0.5", "Over 0.5"),

	"HO0.5:NO": outcomeAt("HO0.5", "Under 0.5"),

	"AO0.5:YES": outcomeAt("AO0.5", "Over 0.5"),

	"AO0.5:NO": outcomeAt("AO0.5", "Under 0.5"),

	"HO1.5:YES": outcomeAt("HO1.5", "Over 1.5"),

	"HO1.5:NO": outcomeAt("HO1.5", "Under 1.5"),

	"AO1.5:YES": outcomeAt("AO1.5", "Over 1.5"),
	
	"AO1.5:NO": outcomeAt("AO1.5", "Under 1.5"),

	"HO2.5:YES": outcomeAt("HO2.5", "Over 2.5"),

	"HO2.5:NO": outcomeAt("HO2.5", "Under 2.5"),

	"AO2.5:YES": outcomeAt("AO2.5", "Over 2.5"),
	
	"AO2.5:NO": outcomeAt("AO2.5", "Under 2.5"),

}

module.exports = map
