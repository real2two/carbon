import {
	Button,
	type ButtonInteraction,
	ButtonStyle,
	Command,
	type CommandInteraction,
	type ComponentData,
	LinkButton,
	Row
} from "@buape/carbon"

export default class ButtonCommand extends Command {
	name = "button"
	description = "A simple command with a button!"
	defer = true

	async run(interaction: CommandInteraction) {
		await interaction.reply({
			content: "Look at this button!",
			components: [new Row([new ClickMeButton(), new DocsButton()])]
		})
	}
}

class ClickMeButton extends Button {
	customId = "click-me"
	label = "Click me!"
	style = ButtonStyle.Primary

	constructor() {
		super()
		this.customId = `click-me:time=${Date.now()}`
	}

	async run(interaction: ButtonInteraction, data: ComponentData) {
		await interaction.reply(
			`You clicked the button that was generated at time ${data.time}, ${interaction.user?.username ?? "friend"}!`
		)
	}
}

class DocsButton extends LinkButton {
	label = "Carbon Documentation"
	url = "https://carbon.buape.com"
}
