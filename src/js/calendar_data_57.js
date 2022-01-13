//TODO
//daysOfTournament in calendar_index_functions_1 and index

//STATUS
var STATUS_CANCELLED = "cancelled";

//INFO
var INFO_MEN_N_WOMEN = "M&W";
var INFO_MEN = "Men";
var INFO_WOMEN = "Women";
var INFO_MIXED = "Mixed";
var CANCELLED = "CANCELLED"

//TOURNAMENT NAMEs
var NAME_AYCP = "AYCP";
var NAME_SIDE_IT_OUT = "Side-it-Out";
var NAME_HIRE_WORTHING = "Available for court hire";
var NAME_HIRE_LEYTON = "Available for court hire";
var NAME_OPEN_PLAY = "Open Play";
var NAME_FLEXI_TRAINING = "Available for Flexi Training";
var NAME_FLEXI_PLAY = "Available for Flexi Play";
var NAME_BEGINNERS_TRAINING = "Beginners’ Training"
var NAME_SPRING = "SideOut Spring Tourney";
var NAME_SUMMER = "SideOut Summer Series";
var NAME_MIXED_SERIES = "SideOut Mixed Series ";
var NAME_ALL_NATIONS = "All Nations Beach Volleyball";
var NAME_CEV = "CEV Continental Cup Tournament";
var NAME_CHALLENGER = "SideOut Challenger Series";
var NAME_GRAND_PRIX = "SideOut London Grand Prix";
var NAME_WILSON = "UKBT Wilson Championships";
var NAME_WILSON_QUALIFIERS = "UKBT Wilson Qualifiers";
var NAME_LONDON_FINALS = "SideOut London Finals";
var NAME_END_OF_SEASON_PARTY = "End of Season Party!";
var NAME_INDOOR_ON_THE_BEACH = "Indoor on the Beach";
var NAME_JUNIOR_SERIES = "SideOut Junior Series";
var NAME_JUNIOR_TRAINING = "Junior Training";
var NAME_ADULT_TRAINING = "Adult Training";
var NAME_MIX_N_MATCH = "Mix & Match";
var NAME_GRAND_SLAM = "London Grand Slam";
var NAME_FAMILY_OPEN_PLAY = "Family Open Session"
var NAME_TENTH_BIRTHDAY = "10th Birthday Tournament"
var NAME_FREE_AYCP = "Free AYCP"

//TOURNAMENT TYPES
var TYPE_TOURNAMENT = "Tournament";
var TYPE_PLAY = "Play";
var TYPE_TRAINING = "Training";
var TYPE_JUNIORS = "Juniors";

//EVENT LINKS
var URL_SIDE_IT_OUT = "play/side-it-out.html";
var URL_AYCP = "play/all-you-can-play.html";
var URL_OPEN_PLAY = "play/open-play.html";
var URL_FAMILY_OPEN_SESSIONS = "play/family-open-sessions.html"
var URL_FLEXI_PLAY = "play/flexi-play-packages.html";
var URL_INDOOR_ON_THE_BEACH = "indoor-on-the-beach.html";

var URL_MIX_N_MATCH = "tournaments/mixnmatch.html";
var URL_KING_QUEEN = "tournaments/king-queen-court.html";
var URL_WILSON = "tournaments/ukbt-wilson-championships.html";
var URL_WILSON_FINALS = "tournaments/ukbt-wilson-championships-finals.html";
var URL_WILSON_QUALIFIERS = "tournaments/ukbt-wilson-qualifiers.html";
var URL_SPRING = "tournaments/spring-tourney.html";
var URL_SUMMER = "tournaments/summer-series.html";
var URL_MIXED_SERIES = "tournaments/sideout-mixed-series.html";
var URL_ALL_NATIONS = "tournaments/all-nations.html";
var URL_CHALLENGER = "tournaments/challenger-series.html";
var URL_GRAND_PRIX = "tournaments/grand-prix.html";
var URL_POLONIA = "tournaments/poloniasOneMoreBeachTournie.html";
var URL_UNDER_18 = "tournaments/junior-series.html"

var URL_CEV = "cev-continental-cup.html";
var URL_LONDON_FINALS = "london-finals.html";

var URL_TRAINING_LEYTON = "training-leyton.html";
var URL_TRAINING_LEYTON_BEGINNERS = "training-leyton.html#beginners";
var URL_TRAINING_WORTHING = "training-worthing.html";
var URL_FLEXI_TRAINING = "training-leyton.html#flexitrainingpackages"
var URL_JUNIOR_LEYTON = "juniors-leyton.html"
var URL_JUNIOR_WORTHING = "juniors-wothing.html"
var URL_HIRE_LEYTON = "book-a-court-leyton.html";
var URL_HIRE_WORTHING = "book-a-court-worthing.html";
var URL_TENTH_BIRTHDAY = "10-years-anniversary.html#birthdaytournament"
var URL_TEN_YEAR_AYCP = "/10-years-anniversary.html#AYCP"

