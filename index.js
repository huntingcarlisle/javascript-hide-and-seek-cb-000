
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

function