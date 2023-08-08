let itens = [
    {
        "imagem": "./imagens/produtos/Camiseta.svg",
        "titulo": "Camisa conforto",
        "sobre": "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        "preco": "R$ 70,00",
        "id": "#exampleModalCamisa"
    },
    {
        "imagem": "./imagens/produtos/Calça.svg",
        "titulo": "Calça alfaiataria",
        "sobre": "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        "preco": "R$ 180,00",
        "id": "#exampleModalCalca"
    },
    {
        "imagem": "./imagens/produtos/Tenis.svg",
        "titulo": "Tenis chunky",
        "sobre": "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        "preco": "R$ 250,00",
        "id": "#exampleModalTenis"
    },
    {
        "imagem": "./imagens/produtos/Jaqueta.svg",
        "titulo": "Jaquetas jeans",
        "sobre": "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        "preco": "R$ 150,00",
        "id": "#exampleModalJaqueta"
    },
    {
        "imagem": "./imagens/produtos/óculos.svg",
        "titulo": "Óculos redondo",
        "sobre": "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        "preco": "R$ 120,00",
        "id": "#exampleModalOculos"
    },
    {
        "imagem": "./imagens/produtos/Bolsa.svg",
        "titulo": "Bolsa coringa",
        "sobre": "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        "preco": "R$ 120,00",
        "id": "#exampleModalBolsa"
    }
]


// const btn = document.querySelector("#buscar");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     const produtos = document.getElementById("produtos");
//     let input = inputValor.toLowerCase();
//     itens.map(prod => {
//         if(input == prod.titulo.toLowerCase()){
//             console.log(prod.titulo)
//             produtos.innerHTML = `
//             <div class="card" style="width: 20rem;">
//             <img src=${prod.imagem} alt="Camisa" class="card-img-top">
//             <div class="card-body">
//             <h5 class="card-title">${prod.titulo}</h5>
//             <p class="card-text">${prod.sobre}</p>
//             <p>${prod.preco}</p>
//             <button type="button" data-bs-toggle="modal" data-bs-target="${prod.id}" class="btn btn-primary">veja mais</button>
//             </div>
//             </div>
//             `
//         }
//     })
// })
