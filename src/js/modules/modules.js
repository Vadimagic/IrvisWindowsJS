import modals from "./modals"
import tabs from "./tabs"
import forms from "./forms"
import changeModalState from "./changeModalState"
import timer from "./timer"
import images from "./images"

const modules = () => {

	let modalState = {form: 0};

	changeModalState(modalState)
	modals();
	tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
	tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
	tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", 'do_image_more', 'inline-block');
	timer("#timer", "2021-11-20")
	images()
	forms(modalState);
}

export default modules