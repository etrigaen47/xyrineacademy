// NEWS AND EVENTS SECTION - INDEX
document.getElementById("newsTab").addEventListener("click", (e) => {
	$("#newsTabContent").show();
	$("#eventsTabContent").hide();
});
document.getElementById("eventsTab").addEventListener("click", (e) => {
	$("#eventsTabContent").show();
	$("#newsTabContent").hide();
});