const yargs=require('yargs');
const actions=require('./actions');

let command=yargs.argv._[0];
let title=yargs.argv.title;
let desc=yargs.argv.desc;
let author=yargs.argv.author;

if(command=="add"){
    if(title && desc && author){
        actions.add(title, desc, author);
    }

}
else if(command=="remove"){
    if(title){
        actions.remove(title);
    }
}
else if(command=="print"){
    actions.print();

}

else if(command=="update"){
    if(title){
        actions.update(title,desc,author);
    }

}

else{
    console.log("unkown Command");
}

