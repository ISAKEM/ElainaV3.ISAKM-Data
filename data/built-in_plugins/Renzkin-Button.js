import utils from "../_utils.js"
const addPrac6 = () => {
    if (document.getElementById("pract-button")) {return}
    else {
        try{
            let button = document.createElement("lol-uikit-flat-button")
            button.id = "pract-button"
            button.textContent = "5v51 Practice"
            button.style.marginRight = "160px"
            button.onclick = async () => {
                await fetch('/lol-lobby/v2/lobby', {
                    method: 'POST',
                    body: JSON.stringify(
                        {"customGameLobby":{"configuration":{"gameMode":"PRACTICETOOL","gameMutator":"","gameServerRegion":"","mapId":11,"mutators":{"id":1},"spectatorPolicy":"AllAllowed","teamSize":5},"lobbyName":"Elaina-V3 Practice room","lobbyPassword":null},"isCustom":true}
                    ),
                    headers: {'Content-Type': 'application/json'}
                })
            }
            let gameBar = document.querySelector(".parties-game-navs.ember-view")
            gameBar.insertBefore(button, gameBar.children[1])
        }catch{}
    }
}
window.addEventListener("load", ()=> {
    if (!DataStore.get("aram-only")) {utils.routineAddCallback(addPrac6, ["rcp-fe-lol-parties"])}
})