function contar() {
  const inicioInput = document.getElementById('testeinicio');
  const fimInput = document.getElementById('testefim');
  const passoInput = document.getElementById('testepasso');
  const mostrar = document.getElementById('mostrador');

  const inicio = Number(inicioInput.value);
  const fim = Number(fimInput.value);
  const passo = Number(passoInput.value);

  if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
    mostrar.innerHTML = 'Valores inválidos';
    return;
  }if (inicio < fim){
    mostrar.innerHTML = 'Contando...'
    for(c = inicio; c <= fim; c += passo){
    mostrar.innerHTML += `${c}\u{1F449}`
    }
  mostrar.innerHTML += `\u{1F3C1}`
  }else{
    for(c = inicio; c >= fim; c-= passo){
        mostrar.innerHTML += `${c} \u{1F449}`
    }
    mostrar.innerHTML += `\u{1F3C1}`
  }
}