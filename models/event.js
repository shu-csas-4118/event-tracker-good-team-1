var events = [
    ["Event ID","Event Name","Event Image Name", "Event Location", "Event Description", "Price","Event Date",["tags"]],
    ["1","Dierks Bentley - PNC Tailgate Club","DierksBently.png", "Holmdel, NJ", "Singer", "45.00","May 19",["country","music","dierk"]],
    ["2","My Favorite Murder Live","MFML.png", "New York City, NY", "Please note Tickets are not available at the box office on the first day of the public on sale"
        , "25.00","10/04/18",["podcast","beacon"]],
    ["3", "Wicked","wicked.png", "New York City, NY", "Play about the wizard of oz"
        , "100.00","04/17/18",["broadway","play"]],
    ["4", "Harry Potter","harrypotter.png", "Nashville, TN", "Grab your broom and get ready for the tasks ahead!"
        , "65.00","05/27/18",["play","magic"]]
];

function getEventName(i){
    return events[i][1];
}
function getEventNames(){
    alert("Get Events Names Alert");
    return "wowowo";
}
function getEventImageName(i){
    return events[i][2];
}
function getEventLocation(i){
    return events[i][3];
}
function getEventDescription(i){
    return events[i][4];
}
function getEventPrice(i){
    return events[i][5];
}
function getEventDate(i){
    return events[i][6];
}
function getEventTags(i){
    return events[i][7];
}
