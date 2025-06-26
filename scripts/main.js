const buttonElement = document.querySelectorAll('.show-social-icons')

buttonElement.forEach((button) => {
  button.addEventListener('click', (event) => {
    const whiteFooter = document.querySelector('.article-footer-info')

    const ashFooter = document.querySelector('.share-article-wrapper')

    const buttonWrapper = document.querySelector('.button-wrapper')

    const shareIcon = document.querySelector('.share-icon')

    const isHidden = whiteFooter.classList.contains('is-hidden')

    if(!isHidden) {
      whiteFooter.classList.add('is-hidden')

      ashFooter.classList.remove('hidden')
      buttonWrapper.classList.add('is-clicked-button')
      shareIcon.classList.add('is-clicked-fill')
    } else {
      whiteFooter.classList.remove('is-hidden')

      ashFooter.classList.add('hidden')
      buttonWrapper.classList.remove('is-clicked-button')
      shareIcon.classList.remove('is-clicked-fill')
    }
  })
})