//INFO
// var INFO_OPEN_PLAY = "18:00-22:00, £10 per person (£5 for Club members, FREE with Social, Open Group or Private Group add-on), No need to register"
var INFO_OPEN_PLAY = "18:30-22:00";
var INFO_AYCP = "10:00-17:00";
var INFO_AYCP_WINTER = "10:00-16:00";
var INFO_SIDE_IT_OUT = "18:30-20:30";

//TOURNAMENT COLORS
var COLOR_AYCP = "#1d29e4";
var COLOR_OPEN_PLAY = "#0300b5";
var COLOR_SIDE_IT_OUT = "#043101";
var COLOR_SPRING = "#229432";
var COLOR_SUMMER = "#2b94b7";
var COLOR_ALL_NATIONS = "#c1821c";
var COLOR_CEV = "#1cc177";
var COLOR_CHALLENGER = "#c11ca2";
var COLOR_GRAND_PRIX = "#000000";
var COLOR_WILSON = "#000000";
var COLOR_HIRE = "#e45a2a";
var COLOR_LONDON_FINALS = "#ea450e";
var COLOR_DEFAULT = "#3a1d13";
var COLOR_ONE = "#e4dad7";
var COLOR_TWO = "#eaeaea";
var COLOR_SIDEOUT_RED = "#ed2329";

var gsDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var DAY_NAMES_TABLE = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MONTHS_NAME_TABLE = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getAdultTraining(date) {
	return { date: new Date(date), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON };
}

function getJuniorTrainin(date) {
	return { date: new Date(date), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "", url: URL_JUNIOR_LEYTON };
}

function getWorthingJuniorTrainin(date) {
	return { date: new Date(date), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "12:00-13:00 Boys & Girls aged 5-12", url: URL_JUNIOR_WORTHING };
}

function getOpenPlayxxxxx(date) {
	return { date: new Date(date), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY };
}

function getAllYouCanPlay(date) {
	return { date: new Date(date), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP };
}

function getWorthingAllYouCanPlay(date) {
	return { date: new Date(date), name: NAME_AYCP, type: TYPE_PLAY, info: "09:00-13:00 & 13:00-17:00", url: URL_AYCP };
}

function getHireLeytonCou(date) {
	return { date: new Date(date), name: NAME_HIRE_LEYTON, type: TYPE_PLAY, info: "", url: URL_HIRE_LEYTON };
}

function getHireWorthingC(date) {
	return { date: new Date(date), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING };
}

function getSideItOutxxxx(date) {
	return { date: new Date(date), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT };
}

function getFamilyOpenSes(date) {
	return { date: new Date(date), name: NAME_FAMILY_OPEN_PLAY, type: TYPE_PLAY, type1: TYPE_JUNIORS, info: "16:30-18:30", url: URL_FAMILY_OPEN_SESSIONS };
}

function getBeginnersTrai(date) {
	return { date: new Date(date), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "18:45-20:30", url: URL_TRAINING_LEYTON_BEGINNERS };
}

// function getBeginnersTrai(date) {
// 	return { date: new Date(date), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "18:45-20:30", url: URL_TRAINING_LEYTON_BEGINNERS };
// }

function getFlexiTraining(date) {
	return { date: new Date(date), name: NAME_FLEXI_TRAINING, type: TYPE_TRAINING, info: "18:30-22:00", url: URL_FLEXI_TRAINING };
}

function getFlexiTrReduce(date) {
	return { date: new Date(date), name: NAME_FLEXI_TRAINING, type: TYPE_TRAINING, info: "20:15-22:00", url: URL_FLEXI_TRAINING };
}

function getFlexiPlayxxxx(date) {
	return { date: new Date(date), name: NAME_FLEXI_PLAY, type: TYPE_PLAY, info: "18:30-22:00", url: URL_FLEXI_PLAY };
}


var march_events_leyton = [
	// { date: new Date("03/01/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("03/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("03/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("03/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("03/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("03/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("03/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("03/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("03/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	{ date: new Date("03/29/2021"), name: "FREE Side-it-Out", type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	getOpenPlayxxxxx("03/30/2021"),
	getSideItOutxxxx("03/31/2021")
];

