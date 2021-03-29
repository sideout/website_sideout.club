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
var NAME_SUMMER_MIXED = "SideOut Summer Series Mixed";
var NAME_ALL_NATIONS = "All Nations";
var NAME_CEV = "CEV Continental Cup Tournament";
var NAME_CHALLENGER = "SideOut Challenger Series";
var NAME_GRAND_PRIX = "SideOut London Grand Prix";
var NAME_WILSON = "UKBT Wilson Championships";
var NAME_WILSON_QUALIFIERS = "UKBT Wilson Qualifiers";
var NAME_LONDON_FINALS = "SideOut London Finals";
var NAME_END_OF_SEASON_PARTY = "End of Season Party!";
var NAME_INDOOR_ON_THE_BEACH = "Indoor on the Beach";
var NAME_UNDER_18 = "SideOut Under 18 Series";
var NAME_JUNIOR_TRAINING = "Junior Training";
var NAME_ADULT_TRAINING = "Adult Training";
var NAME_MIX_N_MATCH = "Mix & Match";

//TOURNAMENT TYPES
var TYPE_TOURNAMENT = "Tournament";
var TYPE_PLAY = "Play";
var TYPE_TRAINING = "Training";
var TYPE_JUNIORS = "Juniors";

//EVENT LINKS
var URL_MIX_N_MATCH = "tournaments/mixnmatch.html";
var URL_KING_QUEEN = "tournaments/king-queen-court.html";
var URL_AYCP = "all-you-can-play.html";
var URL_OPEN_PLAY = "open-play.html";
var URL_INDOOR_ON_THE_BEACH = "indoor-on-the-beach.html";
var URL_SIDE_IT_OUT = "side-it-out.html";
var URL_WILSON = "tournaments/ukbt-wilson-championships.html";
var URL_WILSON_FINALS = "tournaments/ukbt-wilson-championships-finals.html";
var URL_WILSON_QUALIFIERS = "tournaments/ukbt-wilson-qualifiers.html";
var URL_HIRE_LEYTON = "book-a-court-leyton.html";
var URL_HIRE_WORTHING = "book-a-court-worthing.html";
var URL_SPRING = "tournaments/spring-tourney.html";
var URL_SUMMER = "tournaments/summer-series.html";
var URL_SUMMER_MIXED = "tournaments/summer-series-mixed.html";
var URL_ALL_NATIONS = "tournaments/all-nations.html";
var URL_CEV = "cev-continental-cup.html";
var URL_CHALLENGER = "tournaments/challenger-series.html";
var URL_GRAND_PRIX = "tournaments/grand-prix.html";
var URL_LONDON_FINALS = "london-finals.html";
var URL_TRAINING_LEYTON = "training-leyton.html";
var URL_TRAINING_WORTHING = "training-worthing.html";
var URL_POLONIA = "tournaments/poloniasOneMoreBeachTournie.html";
var URL_UNDER_18 = "tournaments/under18-series.html"
var URL_JUNIOR = "juniors.html"

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
	{ date: new Date("03/30/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("03/31/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT }
];

