let dados;

const input = document.querySelector("input[type='text']");

const lerAPI = async () =>{ 
    try{
        const resposta = await fetch('https://dummyjson.com/products?limit=10');
        const produtosJSON = await resposta.json();
        return produtosJSON.products;
        
    }catch(erro){
        console.log('erro', erro);
    }
}

const popularLista = (dados) => {
    const listaProdutosUI  = document.querySelector('.lista-produtos');
    listaProdutosUI.innerHTML = '';
    for(let dado of dados){
        const {title, description} = dado;
        listaProdutosUI.innerHTML += `
            <li>
                <p>${title}</p>
                <p>${description}</p>
            </li>
        `
    }
}

const renderizar = async () =>{
    dados = await lerAPI();
    popularLista(dados);
}

const filtrar = (valor) =>{
   let filtered = dados.filter((dado) => dado.title.includes(valor))
   popularLista(filtered);
}

input.addEventListener('input', () => {
    filtrar(input.value);
})


renderizar();
