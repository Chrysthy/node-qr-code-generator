import handle from "./handle";

const { default: chalk } = require("chalk");

async function createPassword() {
    console.log(chalk.blue("Password"));

    const password = await handle();
    console.log(password);  
    
}

export default createPassword;