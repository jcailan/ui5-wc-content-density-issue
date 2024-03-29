import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/DatePicker.js";
import "@ui5/webcomponents/dist/MessageStrip.js";
import "@ui5/webcomponents/dist/Dialog.js";
import "@ui5/webcomponents/dist/Switch.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/ColorPalette.js";
import "./components/Color";

const openBtn = document.getElementById("openDialogButton");
const closeBtn = document.getElementById("closeDialogButton");
const dialog = document.getElementById("hello-dialog");

openBtn.addEventListener("click", () => {
	dialog.show();
});
closeBtn.addEventListener("click", () => {
	dialog.close();
});
