import lang from "../configs/Language.js"
import utils from "../_utils.js"
const delay = (t) => new Promise((r) => setTimeout(r, t))

async function create(method, endpoint, action){
    const initialize = {
        method: method,
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
        ... action ? { data: action } : undefined
    }

    const request = await fetch(endpoint, initialize)
    const response = await request.json()

    return response
}

async function observeQueue(callback) {
    const uri = document.querySelector('link[rel="riot:plugins:websocket"]').href
    const ws = new WebSocket(uri, 'wamp')

    const endpoint = "/lol-gameflow/v1/gameflow-phase".replaceAll("/", "_")

    ws.onopen = () => ws.send(JSON.stringify([5, 'OnJsonApiEvent' + endpoint]))
    ws.onmessage = callback
}

//OPGG
async function updateLobbyStateOPGG(message) {
    const lobby = await create("get", "//riotclient/chat/v5/participants/champ-select")
    const names = []
    for (const player of lobby.participants) {
        names.push(player.game_name+"%23"+player.game_tag)
    }

    if (utils.phase == "ChampSelect" && names.length!=0){
        window.open("https://www.op.gg/multisearch/euw?summoners="+names.join("%2C"))
    }
}

async function OPGGButton(){
    observeQueue(updateLobbyStateOPGG);
}

function generateOPGGButton(t){
    const e=document.createElement("div"),
        o=document.createElement("div")

    o.setAttribute("class","opgg-button-container"),
        o.setAttribute("style","position: absolute;right: 134px;bottom: 95px;display: flex;align-items: flex-end;"),

        e.setAttribute("class","quit-button ember-view"),
        e.setAttribute("onclick","window.OPGGButton()"),
        e.setAttribute("id","OPGGButton")

    const d=document.createElement("lol-uikit-flat-button");


//___________________________________________________________________________//
    const langCode = document.querySelector("html").lang;
    const langMap = lang.langlist
    const selectedLang = lang[langMap[langCode] || "EN"];

    d.innerHTML = selectedLang["opgg"];
//___________________________________________________________________________//


    e.appendChild(d),
        o.appendChild(e),

        t.parentNode.insertBefore(o,t)
}

window.OPGGButton=OPGGButton;

//UGG
async function updateLobbyStateUGG(message) {
    const lobby = await create("get", "//riotclient/chat/v5/participants/champ-select")
    const names = []
    for (const player of lobby.participants) {
        names.push(player.game_name+"-"+player.game_tag)
    }

    if (utils.phase == "ChampSelect" && names.length!=0){
        window.open("https://u.gg/multisearch?summoners="+names.join("%2C")+"&region=euw1")
    }
}

async function UGGButton(){
    observeQueue(updateLobbyStateUGG);
}

function generateUGGButton(t){
    const e=document.createElement("div"),
        o=document.createElement("div")

    o.setAttribute("class","ugg-button-container"),
        o.setAttribute("style","position: absolute;right: 0px;bottom: 95px;display: flex;align-items: flex-end;"),

        e.setAttribute("class","quit-button ember-view"),
        e.setAttribute("onclick","window.UGGButton()"),
        e.setAttribute("id","UGGButton")

    const d=document.createElement("lol-uikit-flat-button");


//___________________________________________________________________________//
    const langCode = document.querySelector("html").lang;
    const langMap = lang.langlist
    const selectedLang = lang[langMap[langCode] || "EN"];

    d.innerHTML = selectedLang["ugg"];
//___________________________________________________________________________//


    e.appendChild(d),
        o.appendChild(e),

        t.parentNode.insertBefore(o,t)
}

window.UGGButton=UGGButton;


if (DataStore.get("Renzskin")){
    let addOPGGButtonObserver=t=>{
        "ChampSelect"==utils.phase&&document.querySelector(".bottom-right-buttons")&&!document.querySelector(".opgg-button-container")&&generateOPGGButton(
            document.querySelector(".bottom-right-buttons")
        )
    }
    let addUGGButtonObserver=t=>{
        "ChampSelect"==utils.phase&&document.querySelector(".bottom-right-buttons")&&!document.querySelector(".ugg-button-container")&&generateUGGButton(
            document.querySelector(".bottom-right-buttons")
        )
    }

    window.addEventListener("load",()=>{
        utils.routineAddCallback(addOPGGButtonObserver,["bottom-right-buttons"])
        utils.routineAddCallback(addUGGButtonObserver,["bottom-right-buttons"])
    })
}