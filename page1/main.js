let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        // markers:true,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})
let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pageD",
        // markers:true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})
tl
    .to(".top", {
        top: "-50%"
    }, 'a')
    .to(".bottom", { bottom: "-50%" }, 'a')
    .to("#toph", {
        bottom: "-50%"
    }, 'a')
    .to("#bottomh", { top: "-50%" }, 'a')

t2
.to(".text",{
    top:"-7%",
},'a')
.to("#card-one",{
    top:"35%"
},'a')
.to("#card-two",{
    top:"130%"
},'a')

.to("#card-two",{
    top:"42%"
},'b')
.to("#card-one",{
    width:"65%",
    height:"70vh",
    top:"32%"
},'b')
.to("#card-three",{
    top:"130%"
},'b')
.to("#card-three",{
    top:"51%"
},'c')
.to("#card-two",{
    width:"70%",
    top:"41%",
    height:"70vh"
},'c')
let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".text",
        // markers:true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})
t3
.to("#ttop",{
    left:"100%"},'b')
.to("#tdown",{
    right:"100%"
},'b')