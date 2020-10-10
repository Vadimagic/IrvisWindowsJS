const modalTime = (selector, time) => {
	setTimeout(() => {
		document.querySelector(selector).style.display = "block"
		document.querySelector(selector).classList.add('modal-open')
	}, time)
}

export default modalTime