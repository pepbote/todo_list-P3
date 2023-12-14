const novaTascaInput = document.getElementById('novaTascaInput');
const afegirBtn = document.getElementById('afegirBtn');
const filtrarInput = document.getElementById('filtrarInput');
const llistaTasques = document.getElementById('llistaTasques');
const template = document.getElementById('template');

novaTascaInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && novaTascaInput.value.trim() !== '') {
        afegirTasca(novaTascaInput.value.trim());
        novaTascaInput.value = '';
    }
});

afegirBtn.addEventListener('click', function () {
    if (novaTascaInput.value.trim() !== '') {
        afegirTasca(novaTascaInput.value.trim());
        novaTascaInput.value = '';
    }
});

filtrarInput.addEventListener('input', function () {
    filtrarTasques();
});

let count = 0;

function afegirTasca(text) {
    const clonedTemplate = template.content.cloneNode(true);

    let novaTasca = clonedTemplate.querySelector('.task');
    let text_task = clonedTemplate.querySelector('.task-text');
    let del_button = clonedTemplate.querySelector('.delete');
    let finalitzat = clonedTemplate.querySelector('.finalitzat');

    novaTasca.setAttribute('id', count);
    text_task.textContent = text;
    del_button.setAttribute('id', count);
    finalitzat.setAttribute('id', count);

    llistaTasques.appendChild(clonedTemplate);

    const tascaCheckbox = novaTasca.querySelector('.finalitzat');
    const eliminarBtn = novaTasca.querySelector('.delete');

    tascaCheckbox.addEventListener('change', function () {
        if (tascaCheckbox.checked) {
            novaTasca.style.textDecoration = 'line-through';
            novaTasca.style.color = 'grey';
            eliminarBtn.classList.remove('hidden');
        } else {
            novaTasca.style.textDecoration = 'none';
            novaTasca.style.color = 'black';
            eliminarBtn.classList.add('hidden');
        }
    });

    eliminarBtn.addEventListener('click', function () {
        llistaTasques.removeChild(novaTasca);
    });
    count += 1;
}

function filtrarTasques() {
    const filtre = filtrarInput.value.toLowerCase();
    const tasques = llistaTasques.getElementsByTagName('div');

    for (const tasca of tasques) {
        const textTasca = tasca.querySelector('.task-text').innerText.toLowerCase();
        if (textTasca.includes(filtre)) {
            tasca.style.display = 'block';
        } else {
            tasca.style.display = 'none';
        }
    }
}
