import { message } from "prompt";

const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1- QR Code ou 2- Password)",
        pattern: /^[1-2]+$/,
        message: "Escolha inválida. Digite 1 para QR Code ou 2 para Password.",
        required: true,
    }
]