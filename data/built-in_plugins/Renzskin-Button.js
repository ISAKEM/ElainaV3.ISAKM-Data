import utils from "../_utils.js"
const addPrac6 = () => {
    if (document.getElementById("pract-button")) {return}
    else {
        try{
            let button = document.createElement("lol-uikit-flat-button")
            button.id = "pract-button"
            button.textContent = "R3nzSkin"
            button.style.marginLeft = "390px"
            button.onclick = async () => {
                window.openPluginsFolder(`ISAK-V1-1.0/data/assets/R3nzskin`)
            }
            let gameBar = document.querySelector(".lobby-header-content")
            gameBar.insertBefore(button, gameBar.children[4])
        }catch{}
    }
}
window.addEventListener("load", ()=> {
    if (!DataStore.get("aram-only")) {utils.routineAddCallback(addPrac6, ["rcp-fe-lol-parties"])}
})