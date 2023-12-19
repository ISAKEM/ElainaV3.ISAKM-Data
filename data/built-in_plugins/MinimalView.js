import utils from "../_utils.js"

if (DataStore.get("Renzskin")) {
    const addMinimalButton = () => {
        const button = document.createElement("lol-uikit-flat-button")
        if (document.getElementById("minimal-button")) {
        }
        else {
            try {
                button.id = "minimal-button"
                button.textContent = "Minimal View"
                button.style.marginLeft = "15px"
                button.onclick = async () => {
                    document.querySelector(".rcp-fe-viewport-sidebar").style.marginRight = "148px";
                    document.querySelector(".rcp-fe-lol-navigation.main-nav-bar").style.width = "0";
                    document.querySelector(".v2-lobby-root-component").style.width = "137%";
                    document.querySelector(".v2-header-component").style.width = "137%";
                    document.querySelector(".lol-social-lower-pane-container").style.display = "none";
                    document.querySelector(".lol-social-identity").style.display = "none";
                    document.querySelector(".alpha-version-panel").style.display = "none";
                    document.querySelector(".main-navigation-menu-item.menu_item_navbar_tft.ember-view").style.marginRight = "205px";
                    document.querySelector(".main-navigation-menu-item.menu_item_navbar_store.ember-view").style.marginRight = "197px";
                    document.querySelector(".currency-container-stacked.ember-view").style.marginTop = "22px";
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
    utils.routineAddCallback(addMinimalButton, ["rcp-fe-lol-parties"])
    })
}