const datas=[{name:"Rajat",job:"Microsoft"},{name:"Dikss",job:"Doc"}]

function getDatas(){
  
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000)
}


// function createData(newData){
//     setTimeout(()=>{
//         datas.push(newData);
        
//     },2000)
// }


//data is not getting updated here. Use getDatas a s callback
// function createData(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback();
//     },2000)
// }

//createData({name:"Som",job:"Journalist"},getDatas)


//promises

function createData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
                resolve();
                if(false){
                    reject("Error")
                }
            },2000)
    }
)}

createData({name:"Som",job:"Journalist"}).then(getDatas).catch(err=>console.log(err));


async function start(){
    await createData({name:"Som",job:"Journalist"})
    getDatas();
}
start();