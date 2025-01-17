/*
File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman

After the program runs, the output should be

hello world my name is raman
*/

const fs = require('fs');
const path = require('path');

function cleanFile(filePath)
{
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if (err)
        {
            console.error('Error reading file:', err);
            return;
        }

        // Remove extra spaces
        const cleanedData = data
            .split(/\s+/)  // Split by any whitespace
            .filter(Boolean)  // Remove empty elements
            .join(' ');  // Join by a single space

        // Write the cleaned content back to the file
        fs.writeFile(filePath, cleanedData, 'utf8', (err) =>
        {
            if (err)
            {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File cleaned successfully');
        });
    });
}

// Example usage
const filePath = path.join(__dirname, 'example.txt');  // Replace 'example.txt' with your file
cleanFile(filePath);