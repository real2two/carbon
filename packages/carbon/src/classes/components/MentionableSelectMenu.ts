import {
	type APIMentionableSelectComponent,
	ComponentType
} from "discord-api-types/v10"
import { AnySelectMenu } from "../../abstracts/AnySelectMenu.js"
import type { MentionableSelectMenuInteraction } from "../../internals/MentionableSelectMenuInteraction.js"
import type { ComponentData } from "../../types/index.js"

export abstract class MentionableSelectMenu extends AnySelectMenu {
	readonly type = ComponentType.MentionableSelect as const
	readonly isV2 = false
	defaultValues?: APIMentionableSelectComponent["default_values"]
	run(
		interaction: MentionableSelectMenuInteraction,
		data: ComponentData
	): unknown | Promise<unknown> {
		// Random things to show the vars as used
		typeof interaction === "string"
		typeof data === "string"
		return
	}

	serializeOptions() {
		return {
			type: this.type,
			default_values: this.defaultValues
		}
	}
}
