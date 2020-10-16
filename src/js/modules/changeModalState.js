import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
			windowWidth = document.querySelector('#width'), 
			windowHeight = document.querySelector('#height'), 
			windowType = document.querySelector('#view_type'), 
			windowProdile = document.querySelectorAll('.checkbox');
			
	windowForm.forEach((item, i) => {
		item.addEventListener('click', () => {
			state.form = i;
		})
	})

	windowWidth.addEventListener('input', () => {
		state.width = windowWidth.value;
	})

	windowHeight.addEventListener('input', () => {
		state.height = windowHeight.value;
	})

	windowType.addEventListener('click', () => {
		state.type = i;
	})
};

export default changeModalState