const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

// adicionando a funcionalidade para clicar no botão
button.addEventListener('click', add)
form.addEventListener('change', save)


//função de click( execução)
function add() {

  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = '07/01'

  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia já incluso")
    return
  }

  alert('Adicionado com Sucesso')
   nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

