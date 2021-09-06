let fs=require('fs');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}
//let dest="/Users/jaivin/Desktop/test";
function fnorganize(route){
    let files=fs.readdirSync(route);
    let dest=path.join(route,"organizefiles");
    if(!fs.existsSync(dest)){
         fs.mkdirSync(dest);
    }
    for(let k=0;k<files.length;k++){
        let newroute=path.join(route,files[k]);
        let stat = fs.lstatSync(newroute);
         
       if(stat.isDirectory()){
            fnorganize(newroute);
        }
       else{ 
       let ext= path.extname(files[k]);
      // console.log(ext);
       for(let i in types){
           for(let j=0;j<types[i].length;j++){
               //console.log(types[i][j]);
               let fif=ext.slice(1);
             
                if(types[i][j]==fif){
                   let q= path.join(dest,i);
                   if(!fs.existsSync(q)){
                        fs.mkdirSync(q);
                   }
                   let w=path.join(route,files[k]);
                   let t=path.join(q,files[k]);
                  // console.log(t);
                   //console.log(w);
                   fs.copyFileSync(w,t);
                }
           }
       } 
    
       }
    }
    
}
module.exports={
    fnorganize:fnorganize
}