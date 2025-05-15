import initCustomInputFile from "./custom-input-file.js";

initCustomInputFile(showImage, showImage)

function showImage(value) {
		const imagePreview = document?.querySelector('.preview--photo img')
		const label = document?.querySelector('label[for="input-file"]')

		const file = value[0]
		let filename = file.name

		if (filename.length >= 10) {
			const fileNameParts = filename.split('.')
			filename = filename.slice(0, 8) + "." + fileNameParts[fileNameParts.length - 1]
		}

		label.textContent = filename

		imagePreview.src = URL.createObjectURL(file)
}