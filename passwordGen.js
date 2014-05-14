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
	.default('format', 'newline')
	.default('count', 1)
	.default('chars', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;!?"§$%&/()=')
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
	for (var i = 0; i < (argv.length || 128); i++) {
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
			if (data instanceof Array) data = JSON.stringify(data);
			process.stdout.write(data);
		break;
		case 'stderr':
			if (data instanceof Array) data = JSON.stringify(data);
			process.stderr.write(data);
		break;
		case 'file':
			if (data instanceof Array) data = JSON.stringify(data);
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