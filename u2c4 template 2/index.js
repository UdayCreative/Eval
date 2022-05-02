// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",myfun)
var matches = JSON.parse(localStorage.getItem("schedule")) || []

function myfun(){
  event.preventDefault()

  var matchObj = {

    matchNumber: masaiForm.matchNum.value,
    selectteamA: masaiForm.teamA.value,
    selectteamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    selectVenue: masaiForm.venue.value

  }

  matches.push(matchObj)
  console.log(matches)
  localStorage.setItem("schedule",JSON.stringify(matches))

  window.location.href= "matches.html"

}