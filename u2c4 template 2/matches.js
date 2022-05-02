// write js code here corresponding to matches.html


var matches = JSON.parse(localStorage.getItem("schedule"))
displaydata(matches)

function filter(){
    var selected = document.getElementById("filterVenue").value
    console.log(selected)
    var filterList = matches.filter(function(elem){
        return elem.selectVenue = selected
    })
}

var matches = JSON.parse(localStorage.getItem("favourites")) || []

function displaydata(data){

    // document.querySelector("tbody").innerHTML= ""
    data.forEach(function(elem){
        
        var tr = document.createElement("tr")

        var td1 =document.createElement("td")
        td1.innerText = elem.matchNumber

        var td2 = document.createElement("td")
        td2.innerText = elem.selectteamA

        var td3 = document.createElement("td")
        td3.innerText = elem.selectteamB

        var td4 = document.createElement("td")
        td4.innerText = elem.date

        var td5 = document.createElement("td")
        td5.innerText = elem.selectVenue

        var td6 = document.createElement("td")
        td6.innerText = "Favourite"
        td6.style.color = "green"
        td6.style.fontWeight = "bold"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            Fav(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })

    function Fav(elem){
        console.log(elem)
        matches.push(elem)
        localStorage.setItem("favourites",JSON.stringify(matches))

    }
}

