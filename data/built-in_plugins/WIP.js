import utils from "../_utils.js"

if (DataStore.get("Renzskin")) {
    const addWIPButton = () => {
        const button = document.createElement("lol-uikit-flat-button")
        if (document.getElementById("wip-button")) {
        }
        else {
            try {
                button.id = "wip-button"
                button.textContent = "W.I.P"
                button.style.marginLeft = "15px"
                button.onclick = async () => {
                    document.querySelector(".rcp-fe-viewport-sidebar").style.display = "none";
                    document.querySelector(".rcp-fe-viewport-main").style.width = "1500px";
                    document.querySelector(".right-nav-menu").style.marginLeft = "345px";
                    document.querySelector(".currency-container-stacked.ember-view").style.marginLeft = "0px";
                    document.querySelector(".social-leaderboard-button-container").style.display = "none";
                    document.querySelector(".open-party-toggle.ember-view").style.display = "none";
                    document.querySelector(".invite-info-panel-container").style.display = "none";
                    document.querySelector(".chat-container").style.display = "none";
                }
                let gameBar = document.querySelector(".lobby-header-content")
                gameBar.insertBefore(button, gameBar.children[4])
            } catch
            {
            }
        }
    }
    window.addEventListener("load", () => {
    utils.routineAddCallback(addWIPButton, ["rcp-fe-lol-parties"])
    })
}