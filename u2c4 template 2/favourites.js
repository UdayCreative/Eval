// write js code here corresponding to favourites.html


var matches = JSON.parse(localStorage.getItem("favourites")) || []
displaydata(matches)

function displaydata(data){

    data.forEach(function(elem,index){
        
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
        td6.innerText = "Remove as Favourite"
        td6.style.color = "red"
        td6.style.fontWeight = "bold"
        td6.style.cursor = "pointer"
        td6.setAttribute("class","deleteText")
        td6.addEventListener("click", function(){
            deleteItem(elem,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
    
    function deleteItem(elem,index){
        matches.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(matches))
        window.location.reload()        
    }
}