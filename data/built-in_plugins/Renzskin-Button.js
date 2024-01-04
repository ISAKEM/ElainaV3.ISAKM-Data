import utils from "../_utils.js"

if (DataStore.get("Renzskin")) {
    const addRenzskinButton = () => {
        const button = document.createElement("lol-uikit-flat-button")
        const position = "15px"
        if (document.getElementById("renzskin-button")) {
        }
        else {
            try {
                button.id = "renzskin-button"
                button.textContent = "R3nzSkin"
                button.style.marginRight = position;
                button.onclick = async () => {
                    window.openPluginsFolder(`ISAKV1/data/assets/R3nzskin`)
                }
                let gameBar = document.querySelector(".lobby-header-content")
                gameBar.insertBefore(button, gameBar.children[6])
            } catch
            {
            }
        }
    }
    window.addEventListener("load", () => {
    utils.routineAddCallback(addRenzskinButton, ["rcp-fe-lol-parties"])
    })
}