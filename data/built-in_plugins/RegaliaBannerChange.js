import utils from "../_utils.js"

if (DataStore.get("Custom-Regalia-Banner")) {
    const addRegaliaDropdown = () => {
        const origin = document.createElement("div")
        const regaliadropdown = document.createElement("lol-uikit-framed-dropdown")

        origin.classList.add("dropdown-div")
        regaliadropdown.classList.add("lol-settings-general-dropdown")
        origin.append(regaliadropdown)

        if (document.getElementById("regalia-dropdown")) {
        }
        else {
            for (let i = 0; i < DataStore.get("RegaliaBanners-list").length; i++) {
                const regalialist = DataStore.get("RegaliaBanners-list")[i]
                const dropdown = document.createElement("lol-uikit-dropdown-option")
                dropdown.setAttribute("slot", "lol-uikit-dropdown-option")
                dropdown.innerText = regalialist
                regaliadropdown.id = "regalia-dropdown"
                regaliadropdown.style.marginRight = "15px";
                regaliadropdown.style.width = "auto";
                regaliadropdown.style.position = "fixed";
                regaliadropdown.style.right = "490px";
                dropdown.onclick = () => {
                    DataStore.set("CurrentRegaliaBanner", regalialist)
                }
                
                if (DataStore.get("CurrentRegaliaBanner") == regalialist) {
                    dropdown.setAttribute("selected", "false")
                }
                let gameBar = document.querySelector(".lobby-header-content")
                gameBar.insertBefore(regaliadropdown, gameBar.children[5])

                regaliadropdown.appendChild(dropdown)
            }
            return origin
        }
    }
    window.addEventListener("load", () => {
        utils.routineAddCallback(addRegaliaDropdown, ["rcp-fe-lol-parties"])
    })
}