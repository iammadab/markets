const groupAt = 
	groupName =>
		[ "match", "AM", 0, "IT", 0, "OC", `sarr:${groupName}:OT:ON` ]

const outcomeAt =
	(group, outcomeIndex) => 
		[ ...groups[group], "MO", outcomeIndex, "OT", "OO" ]

const mgroupAt =
	groupName =>
		[ "league", "OddsCollection", `sarr:${groupName}:OddsType:OddsTypeName` ]

const moutcomeAt =
	(group, outcomeIndex) =>
		[ ...groups[group], "MatchOdds", outcomeIndex, "Outcome", "OddOutcome" ]


const groups = {

	"1X2": mgroupAt("1X2"),
	
	"DNB": groupAt("Draw No Bet"),

	"GG": groupAt("Both Teams to Score"),

	"GGO2.5": groupAt("GG/NG & O/U (2.5)"),

	"O0.5": groupAt("Over/Under (0.5)"),

	"O1.5": groupAt("Over/Under (1.5)"),

	"O2.5": groupAt("Over/Under (2.5)"),

	"O3.5": groupAt("Over/Under (3.5)"),

	"O4.5": groupAt("Over/Under (4.5)"),

	"O5.5": groupAt("Over/Under (5.5)"),

	"FG": groupAt("First Team Goal"),

	"HO0.5": groupAt("Totals Home Team (0.5)"),

	"HO1.5": groupAt("Totals Home Team (1.5)"),

	"HO2.5": groupAt("Totals Home Team (2.5)"),

	"AO0.5": groupAt("Totals Away Team (0.5)"),

	"AO1.5": groupAt("Totals Away Team (1.5)"),

	"AO2.5": groupAt("Totals Away Team (2.5)"),

}

const map = {

	"1X2:1" moutcomeAt("1X2", 0),

	"1X2:X": moutcomeAt("1X2", 1),

	"1X2:2": moutcomeAt("1X2", 2),

	"DNB:1": outcomeAt("DNB", 0),

	"DNB:2": outcomeAt("DNB", 1),

	"GG:YES": outcomeAt("GG", 0),

	"GG:NO": outcomeAt("GG", 1),

	"GGO2.5:YES": outcomeAt("GGO2.5", 0),

	"GGO2.5:NO": outcomeAt("GGO2.5", 1),

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

	"FG:NONE": outcomeAt("FG", 2),

	"FG:2": outcomeAt("FG", 1),

	"HO0.5:YES": outcomeAt("HO0.5", 0),

	"HO0.5:NO": outcomeAt("HO0.5", 1),

	"AO0.5:YES": outcomeAt("AO0.5", 0),

	"AO0.5:NO": outcomeAt("AO0.5", 1),

	"HO1.5:YES": outcomeAt("HO1.5", 0),

	"HO1.5:NO": outcomeAt("HO1.5", 1),

	"AO1.5:YES": outcomeAt("AO1.5", 0),
	
	"AO1.5:NO": outcomeAt("AO1.5", 1),

	"HO2.5:YES": outcomeAt("HO2.5", 0),

	"HO2.5:NO": outcomeAt("HO2.5", 1),

	"AO2.5:YES": outcomeAt("AO2.5", 0),
	
	"AO2.5:NO": outcomeAt("AO2.5", 1),

}

console.log(map)

module.exports = map
