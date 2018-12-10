
function getFirstSelector(selector) {
  let element = document.querySelectorAll(selector)
  return element[0]
}

function nestedTarget() {
  let element = document.getElementById('nested').getElementsByClassName('target')
  return element[0]
}

function deepestChild() {
  let lastChild = document.getElementById('grand-node').querySelectorAll('div')
  return lastChild[lastChild.length - 1]
}

<<<<<<< HEAD
function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString()
  }
  
}
=======
function
>>>>>>> eb559517dd77b30643cbb9f00178b0d0d7c38013
