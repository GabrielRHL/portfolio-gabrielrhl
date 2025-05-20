const menuIcon = document.querySelector('#menu-icon')
const headerLinks = document.querySelector('.header-links')

menuIcon.addEventListener('click', () => {
    headerLinks.classList.toggle('active')
})

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'curriculum/2025_CURRÍCULO_GABRIELROCHALOPES.pdf';
    link.download = '2025_CURRÍCULO_GABRIELROCHALOPES.pdf';
    link.click();
});

document.getElementById('copyEmailBtn').addEventListener('click', function() {
    const email = 'rochagabriel125@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        showNotification('E-mail copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar e-mail: ', err);
    });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden')
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden')
    }, 3000);
}