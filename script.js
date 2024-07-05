var iframeContainer = document.getElementById('iframeContainer');
// var beginnerProjectButton = document.getElementById('beginnerProjectButton');
var spanTagsBp = document.getElementById("spanTagsBp");
var spanTagsIp = document.getElementById("spanTagsIp");
var spanTagsAp = document.getElementById("spanTagsAp");

function beginnerProject() {
    iframeContainer.src = "beginnerProject.html";
    spanTagsBp.style.backgroundColor = "#2260ff";
    spanTagsIp.style.backgroundColor = "white";
    spanTagsAp.style.backgroundColor = "white";


}
function intermediateProjects() {
    iframeContainer.src = "intermediateProjects.html";
    spanTagsBp.style.backgroundColor = "white";
    spanTagsIp.style.backgroundColor = "#2260ff";
    spanTagsAp.style.backgroundColor = "white";


}
function advanceProject() {
    iframeContainer.src = "advanceProject.html";
    spanTagsBp.style.backgroundColor = "white";
    spanTagsIp.style.backgroundColor = "white";
    spanTagsAp.style.backgroundColor = "#2260ff";


}