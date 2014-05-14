// simple password generator
// (c) 14.05.2014 by Florian Wendelborn
// license: MIT

var argv = require('yargs')
	.alias('count', 'n')
	.alias('length', 'l')
	.alias('chars', 'c')
	.alias('format', 'f')
	.alias('output', 'o')
	.default('output', 'stdout')
	.default('format', 'array')
	.default('chars', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;!?"§$%&/()=')
	.demand('count')
	.demand('length')
	.argv;

var fs = require('fs');

function generate () {
	var data = [];
	for (var i = 0; i < argv.count; i++) {
		data.push(random());
	}
	output(format(data));
}

function random () {
	var data = '';
	for (var i = 0; i < argv.length; i++) {
		data += argv.chars[Math.floor(Math.random()*argv.chars.length)];
	}
	return data;
}

function format (data) {
	switch (argv.format) {
		case 'array':
			return data;
		break;
		case 'newline':
			return data.join('\n');
		break;
		case 'number':
			var outputString = "";
			for (var i = 0; i < data.length; i++) {
				outputString += i + ': ' + data[i] + '\n';
			}
			return outputString;
		break;
	}
}

function output (data) {
	switch (argv.output) {
		case 'stdout':
			process.stdout.write(data);
		break;
		case 'stderr':
			process.stdout.write(data);
		break;
		case 'file':
			if (!argv.file) {
				console.error('require --file path for --output file');
				process.exit(1);
			} else {
				fs.writeFileSync(argv.file, data);
			}
		break;
		default:
			console.error('invalid output format ' + argv.output);
	}
}

// run it
generate();