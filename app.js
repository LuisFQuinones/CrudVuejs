const { createApp } = Vue

createApp({
    data() {
        return {
            titulo: 'Tareas en Vue!',
            tareas: [],
            nuevaTarea: ''
        }
    },
    methods:{
        agregarTarea: function(){
            // console.log("hola: ", this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
                realizado: 'Sin Realizar'
            })
            // console.log("hola", this.tareas);
            localStorage.setItem('tareas-locales', JSON.stringify(this.tareas));
            this.nuevaTarea = "";
        },
        editarTarea: function(index){
            this.tareas[index].estado = true,
            this.tareas[index].realizado = "Hecho!";
            localStorage.setItem('tareas-locales', JSON.stringify(this.tareas))
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('tareas-locales', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-locales'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
}).mount('#app')
