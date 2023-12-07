import utils from "../_utils.js"

let datapath = new URL("..", import.meta.url).href

function IsakTrigger() {
    const container0  = document.createElement("div")
	const watermark   = document.createElement("div")
	const wtmark      = document.createElement("p")

	const mainDiv = document.createElement("div")

	mainDiv.id = "EasterEgg1Div"

	container0.classList.add ("watermark-text")


	wtmark.classList.add("watermark")
	const lang = document.querySelector("html").lang;
	const langs = ["ja-JP", "ko-KR", "zh-CN", "zh-TW", "es-MX"];

	if (langs.includes(lang)) {
		wtmark.innerHTML = "";
	}
	else {
		wtmark.innerHTML = "By Elaina Da Catto/Modified by ISAK.M";
	}

	let showcontainer = document.getElementsByClassName("rcp-fe-lol-home")[0]
	showcontainer.appendChild(mainDiv)

	mainDiv.append(container0)
	container0.append(watermark)
	watermark.append(wtmark)
}

let addWatermark = (node) => {
	let pagename = node.getAttribute("data-screen-name")
	if (pagename == "rcp-fe-lol-home-main" && !document.getElementById("EasterEgg1Div")) {
		IsakTrigger()
	}
	else if (pagename != "rcp-fe-lol-home-main" && pagename != "social") {
		if (document.getElementById("EasterEgg1Div")) {
			DelIsakTrigger()
		}
	}
}

window.addEventListener('load', ()=> {
	utils.mutationObserverAddCallback(addWatermark, ["screen-root"])
})