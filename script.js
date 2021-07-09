new TypeIt("#typedjs",{
    speed: 150,
    startDelay: 3000
})
    .type(" ", {delay: 3500})
    .delete(11,{delay: 100})
    .type("front",{delay: 100})
    .move('START')
    .move(1, {delay: 100})
    .delete(1)
    .type('F')
    .move('END')
    .type("-End Web Developer")
    .go();
