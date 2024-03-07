
window.addEventListener('wheel', function(e) {
    // Rola para cima ou para baixo dependendo da direção do movimento do mouse
    window.scrollBy(0, e.deltaY);
});