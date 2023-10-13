let output=document.getElementById('input')

function show(num){
    output.value+=num
   
}

// function equal(){
//     output.value=eval(output.value)
// }

function equal(){
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value="Error!!!"
    }
}

function clr(){
    output.value= ""
}

function del(){
    output.value=output.value.slice(0,-1)
}