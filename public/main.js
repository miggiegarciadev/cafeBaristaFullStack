var trash = document.getElementsByClassName("fa-trash");
const orderItem = document.querySelectorAll('.orderItem')
document.getElementById('trash').addEventListener('click',trashCompleteItems)
// document.getElementsByClassName('submit').addEventListener('click', submit)



if (orderItem.length > 0)
orderItem.forEach(order => order.addEventListener('click', markCompleted));


function markCompleted(click) {
  console.log(click.currentTarget.innerText);
  // click.currentTarget.classList.toggle('done')
  fetch('messages', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name':click.currentTarget.innerText,
      'order':click.currentTarget.innerText,
      'size':click.currentTarget.innerText,
      'completed': click.currentTarget.classList.contains('done')
    })
  }).then(function(){window.location.reload()})
}

function trashCompleteItems(){
  fetch('trashCompleteItems', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
  })
  .then(window.location.reload(''))
}

function submit(){
  document.querySelector('h3').innerText= 'Thank You!'
  console.log('ello')
}