var april_events_leyton = [
	{ date: new Date("04/01/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("04/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("04/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("04/06/2021"), name: NAME_HIRE_LEYTON, type: TYPE_PLAY, info: "", url: URL_HIRE_LEYTON },
	{ date: new Date("04/07/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("04/08/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/09/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/10/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/11/2021"), name: NAME_UNDER_18, type: TYPE_TOURNAMENT, info: "", url: URL_UNDER_18 },
	{ date: new Date("04/12/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/13/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/14/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("04/15/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/16/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("04/17/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("04/18/2021"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN, url: URL_SPRING },
	{ date: new Date("04/19/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("04/20/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("04/21/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("04/22/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("04/23/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("04/24/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN, url: URL_GRAND_PRIX },
	// { date: new Date("04/25/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_WOMEN, url: URL_GRAND_PRIX },
	{ date: new Date("04/26/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("04/27/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("04/28/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("04/29/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("04/30/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY }
];

var may_events_leyton = [
	// { date: new Date("05/01/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("05/02/2021"), name: NAME_SUMMER_MIXED, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_SUMMER_MIXED },
	// { date: new Date("05/02/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("05/03/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("05/03/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("05/04/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/05/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("05/06/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/07/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("05/08/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("05/09/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("05/10/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("05/11/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/12/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("05/13/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/14/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	{ date: new Date("05/15/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	// { date: new Date("05/16/2021"), name: NAME_SUMMER_MIXED, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_SUMMER_MIXED },
	// { date: new Date("05/16/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("05/17/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("05/18/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/19/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("05/20/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/21/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("05/22/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: "", url: URL_GRAND_PRIX },
	// { date: new Date("05/23/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: "", url: URL_GRAND_PRIX },
	{ date: new Date("05/24/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("05/25/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/26/2021"), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT },
	{ date: new Date("05/27/2021"), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	{ date: new Date("05/28/2021"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY },
	// { date: new Date("05/29/2021"), name: NAME_UNDER_18, type: TYPE_TOURNAMENT, info: "", url: URL_UNDER_18 },
	{ date: new Date("05/30/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP },
	{ date: new Date("05/31/2021"), name: NAME_JUNIOR_TRAINING, type: TYPE_TRAINING, info: "", url: URL_JUNIOR },
	{ date: new Date("05/31/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP }
];

var june_events_leyton = [
	// { date: new Date("06/01/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/02/2021"), name: "King & Queen of the Court", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	// { date: new Date("06/03/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/04/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/05/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/06/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/07/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/08/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("06/09/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("06/10/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/11/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/12/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/13/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/14/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/15/2021"), name: "'1, 2, BBQ!' Old School Tournie", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	// { date: new Date("06/16/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/17/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/18/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/19/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/20/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/21/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/22/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	// { date: new Date("06/23/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/27/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/28/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("06/29/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/30/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_GRAND_PRIX },
	// { date: new Date("06/30/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var july_events_leyton = [
	// { date: new Date("07/01/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/02/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/03/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/04/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/05/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/06/2021"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_ALL_NATIONS },
	// { date: new Date("07/07/2021"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MIXED, url: URL_ALL_NATIONS },
	// { date: new Date("07/08/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/09/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/10/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/11/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/12/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/13/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("07/14/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("07/15/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/16/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/17/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/18/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/19/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/21/2021"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_GRAND_PRIX },
	// { date: new Date("07/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/22/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/27/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/28/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	// { date: new Date("07/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("07/31/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON }
];

var august_events_leyton = [
	// { date: new Date("08/07/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/08/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/09/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/10/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("08/11/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("08/12/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/13/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/14/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/15/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/16/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/17/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	// { date: new Date("08/18/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("08/19/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/20/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/21/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/22/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/24/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("08/25/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("08/26/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("08/27/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/28/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON },
	// { date: new Date("08/31/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var september_events_leyton = [
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
	{ date: new Date("03/30/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("03/31/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING }
];

var april_events_worthing = [
	{ date: new Date("04/01/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/02/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/03/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/05/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING }
	{ date: new Date("04/06/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/07/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/08/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/09/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	// { date: new Date("04/10/2021"), name: NAME_UNDER_18, type: TYPE_TOURNAMENT, info: "", url: URL_UNDER_18 },
	{ date: new Date("04/11/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/12/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/13/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/14/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/15/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/16/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/17/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/18/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/19/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/20/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/21/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/22/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/23/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	// { date: new Date("04/24/2021"), name: URL_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	{ date: new Date("04/25/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/26/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/27/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/28/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/29/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING },
	{ date: new Date("04/30/2021"), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING }
];

var may_events_worthing = [
	// { date: new Date("05/01/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/02/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/03/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/04/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/05/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/07/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/08/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/09/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/10/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/11/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("05/12/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("05/13/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/14/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/15/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/16/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/17/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/18/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/19/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	// { date: new Date("05/20/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/21/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/22/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/25/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/26/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/27/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("05/28/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("05/31/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING }
];

var june_events_worthing = [
	// { date: new Date("06/01/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("06/02/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("06/03/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/04/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/05/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/06/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/07/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/08/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/09/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/10/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/11/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/12/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/13/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/14/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/15/2021"), name: "'Combi 60'", type: TYPE_TOURNAMENT, info: "", url: "" },
	// { date: new Date("06/16/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/17/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/18/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/19/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/20/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/21/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/22/2021"), name: "King & Queen of the Court", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	// { date: new Date("06/23/2021"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	// { date: new Date("06/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/27/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/28/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("06/29/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("06/30/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var july_events_worthing = [
	// { date: new Date("07/01/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/02/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/03/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/04/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/05/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/06/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/07/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/08/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/09/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/10/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/11/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/12/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/13/2021"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Men", url: "" },
	// { date: new Date("07/14/2021"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Women", url: "" },
	// { date: new Date("07/15/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/16/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/17/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/18/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/19/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/20/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/21/2021"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	// { date: new Date("07/22/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/23/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/24/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/25/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/26/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/27/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	// { date: new Date("07/28/2021"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	// { date: new Date("07/29/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/30/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING },
	// { date: new Date("07/31/2021"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING }
];

var august_events_worthing = [
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

var september_events_worthing = [
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

function renderMonthTable(beachName, eventList, elementId, filter, dateCheck, monthName) {
	//console.log(eventList);
	var i;
	var tableEventContent = "";
	var hasThisMonthEvents = false;

	for (i = 0; i < eventList.length; i++) {
		//console.log('i:' + i);
		var eventType = eventList[i].type;

		//console.log("eventType:"+eventType);
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

function renderNextEvents(eventList, beach, counter) {

	if (counter == 3) {
		//events to display in index
		return 3;
	}
	console.log("renderNextEvents");

	var i;
	var text = "";
	var eventDiv;
	if (beach == 'Leyton') {
		eventDiv = document.getElementById('upcomingEventLeyton');
		console.log("Venue: Leyton");
	} else {
		eventDiv = document.getElementById('upcomingEventWorthing');
		console.log("Venue: Worthing");
	}

	if (counter == 0) {
		eventDiv.innerHTML = '<div class="section-heading">\
                            <h2 class="entry-title">Upcoming Events ' + beach + '</h2>\
                        </div>';
	}

	for (i = 0; i < eventList.length; i++) {

		var eventType = eventList[i].type;

		if ((eventType == TYPE_PLAY || eventType == TYPE_TOURNAMENT) && counter < 3) {

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var eventUrl = eventList[i].url;
			var today = new Date();

			var thisDate = new Date(eventDate);

			if (thisDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {


				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var htmlEvent = '\
				<div class="event-wrap d-flex flex-wrap justify-content-between">\
                            <div class="event-content-wrap">\
								<header class="entry-header d-flex flex-wrap align-items-center">';

				if (eventUrl !== "") {
					htmlEvent += '<h3 class="entry-title w-100 m-0"><a style="color:red;" href=' + eventUrl + '>' + eventName + '</a></h3>';
				} else {
					htmlEvent += '<h3 class="entry-title w-100 m-0"><p style="font-size: 18px;font-weight: 600;">' + eventName + '</p></h3>';
				}

				// <h3 class="entry-title w-100 m-0"><a style="color:red;" href=' + eventUrl + '>' + eventName + '</a></h3>\
				// \
				htmlEvent += '	<div class="posted-date">\
									<p>' + gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year + '</p>\
                            </div>\
						</div>';
				console.log("Event: " + eventName + " Month: " + months[monthInt] + " DIV: " + htmlEvent);
				counter++;
				eventDiv.innerHTML += htmlEvent;
			}

		}
	}

	if (counter == 0) {
		eventDiv.innerHTML = '<div class="section-heading">\
                            <h2 class="entry-title">Upcoming Events ' + beach + '</h2>\
							<p>More events are coming soon </p>\
                        </div>';
	}

	return counter;
}
//console.log("Page location is " + window.location.href);

//tourname pages display event dates
function renderFutureTournamentDays(eventList, tournamentName, finalsTournamentName) {
	console.log("renderNextEvents");
	var i;
	var eventDiv = '';

	for (i = 0; i < eventList.length; i++) {

		var eventName = eventList[i].name;

		if (eventName == tournamentName || eventName == finalsTournamentName) {

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var today = new Date();
			var thisDate = new Date(eventDate);

			if (thisDate > today) {

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var htmlEvent = '\
				<li>\
					<h6 class="font_6" style="font-size:14px; line-height:1.3em; text-align:justify; font-family:open sans,sans-serif;">' +
					gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year +
					'</h6>\
				</li>';
				console.log("Event: " + eventName + " Month: " + months[monthInt] + " DIV: " + htmlEvent);
				eventDiv += htmlEvent;
			}
		}
	}
	return eventDiv;
}

function renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName) {
	var march = renderFutureTournamentDays(march_events_leyton, tournamentName, finalsTournamentName);
	var april = renderFutureTournamentDays(april_events_leyton, tournamentName, finalsTournamentName);
	var may = renderFutureTournamentDays(may_events_leyton, tournamentName, finalsTournamentName);
	var june = renderFutureTournamentDays(june_events_leyton, tournamentName, finalsTournamentName);
	var july = renderFutureTournamentDays(july_events_leyton, tournamentName, finalsTournamentName);
	var august = renderFutureTournamentDays(august_events_leyton, tournamentName, finalsTournamentName);
	var september = renderFutureTournamentDays(september_events_leyton, tournamentName, finalsTournamentName);

	var leyton = march + april + may + june + july + august + september;
	if (leyton) { //leyton === ""
		return '\
	<li>\
		<h6 class="font_6" style="font-size:14px; line-height:1.3em; font-weight:bold;">\
						SideOut Beach, Leyton\
		</h6>\
		<ul style="text-align:left;"> ' + leyton + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName) {
	var march = renderFutureTournamentDays(march_events_worthing, tournamentName, finalsTournamentName);
	var april = renderFutureTournamentDays(april_events_worthing, tournamentName, finalsTournamentName);
	var may = renderFutureTournamentDays(may_events_worthing, tournamentName, finalsTournamentName);
	var june = renderFutureTournamentDays(june_events_worthing, tournamentName, finalsTournamentName);
	var july = renderFutureTournamentDays(july_events_worthing, tournamentName, finalsTournamentName);
	var august = renderFutureTournamentDays(august_events_worthing, tournamentName, finalsTournamentName);
	var september = renderFutureTournamentDays(september_events_worthing, tournamentName, finalsTournamentName);

	var worthing = march + april + may + june + july + august + september;
	if (worthing) { //worthing === ""
		return '\
		<li>\
			<h6 class="font_6" style="font-size:14px; line-height:1.3em; font-weight:bold;">\
			SideOut Beach, Worthing\
			</h6>\
			<ul style="text-align:left;"> ' + worthing + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsBothVenues(tournamentName, finalsTournamentName) {
	var leyton = renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName);
	var worthing = renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName);
	var both = leyton + worthing;
	if (both) {
		return '<ul class="font_6" style="font-family:open sans,sans-serif; font-size:14px; text-align:left;">' +
			both + '</ul>';
	} else {
		return '<ul class="font_6" style="font-family:open sans,sans-serif; font-size:14px; text-align:left;"><li><h6 class="font_6" style="font-size:14px; line-height:1.3em;">TBC</h6></li></ul>';
	}
}

//run
var path = window.location.pathname;
var fullpath = window.location;

var page = path.split("/").pop();
console.log("page:" + page);
console.log("fullpath:" + fullpath);
if (page == 'index.html' || page == 'indexc.html' || page == '') {
	console.log("rendering");
	var counterLeyton = renderNextEvents(march_events_leyton, "Leyton", 0);
	counterLeyton = renderNextEvents(april_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(may_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(june_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(july_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(august_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(september_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(october_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(november_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(december_events_leyton, "Leyton", counterLeyton);

	var counterWorthing = renderNextEvents(march_events_worthing, "Worthing", 0);
	counterWorthing = renderNextEvents(april_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(may_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(june_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(july_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(august_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(september_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(october_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(november_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(december_events_worthing, "Worthing", counterWorthing);
}
//event pages with dateFilter
if (page == 'calendar-leyton.html' || page == 'calendar-worthing.html') {
	eventController('display-all', true);
}


//tournament dates
if (page == 'summer-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_SUMMER, "NOTHING_FOR_NOW");
}

if (page == 'challenger-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_CHALLENGER, "NOTHING_FOR_NOW");
}


// function mylog(){
//   console.log("ekana click");
// }
// document.getElementById("leytonButton").onclick = function() {mylog()};