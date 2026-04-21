'use strict';

const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const selectAsunto = document.querySelector('#asunto');
const textMensaje = document.querySelector('#mensaje');
const charCount = document.querySelector('#chars');
const resultado = document.querySelector('#resultado');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarCampo(input, esValido, errorId) {
  const errorMsg = document.getElementById(errorId);

  if (esValido) {
    input.classList.remove('error');
    errorMsg.classList.remove('visible');
  } else {
    input.classList.add('error');
    errorMsg.classList.add('visible');
  }

  return esValido;
}

function validarNombre() {
  return validarCampo(
    inputNombre,
    inputNombre.value.trim().length >= 3,
    'error-nombre'
  );
}

function validarEmail() {
  return validarCampo(
    inputEmail,
    EMAIL_REGEX.test(inputEmail.value.trim()),
    'error-email'
  );
}

function validarAsunto() {
  return validarCampo(
    selectAsunto,
    selectAsunto.value.trim() !== '',
    'error-asunto'
  );
}

function validarMensaje() {
  return validarCampo(
    textMensaje,
    textMensaje.value.trim().length >= 10,
    'error-mensaje'
  );
}
function actualizarContador(e) {
    const longitud = e.target.value.length;
    charCount.textContent = longitud;
    //defino color como constante para no ser redundante 
    charCount.style.color = longitud > 270 ? '#e74c3c' : '#999'; 
}
textMensaje.addEventListener('input', actualizarContador);

// TODO 4.5.1: Agregar evento 'blur' a inputNombre que llame a validarNombre
inputNombre.addEventListener('blur', validarNombre);

// TODO 4.5.2: Agregar evento 'blur' a inputEmail que llame a validarEmail
inputEmail.addEventListener('blur', validarEmail);

// TODO 4.5.3: Agregar evento 'blur' a selectAsunto que llame a validarAsunto
selectAsunto.addEventListener('blur', validarAsunto);

// TODO 4.5.4: Agregar evento 'blur' a textMensaje que llame a validarMensaje
textMensaje.addEventListener('blur', validarMensaje);