function cellAuto (input) {
    var lastLine = input.replace(/0/g, ' ').replace(/1/g, 'x'),
        output = lastLine;
    for (var i = 0; i < 25; i++) {
        for (var j = 0, newLine = ''; j < lastLine.length; j++) {
            newLine += (lastLine[j - 1] == 'x' ^ lastLine[j + 1] == 'x') ? 'x' : ' ';
        }
        output += '\n' + (lastLine = newLine);
    }
    return output;
}
cellAuto('00000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000');
