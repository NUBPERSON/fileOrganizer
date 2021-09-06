let treeobj=require('./commands/tree');
let helpobj=require('./commands/help');
let organizeobj=require('./commands/organize');
let input=process.argv.slice(2);
let command=input[0];
let filespath=input[1];

switch(command){
    case "help":
        helpobj.fnhelp();
        break;
    case "tree":
        console.log("\n")
        treeobj.fntree(filespath,1);
        console.log("\n");
        break;
    case "organize":
        organizeobj.fnorganize(filespath);
        break;
    default:
        console.log("invalid input");            
}