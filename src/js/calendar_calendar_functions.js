//calendar pages
var lineColorColor = "";
var lineColorDay = "";
function renderMonthTable(beachName, eventList, elementId, filter, dateCheck, monthName) {

    var i;
    var tableEventContent = "";
    var hasThisMonthEvents = false;

    for (i = 0; i < eventList.length; i++) {

        var eventType = eventList[i].type;
        var eventType1 = eventList[i].type1;


        if (filter == 'display-all' || filter == eventType || filter == eventType1) {

            var eventName = eventList[i].name;
            var eventInfo = eventList[i].info;
            var eventDate = eventList[i].date;
            var eventStatus = eventList[i].status;
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


                if (lineColorDay !== dayOfWeekInt) {
                    lineColorDay = dayOfWeekInt;
                    if (lineColorColor == COLOR_ONE) {
                        lineColorColor = COLOR_TWO;
                    } else {
                        lineColorColor = COLOR_ONE;
                    }
                }



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

                tableEventContent += "<tr class=\"row100 body\" style=\"background-color: " + lineColorColor + ";\">\
      			<td class=\"cell100 column1X\">" + gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year + "</td>";


                var nameAndUrl = "";
                if (eventUrl !== "") {
                    nameAndUrl = "<td class=\"cell100 columnX\"><a style=\"color:" + color + "\" href=" + eventUrl + ">" + eventName + "</a></td>";
                } else {
                    nameAndUrl = "<td class=\"cell100 columnX\">" + eventName + "</td>";
                }

                if (eventStatus == "cancelled") {
                    nameAndUrl = "<td class=\"cell100 columnX\"><del style=\"color:" + color + "\">" + eventName + "</del></td>";
                }

                tableEventContent += nameAndUrl;


                eventTypeContent = '';
                if (eventType1) {
                    eventTypeContent = eventType + " & " + eventType1;
                } else {
                    eventTypeContent = eventType;
                }


                tableEventContent += "\
      			<td class=\"cell100 columnX\">" + eventTypeContent + "</td>\
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

    document.getElementById('filter-buttons').innerHTML = "\
		<a onclick=\"eventController('display-all',true)\" href=\"#\" style='width: 160px' class=\" " + buttonAll + " \">All Events</a>\
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

//run
var page = pageIndentifier();

//event pages with dateFilter
if (page == 'calendar-leyton.html' || page == 'calendar-worthing.html') {
    eventController('display-all', true);
}