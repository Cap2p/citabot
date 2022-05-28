import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { getCitation } from '../api/getKamelottCitation'

export const Citation: Command = {
    name: "citation",
    description: "get random citation",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        const content = await getCitation()
        await interaction.followUp({
            ephemeral: true,
            content: content.data.citation.citation,
        });
    }
};