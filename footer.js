fetch('footer.html')
  .then(r=>r.text())
  .then(h=>document.body.insertAdjacentHTML('beforeend',h))
  .catch(e=>console.log('Footer error:',e))
