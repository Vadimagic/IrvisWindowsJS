const forms = () => {
	const form = document.querySelectorAll("form"),
			input = document.querySelectorAll("input"),
			phoneInputs = document.querySelectorAll('input[name="user_phone"]');

	phoneInputs.forEach(item => {
		item.addEventListener("input", () => {
			item.value = item.value.replace(/\D/, "")
		})
	})

	const message = {
		loading: "Загрузка",
		success: "Спасибо! Мы с вами свяжемся!",
		failure: "Произошла ошибка",
	};

	const postData = async (url, data) => {
		document.querySelector(".status").textContent = message.loading;
		
		let result = await fetch(url, {
			method: "POST",
			body: data
		});

		return await result.text()
	};

	const clearinputs = () => {
		input.forEach(item => {
			item.value = ""
		})
	}

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			item.appendChild(statusMessage)

			const formData = new FormData(item);

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result)
					statusMessage.textContent = message.success
				})
				.catch(() => {
					statusMessage.textContent = message.failure
				})
				.finally(() => {
					clearinputs();
					setTimeout(() => {
						statusMessage.remove()
					}, 3000)
				})
		})
	})
};

export default forms