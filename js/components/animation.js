const sr = ScrollReveal({
    duration: 2400,
    interval: 100,
})

sr.reveal(`.animation__left`,{
   distance: '120px',
   origin: 'left',
})

sr.reveal(`.animation__right`,{
    distance: '120px',
    origin: 'right',
 })
