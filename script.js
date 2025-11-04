// IDs dos PDFs no Google Drive para cada idioma
const PDF_URLS = {
    'pt': '1FVxXtoZqTHVKNi3pJfAKUcbK74H7UdYb',
    'en': '1BcMykn265iOd0DEbVgfKqfacgi86sDj0',
    'es': '1mPO9BX0_IDNJzmIHRGT7VDXxZ1wZatMM'
};

function selectLanguage(lang) {
    // Salva a preferência do usuário
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('autoOpen', document.getElementById('autoOpen').checked);
    
    // Redireciona para o visualizador
    window.location.href = `viewer.html?lang=${lang}`;
}

// Verifica se deve pular a seleção de idioma
function checkAutoOpen() {
    const autoOpen = localStorage.getItem('autoOpen');
    const savedLang = localStorage.getItem('selectedLanguage');
    
    if (autoOpen === 'true' && savedLang) {
        window.location.href = `viewer.html?lang=${savedLang}`;
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Restaura a configuração de auto-open
    const autoOpen = localStorage.getItem('autoOpen');
    if (autoOpen !== null) {
        document.getElementById('autoOpen').checked = autoOpen === 'true';
    }
    
    checkAutoOpen();
});
