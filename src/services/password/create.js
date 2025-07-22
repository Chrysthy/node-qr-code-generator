import handle from "./handle.js";
import chalk from "chalk";

async function createPassword() {
    console.log(chalk.blue("Password"));

    const password = await handle();
    console.log(password);  
    
}

export default createPassword;