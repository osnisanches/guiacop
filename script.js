// IDs dos PDFs no Google Drive para cada idioma
const PDF_URLS = {
    'pt': '17GBTGkHB1s_nKUjjPCUvGDn8pDAIqtlF',
    'en': '1_BwDQ1G8zMeclAOEH_OdpbXGmTPq0Ayf',
    'es': '1dNRiqi6PGDdLTDoz8dHx9XVp4PSDMoB3'
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
