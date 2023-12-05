import lang from "../configs/Language.js"
async function RenzSkinButton(){
    window.openPluginsFolder(`ISAKV1/data/assets/R3nzskin`)
}

function generateRenzSkinButton(t){
    const e=document.createElement("div"),
          o=document.createElement("div")
    
        o.setAttribute("class","renzskin-button-container"),
        o.setAttribute("style","position: absolute;right: 134px;bottom: 57px;display: flex;align-items: flex-end;"),

        e.setAttribute("class","quit-button ember-view"),
        e.setAttribute("onclick","window.RenzSkinButton()"),
        e.setAttribute("id","RenzSkinButton")

    const d=document.createElement("lol-uikit-flat-button");


//___________________________________________________________________________//
        const langCode = document.querySelector("html").lang;
        const langMap = lang.langlist
        const selectedLang = lang[langMap[langCode] || "EN"];

        d.innerHTML = selectedLang["renzskin"];
//___________________________________________________________________________//
        
        
        e.appendChild(d),
        o.appendChild(e),

    t.parentNode.insertBefore(o,t)
}

import utils from '../_utils.js';

window.RenzSkinButton=RenzSkinButton;
if (DataStore.get("Renzskin")){
    let addRenzSkinButtonObserver=t=>{
        "ChampSelect"==utils.phase&&document.querySelector(".bottom-right-buttons")&&!document.querySelector(".renzskin-button-container")&&generateRenzSkinButton(
            document.querySelector(".bottom-right-buttons")
        )
    }

    window.addEventListener("load",()=>{
        utils.routineAddCallback(addRenzSkinButtonObserver,["bottom-right-buttons"])
    })
}