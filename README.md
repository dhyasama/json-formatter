# Pretty print a JSON file

Whipped this up because someone gave me a 35mb file without whitespace and Atom couldn't open it.

Takes two arguments:

1. source file - the file you want formatted
2. destination file (optional) - the file the formatted json will be written to; defaults to output.json;

Run like so: node index.js my-ugly-file.json my-beautiful-file.json

Or you can use jq (https://stedolan.github.io/jq/)

cat your-input.json | jq '.'
