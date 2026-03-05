'use strict';

const formTarea = document.querySelector('#formTarea');
const inputTitulo = document.querySelector('#inputTitulo');
const selectTag = document.querySelector('#selectTag');
const listaTareas = document.querySelector('#listaTareas');

// escuchar el submit del formulario para agregar una nueva tarea
formTarea.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = inputTitulo.value.trim();
    const tag = selectTag.value;

    if(titulo === '') return;

    const id = 't' + Date.now();

    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('card');
    nuevaTarea.dataset.id = id;
    nuevaTarea.dataset.tag = tag;
    nuevaTarea.dataset.fav = "0";

    nuevaTarea.innerHTML = `
        <div class="card__head">
            <span class="badge">${tag}</span>
            <div class="actions">
                <button class="icon" type="button" data-action="fav">☆</button>
                <button class="icon" type="button" data-action="done">✓</button>
                <button class="icon danger" type="button" data-action="del">🗑</button>
            </div>
        </div>
        <p class="card__title">${titulo}</p>
    `;

    listaTareas.appendChild(nuevaTarea);

    inputTitulo.value = '';
});