import prompt from 'prompt'
import mainPrompt from './prompts-schema/prompt-schema-main.js'
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';


async function main() {

    prompt.get(mainPrompt, async (err, choose) => {

        if (choose.select == 1) await createQRCode();

        if (choose.select == 2) await createPassword();

    })

}

main();