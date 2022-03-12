function calorOufrio(temperatura){
    if (temperatura > 30){
        console.log("Está calor!")
    }
    if(temperatura < 20){
        console.log("Está frio!")
    }else{
        console.log("A temperatura está boa!");
    }
}

calorOufrio(40);
calorOufrio(25);
calorOufrio(16);