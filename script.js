
const lerAPI = async () =>{ 
    try{
        const resposta = await fetch('https://dummyjson.com/products?limit=10');
        const produtosJSON = await resposta.json();
        return produtosJSON.products;
        
    }catch(erro){
        console.log('erro', erro);
    }
}

const popularLista = async () =>{
    const dados = await lerAPI();
    const listaProdutosUI  = document.querySelector('.lista-produtos');
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
popularLista();