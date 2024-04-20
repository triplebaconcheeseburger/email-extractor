const fs = require('fs');
const readline = require('readline');

// Function to extract email addresses from a string
function extractEmails(text) {
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    return text.match(regex) || [];
}

// Function to read and parse the MBOX file line by line
function extractEmailsFromMbox(filePath, outputFilePath) {
    return new Promise((resolve, reject) => {
        const extractedEmails = [];

        const rl = readline.createInterface({
            input: fs.createReadStream(filePath, 'utf8'),
            crlfDelay: Infinity
        });

        rl.on('line', line => {
            const emails = extractEmails(line);
            extractedEmails.push(...emails);
        });

        rl.on('close', () => {
            fs.writeFile(outputFilePath, extractedEmails.join('\n'), 'utf8', error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(outputFilePath);
                }
            });
        });

        rl.on('error', error => {
            reject(error);
        });
    });
}

// Usage example
const mboxFilePath = 'path/to/your/mbox/export.txt'; // Replace 'export.txt' with the actual file name
const outputFilePath = 'path/to/your/output/output.txt'; // Replace 'output.txt' with the desired output file name

extractEmailsFromMbox(mboxFilePath, outputFilePath)
    .then(outputFile => {
        console.log(`Output written to ${outputFile}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
