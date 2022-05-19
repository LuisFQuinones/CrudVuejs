const { createApp } = Vue

createApp({
    data() {
        return {
            nombre: '',
            edad: '',
            formActualizar: false,
            idActualizar: -1,
            nombreActualizar: '',
            edadActualizar: '',
            pacientes: []
        }
    },
    methods: {
        crearPaciente: function () {
            this.pacientes.push({
                nombre: this.nombre,
                edad: this.edad
            });
            localStorage.setItem('tareas-locales', JSON.stringify(this.pacientes));
            this.nombre = '';
            this.edad = '';
        },

        verFormActualizar: function (paciente_id) {
            this.idActualizar = paciente_id;
            this.nombreActualizar = this.pacientes[paciente_id].nombre;
            this.edadActualizar = this.pacientes[paciente_id].edad;
            this.formActualizar = true;
            localStorage.setItem('tareas-locales', JSON.stringify(this.pacientes));
        },
        borrarPaciente: function (paciente_id) {
            this.pacientes.splice(paciente_id, 1);
            localStorage.setItem('tareas-locales', JSON.stringify(this.pacientes));
        },
        guardarActualizacion: function (paciente_id) {
            this.formActualizar = false;
            this.pacientes[paciente_id].nombre = this.nombreActualizar;
            this.pacientes[paciente_id].edad = this.edadActualizar;
            localStorage.setItem('tareas-locales', JSON.stringify(this.pacientes));
        }
    },
    //LOS PACIENTES NO SE GUARDAN EN EL LOCAL YA QUE YA GUARDAMOS A LAS TAREAS
    // created: function(){
    //     let datos = JSON.parse(localStorage.getItem('tareas-locales'));
    //     if(datos === null){
    //         this.pacientes = [];
    //     }else{
    //         this.pacientes = datos;
    //     }
    // }
}

).mount('#appPacientes')
