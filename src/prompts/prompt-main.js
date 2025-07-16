import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow ("Escolha a ferramenta: 1- QR Code ou 2- Password"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha inválida. Digite 1 para QR Code ou 2 para Password."),
        required: true,
    }
]

export default mainPrompt;