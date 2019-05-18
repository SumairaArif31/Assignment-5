const fs=require('fs');
/*------Add action is here  -------*/ 

const add=(title, desc, author) =>{
   //notes array list
    let notes=[];
 try{
     //reading JSOn file
     notes=JSON.parse(fs.readFileSync("notes.json"));
 }catch(e){
     //console.log(e);
 }
 //Finding  same note if it is already available
 let index=notes.findIndex((x)=>x.title==title);
 //if index = -1 it means that note is not availble in notes.json file
 if(index==-1){
     notes.push({title, desc, author});

     console.log("New Note has been added")
 }else{
    console.log("Given note is already avaialble");
 }
fs.writeFileSync("notes.json", JSON.stringify(notes)); 
 
}

/*------Remove action is here  -------*/ 

const remove=(title)=>{
    let notes=[];
    try{
        //reading JSOn file
        notes=JSON.parse(fs.readFileSync("notes.json"));
    }catch(e){
        //console.log(e);
    }

    //findind the notess titles which which does not match given title
    const filteredlist=notes.filter((x)=>x.title != title);
    fs.writeFileSync("notes.json", JSON.stringify(filteredlist)); 
    console.log('note removed');
}

/*------Update action is here  -------*/ 

const update=(title, desc,author)=>{
    let notes=[];
    try{
        //reading  JSON file
        notes=JSON.parse(fs.readFileSync("notes.json"));
    }catch(e){
        //console.log(e);
    }
    let index=notes.findIndex((x)=>x.title==title);
    //const filteredlist=notes.filter((x)=>x.title == title);
    if(index==1){
        console.log("title found and updated");
        notes[index].desc = desc;
        fs.writeFileSync("notes.json", JSON.stringify(notes)); 

        notes[index].author = author;
        fs.writeFileSync("notes.json", JSON.stringify(notes));
        
    }
    else{
        console.log("Title Not Found");
    }
}

/*------Print Action is here  -------*/ 

const print=()=>{
    let notes=[];
    try{
        //reading JSON file
        notes=JSON.parse(fs.readFileSync("notes.json"));
    }catch(e){
        //console.log(e);
    }
    console.log(notes);

}

module.exports={
    add,
    remove,
    print,
    update
}