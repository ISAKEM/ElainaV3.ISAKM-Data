let updateType

import update from './configs/Version.js'
import lang from "./configs/Language.js"

if (!DataStore.has(`Update-${update}`)) {
	DataStore.set(`Update-${update}`, true)
}

if (!DataStore.has(`Force-Update`)) {
	DataStore.set(`Force-Update`, true)
}

if (DataStore.get(`Force-Update`)) {
	updateType = "Manual"
}
else {
	updateType = "Auto"
}

if (DataStore.get(`Force-Update`)) {
	async function createLoaderMenu(root) {
		const langCode = document.querySelector("html").lang;
		const langMap = lang.langlist
		const _t = lang[langMap[langCode] || "EN"];
		const { Component, jsx, render } = await import('//esm.run/nano-jsx')
		
		class LoaderMenu extends Component {
			render() {
				return jsx/*html*/`
					<div class="modal" style="position: absolute; inset: 0px; z-index: 8500;" id="Elaina-Update">
						<lol-uikit-full-page-backdrop class="backdrop" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;"></lol-uikit-full-page-backdrop>
						<div class="dialog-confirm" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;">
							  <lol-uikit-dialog-frame class="dialog-frame" orientation="bottom" close-button="false">
								<div class="dialog-content">
									<lol-uikit-content-block class="app-controls-exit-dialog" type="dialog-small" style="width: 500px;">
										<h5>Elaina_V3 - ${updateType} Update</h5>
										<hr class="heading-spacer" />
										<hr class="heading-spacer" />
										<p class="Elaina-Update" style="text-align: center">New theme updates are available</p>
										<p class="Elaina-Update" style="text-align: center">You have to update manually to continue using ElainaV3 without problems</p>
										<hr class="heading-spacer" />
										<p class="Elaina-Update" style="text-align: center"> Meow ~~~</p>
	
									</lol-uikit-content-block>
								</div>
								<lol-uikit-flat-button-group type="dialog-frame">
									<lol-uikit-flat-button tabindex="1" onClick=${() => {window.open(`https://github.com/Elaina69/Elaina-V3/releases/tag/v${update}`,)}}>${_t['l.download']}</lol-uikit-flat-button>
								</lol-uikit-flat-button-group>
							  </lol-uikit-dialog-frame>
						</div>
					</div>
				`
			}
		}
		render(jsx`<${LoaderMenu} />`, root)
	}
	
	window.addEventListener("load", async ()=> {
		const manager = () => document.getElementById('lol-uikit-layer-manager-wrapper')
		const root    = document.createElement('div')
		while (!manager()) await new Promise(r => setTimeout(r, 200))
		await createLoaderMenu(root)
		manager().prepend(root)
		window.setInterval(()=>{
			try {
				let closeButton = document.querySelector("#Elaina-Update > div > lol-uikit-dialog-frame").shadowRoot.querySelector("div > div.lol-uikit-dialog-frame-close-button > lol-uikit-close-button")
				closeButton.addEventListener("click", ()=> {document.getElementById("Elaina-Update").hidden = true})
			}catch{}
		})
	})
}
else if (DataStore.get(`Update-${update}`) && !DataStore.get(`Force-Update`)) {
	async function createLoaderMenu(root) {
		const langCode = document.querySelector("html").lang;
		const langMap = lang.langlist
		const _t = lang[langMap[langCode] || "EN"];
		const { Component, jsx, render } = await import('//esm.run/nano-jsx')
		
		class LoaderMenu extends Component {
			render() {
				return jsx/*html*/`
					<div class="modal" style="position: absolute; inset: 0px; z-index: 8500;" id="Elaina-Update">
						<lol-uikit-full-page-backdrop class="backdrop" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;"></lol-uikit-full-page-backdrop>
						<div class="dialog-confirm" style="display: flex; align-items: center; justify-content: center; position: absolute; inset: 0px;">
							  <lol-uikit-dialog-frame class="dialog-frame" orientation="bottom" close-button="false">
								<div class="dialog-content">
									<lol-uikit-content-block class="app-controls-exit-dialog" type="dialog-small" style="width: 500px;">
										<h5>Elaina_V3 - ${updateType} Update ${update}</h5>
										<hr class="heading-spacer" />

										<p class="Elaina-Update">- Add Manual update message (only available for new theme user or new fresh install</p>
										<p class="Elaina-Update">- Fix watermark bug</p>
										<p class="Elaina-Update">- Fix custom profile</p>
										<p class="Elaina-Update">- Add About Us tab on Settings</p>
										<p class="Elaina-Update">- Add Donate message (only show after you using theme at least 1 hour)</p>
										<p class="Elaina-Update">- Add theme usage time</p>
										<p class="Elaina-Update">- Fix Auto q Console log</p>
										<p class="Elaina-Update">- Update language file</p>
										<p class="Elaina-Update"></p>
										<p class="Elaina-Update"></p>
										<p class="Elaina-Update"></p>
	
									</lol-uikit-content-block>
								</div>
								<lol-uikit-flat-button-group type="dialog-frame">
									<lol-uikit-flat-button tabindex="1" class="button-decline" onClick=${() => {document.getElementById("Elaina-Update").hidden = true}}>${_t['l.close']}</lol-uikit-flat-button>
								</lol-uikit-flat-button-group>
							  </lol-uikit-dialog-frame>
						</div>
					</div>
				`
			}
		}
		render(jsx`<${LoaderMenu} />`, root)
	}
	
	window.addEventListener("load", async ()=> {
		const manager = () => document.getElementById('lol-uikit-layer-manager-wrapper')
		const root    = document.createElement('div')
		while (!manager()) await new Promise(r => setTimeout(r, 200))
		await createLoaderMenu(root)
		manager().prepend(root)
		window.setInterval(()=>{
			try {
				let closeButton = document.querySelector("#Elaina-Update > div > lol-uikit-dialog-frame").shadowRoot.querySelector("div > div.lol-uikit-dialog-frame-close-button > lol-uikit-close-button")
				closeButton.addEventListener("click", ()=> {
					document.getElementById("Elaina-Update").hidden = true
				})
			}catch{}
		})
	})

	DataStore.set(`Update-${update}`, false)
}
//*/