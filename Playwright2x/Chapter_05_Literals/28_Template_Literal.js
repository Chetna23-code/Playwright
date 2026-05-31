// Template Literal

let firstName = "Chetna";
let fullName = `Hi ${firstName} Toor`;
console.log(fullName);

//Real automation example 

let env = "staging";
env = "prod"
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

//Playwight locator use template literals
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();


//Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

//API Payload
const testCase = "checkout_flow";
const timestamp = DataTransfer.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

const username = 'chetna';
const role = 'admin';


const payload = `{
"user": "${username}",
"role":  "${role}";
"timestamp": "${new Data().toISOString()}"

}`;

console.log(payload);