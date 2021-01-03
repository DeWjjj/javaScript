function printRaw(strings) {
    console.log('Actual Characters:');
    for (const string of strings) {
        console.log(string);
    }
    console.log('Escaped characters:');
    for (const rawString of strings.raw) {
        console.log(rawString);
    }
}
printRaw`\u00A9${ 'and' }\n`;
//Actual characters: line2
//©
//
//Escaped characters: line6
//\u00A9
//\n
