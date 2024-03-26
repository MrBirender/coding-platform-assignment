function getData(data){
    if(data === String || data === Boolean){
        console.log("error")
    }

    else{
        if(data % 2 == 0){
            setTimeout(function(){console.log("It's is an Even Number.")}, 4000)
        }

        else{
            setTimeout(function(){console.log("It's is a Odd Number.")}, 2000)
            
        }
    }
}

getData(3)
