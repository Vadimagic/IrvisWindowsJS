import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
			windowWidth = document.querySelectorAll('#width'), 
			windowHeight = document.querySelectorAll('#height'), 
			windowType = document.querySelectorAll('#view_type'), 
			windowProdile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width')
	checkNumInputs('#height')

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				if (elem.length > 1) {
					state[prop] = i;
				} else {
					state[prop] = item.value
				}
			})
		})
	}

	bindActionToElems('click', windowForm, 'form')
	bindActionToElems('input', windowWidth, 'width')
	bindActionToElems('input', windowHeight, 'height')
};

export default changeModalState