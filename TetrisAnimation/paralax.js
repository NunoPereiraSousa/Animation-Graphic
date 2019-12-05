let container = document.querySelector('.container')
let protos = document.querySelectorAll('.proto')

container.addEventListener('mousemove', e => {
    let move = (e.clientX * 0.05) + 4

    protos.forEach(proto => {
        proto.style.transform = `translateX(${move}%)`
    });
})