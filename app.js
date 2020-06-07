const chalk = require('chalk')
const yargs = require('yargs')
const notes =  require('./notes.js')

//customize yargs version
yargs.version('1.1.0')
//create add command
yargs.command({
  command: 'add',
  describe : 'Add a new note',

  builder: {
    title:{
      demandOption:true,    // demand : true
      describe : 'Note title',
      type: 'string'
    },
    body: {
      demandOption:true,
      describe: 'Note body',
      type: 'string'
    }
  }  ,
  handler(argv){
    notes.addNote(argv.title,argv.body);
  }

})
//create remove command
yargs.command({
  command: 'remove',
  describe : 'Remove a note',
  builder: {
    title:{
      demandOption:true,    // demand : true
      describe : 'Note title',
      type: 'string'
    }},
  handler(argv) {
    console.log('Removing a note');
    notes.removeNote(argv.title);

  }
})

//create list command
yargs.command({
  command: 'list',
  describe : 'List the notes',
  handler() {
    console.log(chalk.inverse('Listing notes'));
    console.log(notes.listNotes());

  }
})
//create read command
yargs.command({
  command: 'read',
  describe : 'Reading a note',
  builder:{
    title:{
      demandOption:true,    // demand : true
      describe : 'Note title',
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Reading a note');
    console.log(notes.readNote(argv.title));

  }
})

//add,remove,read,list


yargs.parse()  //parses all of the argumets with details provided
//console.log(yargs.argv)
