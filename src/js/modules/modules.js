import modals from "./modals"
import modalTime from "./modalTime"
import tabs from "./tabs"
import forms from "./forms"
import changeModalState from "./changeModalState"

const modules = () => {

	let modalState = {};

	modals();
	modalTime('.popup_engineer', 60000);
	tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
	tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
	tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", 'do_image_more', 'inline-block');
	forms();
	changeModalState(modalState)
}

export default modules