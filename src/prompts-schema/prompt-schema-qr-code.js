import chalk from "chalk";

const promptSchemaQRCode = [

    {
        name: 'link',
        description: chalk.yellow("Digite o link para gerar o QR Code")
    },

    {
        name: 'type',
        description: chalk.yellow("Escolha o tipo de QR Code: 1- Imagem, 2- Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha inválida. Digite 1 para Imagem ou 2 para Terminal."),
        required: true
    }
]

export default promptSchemaQRCode;