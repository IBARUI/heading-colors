import { Plugin } from 'obsidian';

export default class HeadingColorsPlugin extends Plugin {
	async onload() {
		console.log('Heading Colors plugin loaded');
	}

	onunload() {}
}
