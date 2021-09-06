let fs=require('fs');
let path=require('path');
function fntree(route,cnt){
   let files=fs.readdirSync(route);
   let content="";
   for(let i=0;i<cnt;i++){
       content+="\t";
   }

   console.log(content+ path.basename(route));
 
    for(let i in files){
        let data="";
        let newroute=path.join(route,files[i]); 
        let stat = fs.lstatSync(newroute);
         
        if(stat.isDirectory()){
             fntree(newroute,cnt+1);
        }
        else{
            for(let q=0;q<cnt;q++)
              data+="\t";
            if(i!=0)
            data+="\t"+"|--"+files[i];
            else
            data+="\t"+"|--"+files[i];
        }
        console.log(data);
       }
      
}
module.exports={
    fntree:fntree
}