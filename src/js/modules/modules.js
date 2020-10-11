import modals from "./modals"
import modalTime from "./modalTime"
import tabs from "./tabs"
import forms from "./forms"

const modules = () => {
	modals();
	modalTime('.popup_engineer', 60000);
	tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
	tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
	forms()
}

export default modules