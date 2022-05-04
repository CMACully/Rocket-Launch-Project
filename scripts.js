// Programmer: Chauntel Atchley Cully
// Objective: By using the API the Launch Library provides. Utilize the      XMLHttpRequest constructor and create an object that will handle your API request and response.
// Date Created: 12/2/2021
// Date Updated: 12/4/2021

// AddEventListener load, click function for the Next4Launches achor
window.addEventListener('load', function () {
    this.document.getElementById('nxt4lnchs').addEventListener('click', getNxt4Lnchs)
})
// AddEventListener load, click function for the Astronauts achor
window.addEventListener('load', function () {
    this.document.getElementById('astronauts').addEventListener('click', getAstronauts)
})

//#region Setting up the XMLHttpRequest constructor for the Next4Launches anchor request
var httpRequest;

function getNxt4Lnchs() {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?ordering=name&status=8")
    httpRequest.send();
    httpRequest.onreadystatechange = aFunction;
}
//#endregion

//#region Setting up the XMLHttpRequest constructor for the Astronauts anchor request
var httpRequest;

function getAstronauts() {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("get", "https://lldev.thespacedevs.com/2.2.0/astronaut/?status=1&agency__abbrev=NASA")
    httpRequest.send();
    httpRequest.onreadystatechange = bFunction;
}
//#endregion

//#region Create the onreadystatechange aFunction for the Next4Launches which also is creating the objects within the Card-Group 
function aFunction() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var nxt4lnchs = httpRequest;
        var nxt4lnchsObj = JSON.parse(nxt4lnchs.response);

        var cardGroup = document.getElementById('cardGroup')
        cardGroup.innerHTML = "";

        for (i = 0; i < 4; i++) {
            var el = document.createElement('div')
            el.setAttribute("class", "card")
            el.setAttribute('style', 'background-color: rgba(44, 44, 44, 0.8)', 'color: rgb(241, 241, 241)')
            var image = document.createElement('img')
            image.setAttribute("class", "card-img-top")
            image.setAttribute('style', 'height:242px', 'width:242px')
            image.src = nxt4lnchsObj.results[i].image
            image.alt = "alt"
            el.appendChild(image)
            var elm = document.createElement('div')
            elm.setAttribute("class", "card-body")
            var he6 = document.createElement('h6')
            he6.setAttribute("class", "card-title")
            he6.innerHTML = nxt4lnchsObj.results[i].name
            elm.appendChild(he6)
            var par = document.createElement('p')
            par.setAttribute("class", "card-text")
            par.innerHTML = nxt4lnchsObj.results[i].pad.location.name
            elm.appendChild(par)
            var par1 = document.createElement('p')
            par1.innerHTML = nxt4lnchsObj.results[i].mission.description
            elm.appendChild(par1)
            el.appendChild(elm)
            cardGroup.appendChild(el)
        }
    }
}
//#endregion

//#region Create the onreadystatechange bFunction for the Astronauts which also is creating the objects within the Card-Group 
function bFunction() {

    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var astronauts = httpRequest;
        var astronautsObj = JSON.parse(astronauts.response);

        var cardGroup = document.getElementById('cardGroup')
        cardGroup.innerHTML = "";

        for (i = 0; i < 5; i++) {
            var el = document.createElement('div')
            el.setAttribute("class", "card")
            el.setAttribute('style', 'background-color: rgba(44, 44, 44, 0.8)')
            var image = document.createElement('img')
            image.setAttribute("class", "card-img-top")
            image.setAttribute('style', 'height:242px', 'width:242px')
            image.src = astronautsObj.results[i].profile_image
            image.alt = "alt"
            el.appendChild(image)
            var elm = document.createElement('div')
            elm.setAttribute("class", "card-body")
            var he6 = document.createElement('h6')
            he6.setAttribute("class", "card-title")
            he6.innerHTML = astronautsObj.results[i].name
            elm.appendChild(he6)
            var par = document.createElement('p')
            par.setAttribute("class", "card-text")
            par.innerHTML = astronautsObj.results[i].status.name
            elm.appendChild(par)
            var par1 = document.createElement('p')
            par1.innerHTML = astronautsObj.results[i].bio
            elm.appendChild(par1)
            el.appendChild(elm)
            cardGroup.appendChild(el)
        }
    }
}
//#endregion