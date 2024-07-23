const ageForm = document.getElementById('ageForm');
const errorMessages = document.getElementById('errorMessages');

ageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value, 10);

    try {
        if (isNaN(age) || age < 0) {
            throw new Error('Por favor, insira uma idade válida.');
        }

        if (age < 18) {
            throw new Error('Você precisa ter pelo menos 18 anos para acessar este jogo.');
        }

        // Se passou pela validação, limpa mensagens de erro e permite o acesso ao jogo
        errorMessages.innerHTML = '';
        alert('Você pode acessar o jogo!');
        ageForm.reset(); // Limpa o formulário após a verificação

    } catch (error) {
        // Se ocorrer um erro, exibe mensagem de erro amigável
        errorMessages.innerHTML = `<p class="error">${error.message}</p>`;
    }
});