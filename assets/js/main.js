const criaCaluladora = () => {
  return {
    display: document.querySelector('.display'),



    clearDisplay() {
      this.display.value = ''
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta() {
      let conta = this.display.value
      
      try{
        conta = eval(conta);
        if(!conta) {
          alert('Conta invalida')
        }
        this.display.value = String(conta)
      }
      catch(e) {
        alert('Conta Invalida')
        return
      }
    },




    inicia() {
      this.cliqueBotoes()
    },

    cliqueBotoes() {
    document.addEventListener('click', e => {
      const el = e.target

      if(el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText);
      }
      if(el.classList.contains('btn-clear')) {
        this.clearDisplay()
      }
      if(el.classList.contains('btn-del')) {
        this.apagaUm()
      }
      if(el.classList.contains('btn-eq')) {
        this.realizaConta()
      }
    })
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  }
}


const calculadora = criaCaluladora()

calculadora.inicia()