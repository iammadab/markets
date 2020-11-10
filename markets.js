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

	"1X2:2": [ "1X2:1 + 1X2:X", "DC:1X" ],

	"DC:1X": [ "1X2:2" ],

	"DC:12": [ "1X2:X" ],

	"DC:X2": [ "1X2:1" ],

	"DNB:1": [ "1X2:2" ],

	"DNB:2": [ "1X2:1" ],

	"GG:YES": [ "GG:NO" ],

	"GG:NO": [ "GG:YES" ],

	"GGO2.5:YES": [ "GGO2.5:NO" ],

	"GGO2.5:NO": [ "GGO2.5:YES" ],

	"O0.5:YES": [ "O0.5:NO" ],

	"O0.5:NO": [ "O0.5:YES" ],
	
	"O1.5:YES": [ "O1.5:NO" ],

	"O1.5:NO": [ "O1.5:YES" ],

	"O2.5:YES": [ "O2.5:NO" ],

	"O2.5:NO": [ "O2.5:YES" ],

	"O3.5:YES": [ "O3.5:NO" ],

	"O3.5:NO": [ "O3.5:YES" ],

	"O4.5:YES": [ "O4.5:NO" ],

	"O4.5:NO": [ "O4.5:YES" ],

	"O5.5:YES": [ "O5.5:NO" ],

	"O5.5:NO": [ "O4.5:YES" ],

	"FG:1": [ "FG:NONE + FG:2" ],

	"FG:NONE": [ "FG:1 + FG:2" ],

	"FG:2": [ "FG:1 + FG:None" ],

	"HO0.5:YES": [ "HO0.5:NO" ],

	"HO0.5:NO": [ "HO0.5:YES" ],

	"HO1.5:YES": [ "HO1.5:NO" ],

	"HO1.5:NO": [ "HO1.5:YES" ],

	"HO2.5:YES": [ "HO2.5:NO" ],

	"HO2.5:NO": [ "HO2.5:YES" ],

	"AO0.5:YES": [ "AO0.5:NO" ],

	"AO0.5:NO": [ "AO0.5:YES" ],

	"AO1.5:YES": [ "AO1.5:NO" ],

	"AO1.5:NO": [ "AO1.5:YES" ],

	"AO2.5:YES": [ "AO2.5:NO" ],

	"AO2.5:NO": [ "AO2.5:YES" ],

	// "H01:1": [ "H01:X + H01:2" ],

	// "H01:X": [ "H01:1 + H01:2" ],

	// "H01:2": [ "H01:1 + H01:X" ],

	// "H02:1": [ "H02:X + H02:2" ],

	// "H02:X": [ "H02:1 + H02:2" ],

	// "H02:2": [ "H02:1 + H02:X" ],

	// "H10:1": [ "H10:X + H10:2" ],

	// "H10:X": [ "H10:1 + H10:2" ],

	// "H10:2": [ "H10:1 + H10:X" ],

	// "AH-0.5:1": [ "AH-0.5:2" ],

	// "AH-0.5:2": [ "AH-0.5:1" ],

	// "AH0:1": [ "AH0:2" ],

	// "AH0:2": [ "AH0:1" ],

	// "CS:00": [ "CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:10": [ "CS:00 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:20": [ "CS:00 + CS:10 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:30": [ "CS:00 + CS:10 + CS:20 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:40": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:01": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:11": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:21": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:31": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:41": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:02": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:12": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:22": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:32": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:42": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:03": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:13": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:23": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:33": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:43": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:04": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:14 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:14": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:24 + CS:34 + CS:44 + CS:Other" ],

	// "CS:24": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:34 + CS:44 + CS:Other" ],

	// "CS:34": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:44 + CS:Other" ],

	// "CS:44": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:Other" ],

	// "CS:Other": [ "CS:00 + CS:10 + CS:20 + CS:30 + CS:40 + CS:01 + CS:11 + CS:21 + CS:31 + CS:41 + CS:02 + CS:12 + CS:22 + CS:32 + CS:42 + CS:03 + CS:13 + CS:23 + CS:33 + CS:43 + CS:04 + CS:14 + CS:24 + CS:34 + CS:44" ],

}


module.exports = markets
