'use strict';

/* =========================
   SERVICIO DE STORAGE
========================= */

const TareaStorage = {
  CLAVE: 'tareas_lista',

  /**
   * Obtener todas las tareas desde localStorage
   * @returns {Array} Array de tareas
   */
  getAll() {
    try {
      const datos = localStorage.getItem(this.CLAVE);
      if (!datos) {
        return [];
      }
      return JSON.parse(datos);
    } catch (error) {
      console.error('Error al leer tareas:', error);
      return [];
    }
  },

  /**
   * Guardar todas las tareas en localStorage
   * @param {Array} tareas - Array de tareas
   */
  guardar(tareas) {
    try {
      localStorage.setItem(this.CLAVE, JSON.stringify(tareas));
    } catch (error) {
      console.error('Error al guardar tareas:', error);
    }
  },

  /**
   * Crear una nueva tarea
   * @param {string} texto - Texto de la tarea
   * @returns {Object} Tarea creada
   */
  crear(texto) {
    // 1. Obtener todas las tareas
    const tareas = this.getAll();
    
    // 2. Crear objeto de la nueva tarea
    const nuevaTarea = {
      id: Date.now(),
      texto: texto.trim(),
      completada: false
    };
    
    // 3. Agregar la nueva tarea al array
    tareas.push(nuevaTarea);
    
    // 4. Guardar el array actualizado
    this.guardar(tareas);
    
    // 5. Retornar el objeto nuevo para que la UI pueda renderizarlo
    return nuevaTarea;
  },

  /**
   * Alternar estado completada/pendiente
   * @param {number} id - ID de la tarea
   */
  toggleCompletada(id) {
    // 1. Obtener todas las tareas
    const tareas = this.getAll();
    
    // 2. Buscar la tarea específica
    const tarea = tareas.find(t => t.id === id);
    
    // 3. Si existe, invertir su estado y guardar
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardar(tareas);
    }
  },

  /**
   * Eliminar una tarea
   * @param {number} id - ID de la tarea
   */
  eliminar(id) {
    // 1. Obtener todas las tareas
    const tareas = this.getAll();
    
    // 2. Filtrar el array para excluir la tarea con el id proporcionado
    const filtradas = tareas.filter(t => t.id !== id);
    
    // 3. Guardar el array filtrado
    this.guardar(filtradas);
  },

  /**
   * Eliminar todas las tareas
   */
  limpiarTodo() {
    // Usar localStorage para eliminar la clave completa de las tareas
    localStorage.removeItem(this.CLAVE);
  }
};

/* =========================
   SERVICIO DE TEMA
========================= */

const TemaStorage = {
  CLAVE: 'tema_app',

  getTema() {
    return localStorage.getItem(this.CLAVE) || 'claro';
  },

  setTema(tema) {
    localStorage.setItem(this.CLAVE, tema);
  }
};