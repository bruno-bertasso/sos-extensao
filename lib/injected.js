window.Guru = (() => {
	let observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			console.log(mutation.type);
		});
	})

	let target = document.querySelector("body")

	let config = { attributes: true, childList: true, characterData: true }
	const observe = () => {
		observer.observe(target, config)
	}
	const disconnect = () => {
		observer.disconnect()
	}

	return {
		observe,
		disconnect
	}

})()