const check = document.getElementById('check');
        const socialIcons = document.querySelector('.socialIcons');

        check.addEventListener('change', function () {
            if (this.checked) {
                socialIcons.style.display = 'flex'; // Oculta os ícones de contato quando a checklist é marcada
            } else {
                socialIcons.style.display = 'none'; // Exibe os ícones de contato quando a checklist é desmarcada
            }
        });
