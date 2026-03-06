'use strict';

let filtroActivo = "all";


// -------- 1. AGREGAR TAREAS --------
document.querySelector('#formTarea').addEventListener('submit', function(e) {

    e.preventDefault();

    const inputTitulo = document.querySelector('#inputTitulo');
    const selectTag = document.querySelector('#selectTag');
    const listaTareas = document.querySelector('#listaTareas');

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

    actualizarLista();

});


// -------- ACCIONES DE LOS BOTONES --------
document.querySelector('#listaTareas').addEventListener('click', function(e){

    const boton = e.target.closest('button');
    if(!boton) return;

    const accion = boton.dataset.action;
    const tarjeta = boton.closest('.card');

    // 2. ELIMINAR TAREA
    if(accion === 'del'){
        tarjeta.remove();
    }

    // 3. MARCAR COMO COMPLETADA
    if(accion === 'done'){
        tarjeta.classList.toggle('is-done');
    }

    // 4. MARCAR COMO FAVORITA
    if(accion === 'fav'){

        const esFav = tarjeta.dataset.fav === "1";

        if(esFav){
            tarjeta.dataset.fav = "0";
            boton.textContent = "☆";
            boton.classList.remove("is-fav");
        }else{
            tarjeta.dataset.fav = "1";
            boton.textContent = "★";
            boton.classList.add("is-fav");
        }

    }

    actualizarLista();

});

