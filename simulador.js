let cuenta = 0;
let menuInicial = confirm("Bienvenido a Amazor! Desea comprar algun articulo?");
let menuLoop = confirm("Desea comprar algun articulo?");
let total = 0;
const articulos = [
    {
      "title": "Funko pop",
      "price": 123.45,
      "id": 1
    },
    {
      "title": "Figura de Batman",
      "price": 234.56,
      "id": 2
    },
    {
      "title": "Camiseta",
      "price": 345.67,
      "id": 3
    },
    {
      "title": "Set de libros",
      "price": 3662.25,
      "id": 4
    }
  ]
const totalPedido = function(totalN, nuevoPrecio) {
    return totalN + nuevoPrecio
}

if (menuInicial){
    console.log(articulos)
    while (menuLoop) {
        let elegirProducto = parseInt(prompt("Ingrese el Id del producto que desea agregar"));

        switch (elegirProducto) {
            case 1:
                console.log('Funko pop Agregado');
                total = totalPedido(total,articulos[0].price)
                break;
            case 2:
                console.log('Figura de Batman Agregado');
                total = totalPedido(total,articulos[1].price)
                break;
            case 3:
                console.log('Camiseta Agregado');
                total = totalPedido(total,articulos[2].price)
                break;
            case 4:
                console.log('Set de libros Agregado');
                total = totalPedido(total,articulos[3].price)
                break;
            default:
              console.log(`No tenemos el producto con el ID ${elegirProducto}.`);
              break;
          }

        menuLoop = confirm("Desea Agregar algun otro producto?");

        if(!menuLoop){
            console.log(`el total de su compra es ${total}`)
        }
    }
}else {
    console.log("Gracias por siempre elegir amazor");
}