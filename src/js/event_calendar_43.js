//LOGGING LEVEL
var LOG_LEVEL_NONE = "NONE";
var LOG_LEVEL_ERROR = "ERROR";
var LOG_LEVEL_INFO = "INFO";
var LOG_LEVEL_DEGUB = "DEBUG";
var LOGGER_LEVEL = LOG_LEVEL_NONE;

//INFO
var INFO_MEN_N_WOMEN = "M&W";
var INFO_MEN = "Men";
var INFO_WOMEN = "Women";
var INFO_MIXED = "Mixed";

//TOURNAMENT NAMEs
var NAME_AYCP = "AYCP";
var NAME_SIDE_IT_OUT = "Side-it-Out";
var NAME_HIRE_WORTHING = "Available for court hire";
var NAME_HIRE_LEYTON = "Available for court hire";
var NAME_OPEN_PLAY = "Open Play";
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

//TOURNAMENT TYPES
var TYPE_TOURNAMENT = "Tournament";
var TYPE_PLAY = "Play";
var TYPE_TRAINING = "Training";
var TYPE_JUNIORS = "Juniors";

//EVENT LINKS
var URL_MIX_N_MATCH = "tournaments/mixnmatch.html";
var URL_KING_QUEEN = "tournaments/king-queen-court.html";
var URL_AYCP = "play/all-you-can-play.html";
var URL_OPEN_PLAY = "play/open-play.html";
var URL_INDOOR_ON_THE_BEACH = "indoor-on-the-beach.html";
var URL_SIDE_IT_OUT = "play/side-it-out.html";
var URL_WILSON = "tournaments/ukbt-wilson-championships.html";
var URL_WILSON_FINALS = "tournaments/ukbt-wilson-championships-finals.html";
var URL_WILSON_QUALIFIERS = "tournaments/ukbt-wilson-qualifiers.html";
var URL_HIRE_LEYTON = "book-a-court-leyton.html";
var URL_HIRE_WORTHING = "book-a-court-worthing.html";
var URL_SPRING = "tournaments/spring-tourney.html";
var URL_SUMMER = "tournaments/summer-series.html";
var URL_MIXED_SERIES = "tournaments/sideout-mixed-series.html";
var URL_ALL_NATIONS = "tournaments/all-nations.html";
var URL_CEV = "cev-continental-cup.html";
var URL_CHALLENGER = "tournaments/challenger-series.html";
var URL_GRAND_PRIX = "tournaments/grand-prix.html";
var URL_LONDON_FINALS = "london-finals.html";
var URL_TRAINING_LEYTON = "training-leyton.html";
var URL_TRAINING_WORTHING = "training-worthing.html";
var URL_POLONIA = "tournaments/poloniasOneMoreBeachTournie.html";
var URL_UNDER_18 = "tournaments/junior-series.html"
var URL_JUNIOR_LEYTON = "juniors-leyton.html"
var URL_JUNIOR_WORTHING = "juniors-wothing.html"

//INFO
// var INFO_OPEN_PLAY = "18:00-22:00, £10 per person (£5 for Club members, FREE with Social, Open Group or Private Group add-on), No need to register"
var INFO_OPEN_PLAY = "18:30-22:00";
var INFO_AYCP = "10:00-17:00";
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

var gsDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
	getAdultTraining("07/20/2021"),
	getSideItOutxxxx("07/21/2021"),
	getAdultTraining("07/22/2021"),
	getOpenPlayxxxxx("07/23/2021"),
	{ date: new Date("07/24/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES },
	getAllYouCanPlay("07/24/2021"),
	getAllYouCanPlay("07/25/2021"),
	getJuniorTrainin("07/26/2021"),
	getAdultTraining("07/27/2021"),
	getSideItOutxxxx("07/28/2021"),
	getAdultTraining("07/29/2021"),
	getOpenPlayxxxxx("07/30/2021"),
	getAllYouCanPlay("07/31/2021")
];

var august_events_leyton = [
	{ date: new Date("08/01/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getJuniorTrainin("08/02/2021"),
	// getHireLeytonCou("08/03/2021"),
	getSideItOutxxxx("08/04/2021"),
	// getHireLeytonCou("08/05/2021"),
	// getHireLeytonCou("08/06/2021"),
	getAllYouCanPlay("08/07/2021"),
	{ date: new Date("08/08/2021"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 },
	getJuniorTrainin("08/09/2021"),
	// getHireLeytonCou("08/10/2021"),
	getSideItOutxxxx("08/11/2021"),
	// getHireLeytonCou("08/12/2021"),
	// getHireLeytonCou("08/13/2021"),
	getAllYouCanPlay("08/14/2021"),
	{ date: new Date("08/15/2021"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1*", url: URL_MIXED_SERIES },
	getAllYouCanPlay("08/15/2021"),
	getJuniorTrainin("08/16/2021"),
	// getHireLeytonCou("08/17/2021"),
	getSideItOutxxxx("08/18/2021"),
	// getHireLeytonCou("08/19/2021"),
	// getHireLeytonCou("08/20/2021"),
	{ date: new Date("08/21/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getAllYouCanPlay("08/22/2021"),
	getJuniorTrainin("08/23/2021"),
	// getHireLeytonCou("08/24/2021"),
	getSideItOutxxxx("08/25/2021"),
	// getHireLeytonCou("08/26/2021"),
	// getHireLeytonCou("08/27/2021"),
	{ date: new Date("08/28/2021"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" },
	{ date: new Date("08/29/2021"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" },
	{ date: new Date("08/29/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getAllYouCanPlay("08/30/2021"),
	// getHireLeytonCou("08/31/2021")
];

var september_events_leyton = [
	getSideItOutxxxx("09/01/2021"),
	// getHireLeytonCou("09/02/2021"),
	// getHireLeytonCou("09/03/2021"),
	{ date: new Date("09/04/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getAllYouCanPlay("09/05/2021"),
	getJuniorTrainin("09/06/2021"),
	// getHireLeytonCou("09/07/2021"),
	getSideItOutxxxx("09/08/2021"),
	// getHireLeytonCou("09/09/2021"),
	// getHireLeytonCou("09/10/2021"),
	getAllYouCanPlay("09/11/2021"),
	getAllYouCanPlay("09/12/2021"),
	getJuniorTrainin("09/13/2021"),
	// getHireLeytonCou("09/14/2021"),
	getSideItOutxxxx("09/15/2021"),
	// getHireLeytonCou("09/16/2021"),
	// getHireLeytonCou("09/17/2021"),
	{ date: new Date("09/18/2021"), name: "Polonia's \"One more beach tournament\"", type: TYPE_TOURNAMENT, info: "", url: URL_POLONIA },
	getAllYouCanPlay("09/19/2021"),
	getJuniorTrainin("09/20/2021"),
	// getHireLeytonCou("09/21/2021"),
	getSideItOutxxxx("09/22/2021"),
	// getHireLeytonCou("09/23/2021"),
	// getHireLeytonCou("09/24/2021"),
	getAllYouCanPlay("09/25/2021"),
	{ date: new Date("09/25/2021"), name: "End of season party", type: "", info: "", url: "" },
	// getHireLeytonCou("09/26/2021"),
	getJuniorTrainin("09/27/2021"),
	// getHireLeytonCou("09/28/2021"),
	getSideItOutxxxx("09/29/2021"),
	// getHireLeytonCou("09/30/2021")
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
var march_events_worthing = [
	{ date: new Date("03/29/2021"), name: "FREE Open Play", type: TYPE_PLAY, info: "", url: URL_OPEN_PLAY },
	getHireWorthingC("03/30/2021"),
	getHireWorthingC("03/31/2021"),
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
	getHireWorthingC("07/31/2021")
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
	getHireWorthingC("08/14/2021"),
	getWorthingAllYouCanPlay("08/15/2021"),
	getHireWorthingC("08/16/2021"),
	getHireWorthingC("08/17/2021"),
	getHireWorthingC("08/18/2021"),
	getHireWorthingC("08/19/2021"),
	getHireWorthingC("08/20/2021"),
	getHireWorthingC("08/21/2021"),
	getWorthingAllYouCanPlay("08/22/2021"),
	getHireWorthingC("08/23/2021"),
	getHireWorthingC("08/24/2021"),
	getHireWorthingC("08/25/2021"),
	getHireWorthingC("08/26/2021"),
	getHireWorthingC("08/27/2021"),
	getHireWorthingC("08/28/2021"),
	getHireWorthingC("08/29/2021"),
	getHireWorthingC("08/30/2021"),
	getHireWorthingC("08/31/2021")
];

var september_events_worthing = [
	getHireWorthingC("09/01/2021"),
	getHireWorthingC("09/02/2021"),
	getHireWorthingC("09/03/2021"),
	getHireWorthingC("09/04/2021"),
	getWorthingAllYouCanPlay("09/05/2021"),
	getHireWorthingC("09/06/2021"),
	getHireWorthingC("09/07/2021"),
	getHireWorthingC("09/08/2021"),
	getHireWorthingC("09/09/2021"),
	getHireWorthingC("09/10/2021"),
	getHireWorthingC("09/11/2021"),
	getWorthingAllYouCanPlay("09/12/2021"),
	getHireWorthingC("09/13/2021"),
	getHireWorthingC("09/14/2021"),
	getHireWorthingC("09/15/2021"),
	getHireWorthingC("09/16/2021"),
	getHireWorthingC("09/17/2021"),
	getHireWorthingC("09/18/2021"),
	{ date: new Date("09/19/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getHireWorthingC("09/20/2021"),
	getHireWorthingC("09/21/2021"),
	getHireWorthingC("09/22/2021"),
	getHireWorthingC("09/23/2021"),
	getHireWorthingC("09/24/2021"),
	getHireWorthingC("09/25/2021"),
	{ date: new Date("09/26/2021"), name: "End of season party", type: "", info: "", url: "" },
	getHireWorthingC("09/27/2021"),
	getHireWorthingC("09/28/2021"),
	getHireWorthingC("09/29/2021"),
	getHireWorthingC("09/30/2021")
];

var october_events_worthing = [
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

var november_events_worthing = [
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

var december_events_worthing = [
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


var TABLE_HEADER =
	'<table>\
	<thead>\
		<tr class="row100 head">\
			<th class="cell100 column1X">Date</th>\
			<th class="cell100 columnX">Event Name</th>\
			<th class="cell100 columnX">Event Type</th>\
			<th class="cell100 columnX">Info</th>\
		</tr>\
	</thead>\
</table>';

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

function logger(level, event) {
	if (LOGGER_LEVEL == level) {
		console.log(event);
	}
}

//index page
function indexRenderNextEvents(eventList, beach, htmlElementId, eventsCounter) {

	if (eventsCounter == 3) {
		return 3;
	}
	logger(LOG_LEVEL_DEGUB, "renderNextEvents");

	var eventCalendarIndex;
	var eventDiv = document.getElementById(htmlElementId);

	if (eventsCounter == 0) {
		eventDiv.innerHTML = INDEX_NEXT_EVENTS_HEADER.replace("BEACH", beach);
	}

	for (eventCalendarIndex = 0; eventCalendarIndex < eventList.length; eventCalendarIndex++) {

		var eventType = eventList[eventCalendarIndex].type;

		if ((eventType == TYPE_PLAY
			|| eventType == TYPE_TOURNAMENT
			|| eventType == TYPE_JUNIORS)
			&& eventsCounter < 3) {

			var eventName = eventList[eventCalendarIndex].name;
			var eventDate = eventList[eventCalendarIndex].date;
			var eventUrl = eventList[eventCalendarIndex].url;
			var today = new Date();

			var thisDate = new Date(eventDate);

			if (thisDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var elementEventTitle = '';
				var hasEventUniqueUrl = eventUrl !== "";
				if (hasEventUniqueUrl) {
					elementEventTitle = '<a style="color:red;" href=' + eventUrl + '>' + eventName + '</a>';
				} else {
					elementEventTitle = '<p style="font-size: 18px;font-weight: 600;">' + eventName + '</p>';
				}

				var elementEventDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year;
				var htmlEvent = INDEX_EVENT_DIV.replace('$EVENT_TITLE$', elementEventTitle);
				console.log(htmlEvent);
				htmlEvent = htmlEvent.replace("$DATE$", elementEventDate);

				var eventLog = "Event: " + eventName + " Month: " + months[monthInt] + " DIV: " + htmlEvent;
				logger(LOG_LEVEL_DEGUB, eventLog);

				eventsCounter++;
				eventDiv.innerHTML += htmlEvent;
			}

		}
	}

	return eventsCounter;
}

function moreEventsComingSoon(beach, elementId, eventsCounter) {

	var eventDiv = document.getElementById(elementId);

	if (eventsCounter == 0) {
		eventDiv.innerHTML = '\
			<div class="section-heading">\
				<h2 class="entry-title">' + beach + '</h2>\
				<p>More events are coming soon </p>\
			</div>';
	}
}

function moreEventsInCalendar(elementId, eventsCounter, url) {
	if (eventsCounter > 0) {
		var eventDiv = document.getElementById(elementId);
		var htmlEvent = INDEX_MORE_EVENTS_DIV.replace('$URL$', url);
		eventDiv.innerHTML += htmlEvent;
	}
}

//calendar pages
function renderMonthTable(beachName, eventList, elementId, filter, dateCheck, monthName) {

	var i;
	var tableEventContent = "";
	var hasThisMonthEvents = false;

	for (i = 0; i < eventList.length; i++) {

		var eventType = eventList[i].type;


		if (filter == 'display-all' || filter == eventType) {

			var eventName = eventList[i].name;
			var eventInfo = eventList[i].info;
			var eventDate = eventList[i].date;
			var eventUrl = eventList[i].url;

			//dateCheck here if is in the future
			var today = new Date();
			var thisDate = new Date(eventDate);
			var appendEvent = true;

			var isAPastTournament = false;
			if (thisDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
				isAPastTournament = true;
				//console.log(element.name + ":" + "oncoming");
			}

			if (dateCheck && isAPastTournament) {
				appendEvent = false;
			}

			if (appendEvent) {
				hasThisMonthEvents = true;
				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var color;

				switch (eventName) {
					case NAME_AYCP:
						color = COLOR_AYCP;
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

				tableEventContent += "<tr class=\"row100 body\">\
      			<td class=\"cell100 column1X\">" + gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year + "</td>";

				if (eventUrl !== "") {
					tableEventContent += "<td class=\"cell100 columnX\"><a style=\"color:" + color + "\" href=" + eventUrl + ">" + eventName + "</a></td>";
				} else {
					tableEventContent += "<td class=\"cell100 columnX\">" + eventName + "</td>";
				}
				tableEventContent += "\
      			<td class=\"cell100 columnX\">" + eventType + "</td>\
      			<td class=\"cell100 columnX\">" + eventInfo + "</td></tr>";
				//console.log(text);
			}
		}
	}
	//console.log("has events?" + hasThisMonthEvents);

	var tableContent = "";
	if (hasThisMonthEvents) {
		tableContent = "<h2 class=\"entry-title\" style=\"font-weight:bold;\">" + monthName + " at " + beachName + " Beach</h2>\
		<div class=\"table100 ver2 m-b-20\">\
			<div class=\"table100-head\">" + TABLE_HEADER + "</div>\
			<div class=\"table100-body\">" + "<table><tbody>" + tableEventContent + "</tbody></table>\
			</div>\
		</div>"


	}
	return tableContent;
}

function filterButtons(filter) {

	//btn gradient-bg - btn red-border 

	var buttonAll = "btn red-border";
	var buttonTournament = "btn red-border";
	var buttonPlay = "btn red-border";
	var buttonTraining = "btn red-border";
	var buttonJuniors = "btn red-border";

	switch (filter) {
		case TYPE_TOURNAMENT:
			buttonTournament = "btn gradient-bg";
			break;
		case TYPE_PLAY:
			buttonPlay = "btn gradient-bg";
			break;
		case TYPE_TRAINING:
			buttonTraining = "btn gradient-bg";
			break;
		case TYPE_JUNIORS:
			buttonJuniors = "btn gradient-bg";
			break;
		default:
			buttonAll = "btn gradient-bg";
	}

	document.getElementById('filter-buttons').innerHTML =
		"<a onclick=\"eventController('display-all',true)\" href=\"#\" style='width: 160px' class=\" " + buttonAll + " \">All Events</a>\
    <a onclick=\"eventController('Tournament',true)\" href=\"#\" style='width: 190px' class=\" " + buttonTournament + " \">Tournaments</a>\
    <a onclick=\"eventController('Play',true)\" href=\"#\" style='width: 190px' class=\" " + buttonPlay + " \">Play</a>\
    <a onclick=\"eventController('Training',true)\" href=\"#\" style='width: 190px' class=\" " + buttonTraining + " \">Training</a>\
	<a onclick=\"eventController('Juniors',true)\" href=\"#\" style='width: 190px' class=\" " + buttonJuniors + " \">Juniors</a>";
}

function eventController(filter, dateFilter) {

	filterButtons(filter);
	var url = window.location.href;
	var isleyton = url.includes("calendar-leyton");

	if (isleyton) {
		var tables = "";
		tables += renderMonthTable("Leyton", march_events_leyton, 'march-table', filter, dateFilter, "March");
		tables += renderMonthTable("Leyton", april_events_leyton, 'april-table', filter, dateFilter, "April");
		tables += renderMonthTable("Leyton", may_events_leyton, 'may-table', filter, dateFilter, "May");
		tables += renderMonthTable("Leyton", june_events_leyton, 'june-table', filter, dateFilter, "June");
		tables += renderMonthTable("Leyton", july_events_leyton, 'july-table', filter, dateFilter, "July");
		tables += renderMonthTable("Leyton", august_events_leyton, 'august-table', filter, dateFilter, "August");
		tables += renderMonthTable("Leyton", september_events_leyton, 'september-table', filter, dateFilter, "September");
		tables += renderMonthTable("Leyton", october_events_leyton, 'october-table', filter, dateFilter, "October");
		tables += renderMonthTable("Leyton", november_events_leyton, 'november-table', filter, dateFilter, "November");
		tables += renderMonthTable("Leyton", december_events_leyton, 'december-table', filter, dateFilter, "December");

		if (tables == "") {
			tables = "<p>More events are coming soon </p>"
		}
		document.getElementById('calendar-tables').innerHTML = tables;
	} else {
		var tables = "";
		tables += renderMonthTable("Worthing", march_events_worthing, 'march-table', filter, dateFilter, "March");
		tables += renderMonthTable("Worthing", april_events_worthing, 'april-table', filter, dateFilter, "April");
		tables += renderMonthTable("Worthing", may_events_worthing, 'may-table', filter, dateFilter, "May");
		tables += renderMonthTable("Worthing", june_events_worthing, 'june-table', filter, dateFilter, "June");
		tables += renderMonthTable("Worthing", july_events_worthing, 'july-table', filter, dateFilter, "July");
		tables += renderMonthTable("Worthing", august_events_worthing, 'august-table', filter, dateFilter, "August");
		tables += renderMonthTable("Worthing", september_events_worthing, 'september-table', filter, dateFilter, "September");
		tables += renderMonthTable("Worthing", october_events_worthing, 'october-table', filter, dateFilter, "October");
		tables += renderMonthTable("Worthing", november_events_worthing, 'november-table', filter, dateFilter, "November");
		tables += renderMonthTable("Worthing", december_events_worthing, 'december-table', filter, dateFilter, "December");

		if (tables == "") {
			tables = "<p>More events are coming soon </p>"
		}
		document.getElementById('calendar-tables').innerHTML = tables;
	}
}

//tournament pages display event dates
function renderFutureTournamentDays(eventList, tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	console.log("renderNextEvents");
	var i;
	var eventDiv = '';

	for (i = 0; i < eventList.length; i++) {

		var eventName = eventList[i].name;

		if (eventName == tournamentName || eventName == finalsTournamentName) {

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var eventInfo = eventList[i].info;
			var twoDaysTournament = eventList[i].daysOfTournament;
			var today = new Date();
			var thisDate = new Date(eventDate);

			if (thisDate > today) {

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var shouldTournamentBePrinted = true;

				var printedDate = '';
				if (twoDaysTournament === 1 || typeof twoDaysTournament == 'undefined') {
					printedDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year;
				}

				if (twoDaysTournament === 0) {
					shouldTournamentBePrinted = false;
				}

				if (twoDaysTournament === 2) {
					var day = 60 * 60 * 24 * 1000;
					var thisDatePlusOneDay = new Date(thisDate.getTime() + day);

					var dayOfWeekIntPlusOne = thisDatePlusOneDay.getDay();
					var dayIntPlusOne = thisDatePlusOneDay.getDate();
					var monthIntPlusOne = thisDatePlusOneDay.getMonth();
					var yearPlusOne = thisDatePlusOneDay.getFullYear();
					printedDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " & " + gsDayNames[dayOfWeekIntPlusOne] + " " + dayIntPlusOne + " " + months[monthIntPlusOne] + " " + year;
				}

				// var infoHtml = '';
				if (isPrintInfoEnabled) {
					// infoHtml = " - " + eventInfo;
					printedDate += " - " + eventInfo;
				}


				if (shouldTournamentBePrinted) {
					var htmlEvent = '<li>' + printedDate + '</li>';

					eventDiv += htmlEvent;
				}

			}
		}
	}
	return eventDiv;
}

function renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var march = renderFutureTournamentDays(march_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var april = renderFutureTournamentDays(april_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var may = renderFutureTournamentDays(may_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var june = renderFutureTournamentDays(june_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var july = renderFutureTournamentDays(july_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var august = renderFutureTournamentDays(august_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var september = renderFutureTournamentDays(september_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);

	var leyton = march + april + may + june + july + august + september;
	if (leyton) { //leyton === ""
		return '\
	<li>\
		<span style="font-size:14px;  font-weight:bold;">\
		Leyton Beach\
		</span>\
		<ul style="text-align:left;"> ' + leyton + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var march = renderFutureTournamentDays(march_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var april = renderFutureTournamentDays(april_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var may = renderFutureTournamentDays(may_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var june = renderFutureTournamentDays(june_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var july = renderFutureTournamentDays(july_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var august = renderFutureTournamentDays(august_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var september = renderFutureTournamentDays(september_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);

	var worthing = march + april + may + june + july + august + september;
	if (worthing) { //worthing === ""
		return '\
		<li>\
			<span style="font-size:14px;font-weight:bold;">Worthing Beach\
			</span>\
			<ul style="text-align:left;"> ' + worthing + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsBothVenues(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var leyton = renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var worthing = renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var both = leyton + worthing;
	if (both) {
		return '<ul style="font-size:14px; text-align:left;">' +
			both + '</ul>';
	} else {
		return '<ul style="font-size:14px; text-align:left;"><li><p style="font-size:14px;">TBC</p></li></ul>';
	}
}

//run
var path = window.location.pathname;
var fullpath = window.location;
var page = path.split("/").pop();
logger(LOG_LEVEL_DEGUB, "page:" + page);
logger(LOG_LEVEL_DEGUB, "fullpath:" + fullpath);

if (page == 'index.html' || page == '') {
	console.log("rendering");

	//
	var UPCOMING_EVENT_LEYTON = 'upcomingEventLeyton';
	var LEYTON_BEACH = "Leyton Beach";

	var counterLeyton = indexRenderNextEvents(march_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, 0);
	counterLeyton = indexRenderNextEvents(april_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(may_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(june_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(july_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(august_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(september_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(october_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(november_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
	counterLeyton = indexRenderNextEvents(december_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);

	moreEventsInCalendar(UPCOMING_EVENT_LEYTON, counterLeyton, 'calendar-leyton.html');
	moreEventsComingSoon(LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);

	var UPCOMING_EVENT_WORTHING = 'upcomingEventWorthing';
	var WORTHING_BEACH = "Worthing Beach";

	var counterWorthing = indexRenderNextEvents(march_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, 0);
	counterWorthing = indexRenderNextEvents(april_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(may_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(june_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(july_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(august_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(september_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(october_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(november_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
	counterWorthing = indexRenderNextEvents(december_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);

	moreEventsInCalendar(UPCOMING_EVENT_WORTHING, counterWorthing, 'calendar-worthing.html');
	moreEventsComingSoon(WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
}

//event pages with dateFilter
if (page == 'calendar-leyton.html' || page == 'calendar-worthing.html') {
	eventController('display-all', true);
}

//tournament dates
if (page == 'summer-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_SUMMER, "NOTHING_FOR_NOW", false);
}

if (page == 'challenger-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_CHALLENGER, "NOTHING_FOR_NOW", false);
}

if (page == 'spring-tourney.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_SPRING, "NOTHING_FOR_NOW", false);
}

if (page == 'all-nations.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_ALL_NATIONS, "NOTHING_FOR_NOW", true);
}

if (page == 'sideout-mixed-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_MIXED_SERIES, "NOTHING_FOR_NOW", false);
}

if (page == 'junior-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_JUNIOR_SERIES, "NOTHING_FOR_NOW", false);
}

if (page == 'grand-prix.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_GRAND_PRIX, "NOTHING_FOR_NOW", true);
}

if (page == 'london-grand-slam.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_GRAND_SLAM, "NOTHING_FOR_NOW", true);
}




// function mylog(){
//   console.log("ekana click");
// }
// document.getElementById("leytonButton").onclick = function() {mylog()};