var april_events_leyton = [
	getOpenPlayxxxxx("04/01/2021"),
	getAllYouCanPlay("04/02/2021"),
	getAllYouCanPlay("04/03/2021"),
	getAllYouCanPlay("04/04/2021"),
	getAllYouCanPlay("04/05/2021"),
	getOpenPlayxxxxx("04/06/2021"),
	getSideItOutxxxx("04/07/2021"),
	getOpenPlayxxxxx("04/08/2021"),
	getOpenPlayxxxxx("04/09/2021"),
	getAllYouCanPlay("04/10/2021"),
	// { date: new Date("04/11/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getAllYouCanPlay("04/11/2021"),
	getOpenPlayxxxxx("04/12/2021"),
	getOpenPlayxxxxx("04/13/2021"),
	getSideItOutxxxx("04/14/2021"),
	getOpenPlayxxxxx("04/15/2021"),
	getOpenPlayxxxxx("04/16/2021"),
	getAllYouCanPlay("04/17/2021"),
	{ date: new Date("04/18/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SPRING },
	getJuniorTrainin("04/19/2021"),
	getAdultTraining("04/20/2021"),
	getSideItOutxxxx("04/21/2021"),
	getAdultTraining("04/22/2021"),
	getOpenPlayxxxxx("04/23/2021"),
	{ date: new Date("04/24/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN + " 4* (1day)", url: URL_GRAND_PRIX },
	{ date: new Date("04/25/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_WOMEN + " 4* (1day)", url: URL_GRAND_PRIX },
	getJuniorTrainin("04/26/2021"),
	getAdultTraining("04/27/2021"),
	getSideItOutxxxx("04/28/2021"),
	getAdultTraining("04/29/2021"),
	getOpenPlayxxxxx("04/30/2021")
];

var may_events_leyton = [
	{ date: new Date("05/01/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("05/02/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES },
	getAllYouCanPlay("05/02/2021"),
	getJuniorTrainin("05/03/2021"),
	getAllYouCanPlay("05/03/2021"),
	getAdultTraining("05/04/2021"),
	getSideItOutxxxx("05/05/2021"),
	getAdultTraining("05/06/2021"),
	getOpenPlayxxxxx("05/07/2021"),
	getAllYouCanPlay("05/08/2021"),
	{ date: new Date("05/09/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getJuniorTrainin("05/10/2021"),
	getAdultTraining("05/11/2021"),
	getSideItOutxxxx("05/12/2021"),
	getAdultTraining("05/13/2021"),
	getOpenPlayxxxxx("05/14/2021"),
	getAllYouCanPlay("05/15/2021"),
	{ date: new Date("05/16/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES },
	getJuniorTrainin("05/17/2021"),
	getAdultTraining("05/18/2021"),
	getSideItOutxxxx("05/19/2021"),
	getAdultTraining("05/20/2021"),
	getOpenPlayxxxxx("05/21/2021"),
	{ date: new Date("05/22/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2 },
	{ date: new Date("05/23/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0 },
	{ date: new Date("05/23/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getJuniorTrainin("05/24/2021"),
	getAdultTraining("05/25/2021"),
	getSideItOutxxxx("05/26/2021"),
	getAdultTraining("05/27/2021"),
	getOpenPlayxxxxx("05/28/2021"),
	{ date: new Date("05/29/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getAllYouCanPlay("05/29/2021"),
	getAllYouCanPlay("05/30/2021"),
	{ date: new Date("05/31/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "10:00", url: URL_JUNIOR_LEYTON },
	{ date: new Date("05/31/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "12:00-17:00", url: URL_AYCP }
];

var june_events_leyton = [
	getAdultTraining("06/01/2021"),
	getSideItOutxxxx("06/02/2021"),
	getAdultTraining("06/03/2021"),
	getOpenPlayxxxxx("06/04/2021"),
	{ date: new Date("06/05/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getAllYouCanPlay("06/06/2021"),
	getJuniorTrainin("06/07/2021"),
	getAdultTraining("06/08/2021"),
	getSideItOutxxxx("06/09/2021"),
	getAdultTraining("06/10/2021"),
	getOpenPlayxxxxx("06/11/2021"),
	{ date: new Date("06/12/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2 },
	{ date: new Date("06/13/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0 },
	{ date: new Date("06/13/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getJuniorTrainin("06/14/2021"),
	getAdultTraining("06/15/2021"),
	getSideItOutxxxx("06/16/2021"),
	getAdultTraining("06/17/2021"),
	getOpenPlayxxxxx("06/18/2021"),
	getAllYouCanPlay("06/19/2021"),
	{ date: new Date("06/20/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES },
	getJuniorTrainin("06/21/2021"),
	getAdultTraining("06/22/2021"),
	getSideItOutxxxx("06/23/2021"),
	getAdultTraining("06/24/2021"),
	getOpenPlayxxxxx("06/25/2021"),
	{ date: new Date("06/26/2021"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2vs2", url: URL_ALL_NATIONS },
	{ date: new Date("06/27/2021"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2vs2", url: URL_ALL_NATIONS },
	{ date: new Date("06/27/2021"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 2vs2", url: URL_ALL_NATIONS },
	getJuniorTrainin("06/28/2021"),
	getAdultTraining("06/29/2021"),
	getSideItOutxxxx("06/30/2021")
];

var july_events_leyton = [
	getAdultTraining("07/01/2021"),
	getOpenPlayxxxxx("07/02/2021"),
	getAllYouCanPlay("07/03/2021"),
	{ date: new Date("07/04/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getJuniorTrainin("07/05/2021"),
	getAdultTraining("07/06/2021"),
	getSideItOutxxxx("07/07/2021"),
	getAdultTraining("07/08/2021"),
	getOpenPlayxxxxx("07/09/2021"),
	{ date: new Date("07/10/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2 },
	{ date: new Date("07/11/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0 },
	{ date: new Date("07/11/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getJuniorTrainin("07/12/2021"),
	getAdultTraining("07/13/2021"),
	getSideItOutxxxx("07/14/2021"),
	getAdultTraining("07/15/2021"),
	getOpenPlayxxxxx("07/16/2021"),
	getOpenPlayxxxxx("07/17/2021"),
	{ date: new Date("07/18/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getJuniorTrainin("07/19/2021"),
	getBeginnersTrai("07/19/2021"),
	getAdultTraining("07/20/2021"),
	getSideItOutxxxx("07/21/2021"),
	getAdultTraining("07/22/2021"),
	getFamilyOpenSes("07/23/2021"), //F
	{ date: new Date("07/24/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES }, //Sat
	getAllYouCanPlay("07/25/2021"), //Sun
	getJuniorTrainin("07/26/2021"), //M
	getBeginnersTrai("07/26/2021"), //M
	getAdultTraining("07/27/2021"), //T
	getSideItOutxxxx("07/28/2021"), //W
	getAdultTraining("07/29/2021"), //T
	getFamilyOpenSes("07/30/2021"), //F
	getAllYouCanPlay("07/31/2021")  //S 
];

var august_events_leyton = [
	{ date: new Date("08/01/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER }, //Sun
	getJuniorTrainin("08/02/2021"), //Mon
	getBeginnersTrai("08/02/2021"), //Mon
	getFlexiTrReduce("08/02/2021"), //Mon
	getFlexiTraining("08/03/2021"), //Tue
	getFlexiPlayxxxx("08/03/2021"), //Tue
	getSideItOutxxxx("08/04/2021"), //Wed
	getFlexiTrReduce("08/04/2021"), //Wed
	getFlexiTraining("08/05/2021"), //Thu
	getFlexiPlayxxxx("08/05/2021"), //Thu
	getFamilyOpenSes("08/06/2021"), //Fri
	getOpenPlayxxxxx("08/06/2021"), //Fri
	getAllYouCanPlay("08/07/2021"), //Sat
	{ date: new Date("08/08/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 }, //Sun
	getJuniorTrainin("08/09/2021"), //Mon
	getBeginnersTrai("08/09/2021"), //Mon
	getFlexiTrReduce("08/09/2021"), //Mon
	getFlexiTraining("08/10/2021"), //Tue
	getFlexiPlayxxxx("08/10/2021"), //Tue
	getSideItOutxxxx("08/11/2021"), //Wed
	getFlexiTrReduce("08/11/2021"), //Wed
	getFlexiTraining("08/12/2021"), //Thu
	getFlexiPlayxxxx("08/12/2021"), //Thu
	getFamilyOpenSes("08/13/2021"), //Fri
	getOpenPlayxxxxx("08/13/2021"), //Fri
	getAllYouCanPlay("08/14/2021"), //Sat
	{ date: new Date("08/15/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES }, //Sun
	getAllYouCanPlay("08/15/2021"), //Sun
	getJuniorTrainin("08/16/2021"), //Mon
	getBeginnersTrai("08/16/2021"), //Mon
	getFlexiTrReduce("08/16/2021"), //Mon
	getFlexiTraining("08/17/2021"), //Tue
	getFlexiPlayxxxx("08/17/2021"), //Tue
	getSideItOutxxxx("08/18/2021"), //Wed
	getFlexiTrReduce("08/18/2021"), //Wed
	getFlexiTraining("08/19/2021"), //Thu
	getFlexiPlayxxxx("08/19/2021"), //Thu
	getFamilyOpenSes("08/20/2021"), //Fri
	getOpenPlayxxxxx("08/20/2021"), //Fri
	{ date: new Date("08/21/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER }, //Sat
	getAllYouCanPlay("08/22/2021"), //Sun
	getJuniorTrainin("08/23/2021"), //Mon
	getBeginnersTrai("08/23/2021"), //Mon
	getFlexiTrReduce("08/23/2021"), //Mon
	getFlexiTraining("08/24/2021"), //Tue
	getFlexiPlayxxxx("08/24/2021"), //Tue
	getSideItOutxxxx("08/25/2021"), //Wed
	getFlexiTrReduce("08/25/2021"), //Wed
	getFlexiTraining("08/26/2021"), //Thu
	getFlexiPlayxxxx("08/26/2021"), //Thu
	//getFamilyOpenSes("08/27/2021"), //Fri
	{ date: new Date("08/27/2021"), name: NAME_FAMILY_OPEN_PLAY, type: TYPE_PLAY, type1: TYPE_JUNIORS, info: "CANCELLED", url: URL_FAMILY_OPEN_SESSIONS, status: "cancelled" },
	{ date: new Date("08/27/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: "CANCELLED", url: URL_OPEN_PLAY, status: "cancelled" },
	//getOpenPlayxxxxx("08/27/2021"), //Fri
	{ date: new Date("08/28/2021"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" }, //Sat
	{ date: new Date("08/29/2021"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" }, //Sun
	{ date: new Date("08/29/2021"), name: NAME_TENTH_BIRTHDAY, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_TENTH_BIRTHDAY }, //Sun
	{ date: new Date("08/30/2021"), name: NAME_FREE_AYCP, type: TYPE_PLAY, info: "11:30-18:00", url: URL_TEN_YEAR_AYCP }, // Mon
	getBeginnersTrai("08/30/2021"), //Mon
	getFlexiTrReduce("08/30/2021"), //Mon
	getFlexiTraining("08/31/2021"), //Tue
	getFlexiPlayxxxx("08/31/2021")  //Tue
];

var september_events_leyton = [
	getSideItOutxxxx("09/01/2021"), //Wed
	getFlexiTrReduce("09/01/2021"), //Wed
	getFlexiTraining("09/02/2021"), //Thu
	getFlexiPlayxxxx("09/02/2021"), //Thu
	getFamilyOpenSes("09/03/2021"), //Fri
	getOpenPlayxxxxx("09/03/2021"), //Fri
	{ date: new Date("09/04/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER }, //Sat
	getAllYouCanPlay("09/05/2021"), //Sun
	getJuniorTrainin("09/06/2021"), //Mon
	getBeginnersTrai("08/06/2021"), //Mon
	getFlexiTrReduce("08/06/2021"), //Mon
	getFlexiTraining("09/07/2021"), //Tue
	getFlexiPlayxxxx("09/07/2021"), //Tue
	getSideItOutxxxx("09/08/2021"), //Wed
	getFlexiTrReduce("09/08/2021"), //Wed
	getFlexiTraining("09/09/2021"), //Thu
	getFlexiPlayxxxx("09/09/2021"), //Thu
	getFamilyOpenSes("09/10/2021"), //Fri
	getOpenPlayxxxxx("09/10/2021"), //Fri
	getAllYouCanPlay("09/11/2021"), //Sat
	{ date: new Date("09/12/2021"), name: "London Youth Games Beach volleyball tournament", type: TYPE_JUNIORS, info: "<a href=\"https://www.londonyouthgames.org/event/feel-good-too-beach-volleyball-f-m/\">Click to find out more</a>", url: "" }, //Sun
	getJuniorTrainin("09/13/2021"), //Mon
	getBeginnersTrai("08/13/2021"), //Mon
	getFlexiTrReduce("08/13/2021"), //Mon
	getFlexiTraining("09/14/2021"), //Tue
	getFlexiPlayxxxx("09/14/2021"), //Tue
	getSideItOutxxxx("09/15/2021"), //Wed
	getFlexiTrReduce("09/15/2021"), //Wed
	getFlexiTraining("09/16/2021"), //Thu
	getFlexiPlayxxxx("09/16/2021"), //Thu
	getFamilyOpenSes("09/17/2021"), //Fri
	getOpenPlayxxxxx("09/17/2021"), //Fri
	{ date: new Date("09/18/2021"), name: "Polonia's \"One more beach tournament\"", type: TYPE_TOURNAMENT, info: "", url: URL_POLONIA }, //Sat
	getAllYouCanPlay("09/19/2021"), //Sun
	getJuniorTrainin("09/20/2021"), //Mon
	getBeginnersTrai("08/20/2021"), //Mon
	getFlexiTrReduce("08/20/2021"), //Mon
	getFlexiTraining("09/21/2021"), //Tue
	getFlexiPlayxxxx("09/21/2021"), //Tue
	getSideItOutxxxx("09/22/2021"), //Wed
	getFlexiTrReduce("09/22/2021"), //Wed
	getFlexiTraining("09/23/2021"), //Thu
	getFlexiPlayxxxx("09/23/2021"), //Thu
	getFamilyOpenSes("09/24/2021"), //Fri
	getOpenPlayxxxxx("09/24/2021"), //Fri
	getAllYouCanPlay("09/25/2021"), //Sat
	{ date: new Date("09/25/2021"), name: "End of season party", type: "", info: "", url: "" }, //Sat
	getAllYouCanPlay("09/26/2021"), //Sun
	getJuniorTrainin("09/27/2021"), //Mon
	getBeginnersTrai("08/27/2021"), //Mon
	getFlexiTrReduce("08/27/2021"), //Mon
	getFlexiTraining("09/28/2021"), //Tue
	getFlexiPlayxxxx("09/28/2021"), //Tue
	getSideItOutxxxx("09/29/2021"), //Wed
	getFlexiTrReduce("09/29/2021"), //Wed
	getFlexiTraining("09/30/2021"), //Thu
	getFlexiPlayxxxx("09/30/2021")  //Thu
];

var october_events_leyton = [
	// { date: new Date("04/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("04/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
	// { date: new Date("04/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("04/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("04/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	// { date: new Date("04/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }

];

var november_events_leyton = [
	// { date: new Date("04/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("04/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
	// { date: new Date("04/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("04/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("04/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	// { date: new Date("04/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }
];

var december_events_leyton = [
	// { date: new Date("04/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("04/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
	// { date: new Date("04/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("04/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("04/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	// { date: new Date("04/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }
];

//WOTHRING
var january_events_worthing = [
	{ date: new Date("01/16/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("01/23/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("01/30/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }
];

var february_events_worthing = [
	{ date: new Date("02/06/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("02/13/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("02/20/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("02/27/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }
];

var march_events_worthing = [
	{ date: new Date("03/06/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("03/13/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	{ date: new Date("03/20/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }
];

var april_events_worthing = [
	getHireWorthingC("04/01/2021"),
	getHireWorthingC("04/02/2021"),
	getHireWorthingC("04/03/2021"),
	getWorthingAllYouCanPlay("04/04/2021"),
	getHireWorthingC("04/05/2021"),
	getHireWorthingC("04/06/2021"),
	getHireWorthingC("04/07/2021"),
	getHireWorthingC("04/08/2021"),
	getHireWorthingC("04/09/2021"),
	getHireWorthingC("04/10/2021"),
	// { date: new Date("04/10/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getWorthingAllYouCanPlay("04/11/2021"),
	getHireWorthingC("04/12/2021"),
	getHireWorthingC("04/13/2021"),
	getHireWorthingC("04/14/2021"),
	getHireWorthingC("04/15/2021"),
	getHireWorthingC("04/16/2021"),
	getHireWorthingC("04/17/2021"),
	getWorthingAllYouCanPlay("04/18/2021"),
	getHireWorthingC("04/19/2021"),
	getHireWorthingC("04/20/2021"),
	getHireWorthingC("04/21/2021"),
	getHireWorthingC("04/22/2021"),
	getHireWorthingC("04/23/2021"),
	{ date: new Date("04/24/2021"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	getWorthingAllYouCanPlay("04/25/2021"),
	getHireWorthingC("04/26/2021"),
	getHireWorthingC("04/27/2021"),
	getHireWorthingC("04/28/2021"),
	getHireWorthingC("04/29/2021"),
	getHireWorthingC("04/30/2021")
];

var may_events_worthing = [
	getHireWorthingC("05/01/2021"),
	getWorthingAllYouCanPlay("05/02/2021"),
	getWorthingAllYouCanPlay("05/03/2021"),
	getHireWorthingC("05/04/2021"),
	getHireWorthingC("05/05/2021"),
	getHireWorthingC("05/06/2021"),
	getHireWorthingC("05/07/2021"),
	{ date: new Date("05/08/2021"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_WOMEN + " 4* (1day)", url: URL_GRAND_PRIX },
	{ date: new Date("05/09/2021"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_MEN + " 4* (1day)", url: URL_GRAND_PRIX },
	getHireWorthingC("05/10/2021"),
	getHireWorthingC("05/11/2021"),
	getHireWorthingC("05/12/2021"),
	getHireWorthingC("05/13/2021"),
	getHireWorthingC("05/14/2021"),
	{ date: new Date("05/15/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getWorthingAllYouCanPlay("05/16/2021"),
	getHireWorthingC("05/17/2021"),
	getHireWorthingC("05/18/2021"),
	getHireWorthingC("05/19/2021"),
	getHireWorthingC("05/20/2021"),
	getHireWorthingC("05/21/2021"),
	getHireWorthingC("05/22/2021"),
	getWorthingAllYouCanPlay("05/23/2021"),
	getHireWorthingC("05/24/2021"),
	getHireWorthingC("05/25/2021"),
	getHireWorthingC("05/26/2021"),
	getHireWorthingC("05/27/2021"),
	getHireWorthingC("05/28/2021"),
	getHireWorthingC("05/29/2021"),
	{ date: new Date("05/30/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getWorthingAllYouCanPlay("05/31/2021")
];

var june_events_worthing = [
	getHireWorthingC("06/01/2021"),
	getHireWorthingC("06/02/2021"),
	getHireWorthingC("06/03/2021"),
	getHireWorthingC("06/04/2021"),
	getHireWorthingC("06/05/2021"),
	getWorthingAllYouCanPlay("06/06/2021"),
	getHireWorthingC("06/07/2021"),
	getHireWorthingC("06/08/2021"),
	getHireWorthingC("06/09/2021"),
	getHireWorthingC("06/10/2021"),
	getHireWorthingC("06/11/2021"),
	getHireWorthingC("06/12/2021"),
	getWorthingAllYouCanPlay("06/13/2021"),
	getHireWorthingC("06/14/2021"),
	getHireWorthingC("06/15/2021"),
	getHireWorthingC("06/16/2021"),
	getHireWorthingC("06/17/2021"),
	getHireWorthingC("06/18/2021"),
	{ date: new Date("06/19/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getWorthingAllYouCanPlay("06/20/2021"),
	getHireWorthingC("06/21/2021"),
	getHireWorthingC("06/22/2021"),
	getHireWorthingC("06/23/2021"),
	getHireWorthingC("06/24/2021"),
	getHireWorthingC("06/25/2021"),
	getWorthingJuniorTrainin("06/26/2021"),
	getHireWorthingC("06/26/2021"),
	getWorthingAllYouCanPlay("06/27/2021"),
	getHireWorthingC("06/28/2021"),
	getHireWorthingC("06/29/2021"),
	getHireWorthingC("06/30/2021")
];

var july_events_worthing = [
	getHireWorthingC("07/01/2021"),
	getHireWorthingC("07/02/2021"),
	getHireWorthingC("07/03/2021"),
	getWorthingAllYouCanPlay("07/04/2021"),
	getHireWorthingC("07/05/2021"),
	getHireWorthingC("07/06/2021"),
	getHireWorthingC("07/07/2021"),
	getHireWorthingC("07/08/2021"),
	getHireWorthingC("07/09/2021"),
	getHireWorthingC("07/10/2021"),
	getWorthingAllYouCanPlay("07/11/2021"),
	getHireWorthingC("07/12/2021"),
	getHireWorthingC("07/13/2021"),
	getHireWorthingC("07/14/2021"),
	getHireWorthingC("07/15/2021"),
	getHireWorthingC("07/16/2021"),
	{ date: new Date("07/17/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getWorthingAllYouCanPlay("07/18/2021"),
	getHireWorthingC("07/19/2021"),
	getHireWorthingC("07/20/2021"),
	getHireWorthingC("07/21/2021"),
	getHireWorthingC("07/22/2021"),
	getHireWorthingC("07/23/2021"),
	{ date: new Date("07/24/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getWorthingAllYouCanPlay("07/25/2021"),
	getHireWorthingC("07/26/2021"),
	getHireWorthingC("07/27/2021"),
	getHireWorthingC("07/28/2021"),
	getHireWorthingC("07/29/2021"),
	getHireWorthingC("07/30/2021"),
	getHireWorthingC("07/31/2021"),
	getWorthingJuniorTrainin("07/31/2021")
];

var august_events_worthing = [
	getWorthingAllYouCanPlay("08/01/2021"),
	getHireWorthingC("08/02/2021"),
	getHireWorthingC("08/03/2021"),
	getHireWorthingC("08/04/2021"),
	getHireWorthingC("08/05/2021"),
	getHireWorthingC("08/06/2021"),
	{ date: new Date("08/07/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getWorthingAllYouCanPlay("08/08/2021"),
	getHireWorthingC("08/09/2021"),
	getHireWorthingC("08/10/2021"),
	getHireWorthingC("08/11/2021"),
	getHireWorthingC("08/12/2021"),
	getHireWorthingC("08/13/2021"),
	//getHireWorthingC("08/14/2021"),
	getWorthingJuniorTrainin("08/14/2021"),
	{ date: new Date("08/14/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getWorthingAllYouCanPlay("08/15/2021"),
	getHireWorthingC("08/16/2021"),
	getHireWorthingC("08/17/2021"),
	getHireWorthingC("08/18/2021"),
	getHireWorthingC("08/19/2021"),
	getHireWorthingC("08/20/2021"),
	getHireWorthingC("08/21/2021"),
	getWorthingJuniorTrainin("08/21/2021"),
	getWorthingAllYouCanPlay("08/22/2021"),
	getHireWorthingC("08/23/2021"),
	getHireWorthingC("08/24/2021"),
	getHireWorthingC("08/25/2021"),
	getHireWorthingC("08/26/2021"),
	getHireWorthingC("08/27/2021"),
	getHireWorthingC("08/28/2021"),
	getWorthingJuniorTrainin("08/28/2021"),
	{ date: new Date("08/29/2021"), name: NAME_FREE_AYCP, type: TYPE_PLAY, info: "09:00-13:00 & 13:00-17:00", url: URL_AYCP }, // Sun
	getHireWorthingC("08/30/2021"),
	getHireWorthingC("08/31/2021")
];

var september_events_worthing = [
	getHireWorthingC("09/01/2021"),
	getHireWorthingC("09/02/2021"),
	getHireWorthingC("09/03/2021"),
	getHireWorthingC("09/04/2021"),
	getWorthingJuniorTrainin("09/04/2021"),
	getWorthingAllYouCanPlay("09/05/2021"),
	getHireWorthingC("09/06/2021"),
	getHireWorthingC("09/07/2021"),
	getHireWorthingC("09/08/2021"),
	getHireWorthingC("09/09/2021"),
	getHireWorthingC("09/10/2021"),
	getHireWorthingC("09/11/2021"),
	getWorthingJuniorTrainin("09/11/2021"),
	getWorthingAllYouCanPlay("09/12/2021"),
	getHireWorthingC("09/13/2021"),
	getHireWorthingC("09/14/2021"),
	getHireWorthingC("09/15/2021"),
	getHireWorthingC("09/16/2021"),
	getHireWorthingC("09/17/2021"),
	getHireWorthingC("09/18/2021"),
	getWorthingJuniorTrainin("09/18/2021"),
	{ date: new Date("09/19/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getHireWorthingC("09/20/2021"),
	getHireWorthingC("09/21/2021"),
	getHireWorthingC("09/22/2021"),
	getHireWorthingC("09/23/2021"),
	getHireWorthingC("09/24/2021"),
	getHireWorthingC("09/25/2021"),
	getWorthingJuniorTrainin("09/25/2021"),
	{ date: new Date("09/26/2021"), name: "End of season party", type: "", info: "", url: "" },
	getHireWorthingC("09/27/2021"),
	getHireWorthingC("09/28/2021"),
	getHireWorthingC("09/29/2021"),
	getHireWorthingC("09/30/2021")
];

var october_events_worthing = [
	// { date: new Date("10/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("10/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("10/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("10/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("10/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
	// { date: new Date("10/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("10/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("10/17/2021"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	// { date: new Date("10/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("10/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("10/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("10/24/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("10/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("10/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("10/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("10/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	// { date: new Date("10/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("10/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("10/31/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }

];

var november_events_worthing = [
	// { date: new Date("11/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("11/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("11/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("11/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("11/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
	// { date: new Date("11/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	{ date: new Date("11/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("11/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("11/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("11/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("11/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("11/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("11/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("11/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("11/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("11/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("11/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("11/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("11/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	{ date: new Date("11/28/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }
	// { date: new Date("11/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("11/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }
];

var december_events_worthing = [
	// { date: new Date("04/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("04/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("12/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("04/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	// { date: new Date("04/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/10/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/11/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("12/12/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP },
	// { date: new Date("04/13/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/14/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/17/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	// { date: new Date("04/18/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("12/19/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP_WINTER, url: URL_AYCP }
	// { date: new Date("04/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/22/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("04/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/27/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	// { date: new Date("04/28/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	// { date: new Date("04/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("04/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }
];

var INDEX_NEXT_EVENTS_HEADER = '<div><h2>BEACH</h2></div>';

var INDEX_EVENT_DIV = '\
<div class="event-wrap d-flex flex-wrap justify-content-between" style="margin-top: 10px;">\
	<div class="event-content-wrap">\
		<header class="entry-header d-flex flex-wrap align-items-center">\
			<h3 class="entry-title w-100 m-0">$EVENT_TITLE$</h3>\
			<div class="posted-date">\
				<p>$DATE$</p>\
			</div>\
		</header>\
	</div>\
</div>';

var INDEX_MORE_EVENTS_DIV = '\
<div class="event-wrap d-flex flex-wrap justify-content-between" style="margin-top: 10px;">\
	<div class="event-content-wrap">\
		<header class="entry-header d-flex flex-wrap align-items-center">\
			<div>\
			<a style="color:red;" href=$URL$>More events...</a>\
			</div>\
		</header>\
	</div>\
</div>';

function getEventColor(eventName) {
	var color;

	switch (eventName) {
		case NAME_AYCP:
			color = COLOR_AYCP;
			break;
		case NAME_FREE_AYCP:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_GRAND_SLAM:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_GRAND_SLAM:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_TENTH_BIRTHDAY:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_SPRING:
			color = COLOR_SPRING;
			break;
		case NAME_SUMMER:
			color = COLOR_SUMMER;
			break;
		case NAME_ALL_NATIONS:
			color = COLOR_ALL_NATIONS;
			break;
		case NAME_CHALLENGER:
			color = COLOR_CHALLENGER;
			break;
		case NAME_GRAND_PRIX:
			color = COLOR_GRAND_PRIX;
			break;
		case NAME_LONDON_FINALS:
			color = COLOR_LONDON_FINALS;
			break;
		case NAME_CEV:
			color = COLOR_CEV;
			break;
		case NAME_SIDE_IT_OUT:
			color = COLOR_SIDE_IT_OUT;
			break;
		case NAME_OPEN_PLAY:
			color = COLOR_OPEN_PLAY;
			break;

		default:
			color = COLOR_DEFAULT;
	}
}