var div=document.getElementById('parent');
var x=document.querySelector('#parent').children;


const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";


for(let i=0;i<x.length;i++){
    if(i===2){
        x[i].append(para);
    }
}
