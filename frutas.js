const fruta = "🍉";

const arrayFrutas = ["🍋","🍒","🥝","🍎"];

// solo se puede utilizar una vezz el "export default"
export default function naranja (){
    console.log("🍊");
}

class Verduras {
    constructor(nombre){
        this.nombre = nombre;
    }
}
const verdura = "🍆";

export {fruta, arrayFrutas, Verduras, verdura}