if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready(){

    var rowList = document.getElementsByClassName('itemRows')
    var buttonVoid = document.getElementById('voidButton')

    buttonVoid.addEventListener('click', voidlist)

    function voidlist(){
        
        for(var i = 0; i < rowList.length; i+2 ){ 
            var rows = rowList[i]
            console.log(rows)
            if(rows == undefined){
                console.log("undefined at "+[i])
                return
            }
            rows.remove()
            console.log("removed row")
        }
    }   

}

