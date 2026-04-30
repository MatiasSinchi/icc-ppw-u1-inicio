Se muestran los elementos cargados 
![elementos cargados](assets/01-elementos-cargados.png)
```javascript
function crearTarea(tarea) {
  const li = document.createElement('li');
  li.textContent = tarea.texto; // textContent escapa HTML automáticamente
  return li;
}
```
eliminacion de el elemento numero 2 y su mensaje
![elementos eliminados](assets/02-eleminado.png)
```javascript
function eliminarTarea(id) {
  // 1. Buscar la tarea para obtener su texto
  const tarea = tareas.find(t => t.id === id);
  
  if (!tarea) return; // Salir si por alguna razón no se encuentra
  
  // 2. Pedir confirmación al usuario
  if (!confirm(`¿Estás seguro de eliminar la tarea: "${tarea.texto}"?`)) {
    return; // Si el usuario cancela, detenemos la ejecución
  }
  
  // 3. Eliminar la tarea de localStorage
  TareaStorage.eliminar(id);
  
  // 4. Recargar el estado y volver a renderizar
  tareas = TareaStorage.getAll();
  renderizarTareas();
  
  // 5. Mostrar mensaje de éxito (ajusta esta llamada según cómo se llame tu función de mensajes)
  if (typeof mostrarMensaje === 'function') {
    mostrarMensaje('Tarea eliminada correctamente', 'exito');
  }
}
```
en la parte de aplicacion y storage se muestra las keys guardadas del localstorage
![devtools de storage](assets/03-devtools.png)
aplicacion del tema oscuro y el tema claro previamente ense;ado 
![diferentes temas](assets/04-temas.png)
