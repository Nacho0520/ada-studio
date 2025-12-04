// Simple cart simulation (no persistence)
document.querySelectorAll('.btn-add').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.closest('.product-card').querySelector('h3').textContent;
    alert(`✅ "${product}" añadido al carrito.\n\n⚠️ Nota: Este es un demo. El carrito no se guarda.`);
  });
});