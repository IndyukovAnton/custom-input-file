export default function initCustomInputFile(callbackChange = null, callbackDrop = null) {
	const inputFiles = document?.querySelectorAll('[custom-input-file]')
	let file = null

	if (!inputFiles) { return }

	inputFiles.forEach(parent => {
		const input = parent.querySelector('input[type="file"]')

		input.addEventListener('change', (e)=> {
			if (!callbackChange) { return }

			file = input.files

			callbackChange(file)
		})

		input.addEventListener('Drop', (e)=> {
			if (!callbackDrop) { return }

			file = input.files

			callbackDrop(file)
		})
	})
}

