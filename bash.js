// // console.log(process)
// console.log (new Date('November, 6, 2017'))
// console.log (new Date().toString())
// // console.log (process)
// // Mon Nov  6 11:42:07 EST 2017

// // process.mainModule.paths[0]
// console.log(process.cwd())
// process.cwd()

// console.log(Object.keys(process))

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

 
if (cmd === 'pwd') console.log(process.cwd())
if (cmd === 'date') console.log(new Date().toString())

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');


});

// if (user input === "pwd") then process.cwd()