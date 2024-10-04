const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);

async function visualizaDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const totalPessoasMundo = (dados.total_Pessoas_Mundo)/1e9;
    const totalPessoasConectadas = (dados.total_Pessoas_Conectadas)/1e9;
    const tempoMedio = dados.tempo_Medio;
    console.log(dados);
   
   
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('.graficos-texto')
    const container = document.getElementById('graficos-container')
    paragrafo.innerHTML = `No mundo tem <span>${totalPessoasMundo} bilhões </span> de habitantes estão conectados em alguma rede social por um tempo médio de <span> ${tempoMedio}.`

    container.appendChild(paragrafo);

    
}

visualizaDadosGlobais();