const expandBtnEls = document.querySelectorAll('.expand__btn')

expandBtnEls.forEach(function (i) {
  i.addEventListener('click', function () {
    i.parentNode.classList.toggle('open')
  })
})

// const expandContentEls = document.querySelectorAll('.expand__content')
// expandContentEls.forEach(function (i) {
//   console.log(i.scrollHeight)
// })
