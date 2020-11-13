const scroll = (toScroll) =>{
  // прокрутка плавная
  document.querySelector(toScroll).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export default scroll