# Email Extractor

This is a simple Node.js script for extracting email addresses from an MBOX file. It reads the content of the MBOX file, extracts email addresses from each message, and outputs them to a text file. I am a development student and I woudl appreciate any and all feedback. Thanks everyone!

## Features

- Extracts email addresses from an MBOX file.
- Outputs the extracted email addresses to a text file.

## Prerequisites

Before running this script, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- MBOX file containing emails

## Installation

2. Navigate to the project directory:
```
cd email-extractor
```

3. Install dependencies:
```
npm install
```
## Usage

1. Place your MBOX file (with the .txt extension) in the project directory.
2. Open a terminal and navigate to the project directory.
3. Run the script with the following command, replacing your_mbox_file.txt with the name of your MBOX file:
```
node extractEmails.js your_mbox_file.txt
```
4. The script will process the MBOX file and output the extracted email addresses to a file named output.txt in the project directory.


## Example
Suppose you have an MBOX file named emails.mbox.txt containing emails. To extract email addresses from this file, run:
```
node extractEmails.js emails.mbox.txt
```

The script will generate an output.txt file containing the extracted email addresses.

