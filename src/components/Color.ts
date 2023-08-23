import "@ui5/webcomponents/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_horizon");

import Base from "./Base";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/ColorPalette";
import "@ui5/webcomponents/dist/ColorPaletteItem";

const style = require("../styles/Color.css").toString();

const html = `
	<div>
		<button id="button">Open</button>
		<div id='content'></div>
	</div>
`;

export interface ColorData {
	name: string;
}

export default class Color extends Base {

	constructor () {
		super();
	}

	private _data: ColorData[];

	/**************************************************************************
	 * GETTERS AND SETTERS
	 **************************************************************************/

	static get observedAttributes(): string[] {
		return Base.observedAttributes.concat(["data"]);
	}

	get htmlTemplate(): string {
		return html;
	}

	get styleTemplate(): string {
		return style;
	}

	get data(): ColorData[] {
		return this._data;
	}

	set data(value: ColorData[]) {
		this._data = value;
		this.setAttribute("data", "");
	}

	/**************************************************************************
	 * METHODS
	 **************************************************************************/

	connectedCallback(): void {
		super.connectedCallback();

		const button = this.shadowRoot.querySelector("#button");
		button.addEventListener("click", () => {
			const container = this.shadowRoot.querySelector("#content");
			container.innerHTML = `
			<ui5-color-palette>
				<ui5-color-palette-item value="darkblue" class="ui5-content-density-compact"></ui5-color-palette-item>
			</ui5-color-palette>
			<ui5-button class="ui5-content-density-compact">test</ui5-button>
			`;
		});
	}

	// disconnectedCallback(): void {}

	// adoptedCallback(): void {}

	attributeChangedCallback(name: string): void {
		if (name === "data") {
			this.render(this.data);
		}
	}

	render(data: ColorData[]): void {
		// const list = this.shadowRoot.querySelector("#list");
		// let template = "";

		// if (data) {
		// 	list.setAttribute("class", "showdata");
		// 	for (const object of data) {
		// 		template += `<ui5-li>Hello ${object.name}!</ui5-li>`;
		// 	}
		// } else {
		// 	list.removeAttribute("class");
		// }

		// list.innerHTML = template;
	}
}

customElements.define("riz-color", Color);