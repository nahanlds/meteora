import * as funcoes from './test.js';

const produtos = [
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

const camisa = document.getElementById("cardCamisa")
const bolsa = document.getElementById("cardBolsa");
const calcados = document.getElementById("cardCalcados");
const calca = document.getElementById("cardCalcas");
const casaco = document.getElementById("cardCasacos");
const oculos = document.getElementById("cardOculos");


camisa.addEventListener('click', (e) => {
    e.preventDefault()
    resolv(camisa)
})

bolsa.addEventListener('click', (e) => {
    e.preventDefault();
    resolv(bolsa)
})

calca.addEventListener("click", (e) => {
    e.preventDefault(); 
    const calcas =funcoes.filtra("calça")
    funcoes.render(calcas)
})


calcados.addEventListener("click", (e) => {
    e.preventDefault();
    const tenis =funcoes.filtra("tenis")
    funcoes.render(tenis)
})

casaco.addEventListener("click", (e) => {
    e.preventDefault();
    const casacs =funcoes.filtra("jaqueta")
    funcoes.render(casacs)
})

oculos.addEventListener("click", (e) => {
    e.preventDefault();
    resolv(oculos)
})

function resolv(element) {
    const paragrafo = element.getElementsByTagName('p')[0].textContent;
    const result = funcoes.filtra(paragrafo);
    
    funcoes.render(result)
}