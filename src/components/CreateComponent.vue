<template>
    <div class="container w-50 mt-5">
        <form class="me-auto ms-auto pt-3 pb-4 px-5 text-white rounded-4" style="border: 2px solid black;"
            v-on:submit.prevent="insertPersonaje()">
            <h4 class="mb-4">Crear Nuevo Personaje</h4>
            <label class="form-label">Nombre:</label>
            <input class="form-control" type="text" v-model="personaje.nombre" />
            <label class="form-label">URL de Imagen:</label>
            <input class="form-control" type="text" v-model="personaje.imagen" />
            <label>Selecciona una serie:</label>
            <select class="form-select" v-model="personaje.idSerie">
                <option value="-1">-- Seleccione --</option>
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
            </select>
            <button class="btn btn-success w-25 mt-4">Crear</button>
        </form>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();

export default {
    name: "CreateComponent",
    data() {
        return {
            series: [],
            personaje: {
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: -1
            }
        }
    },
    methods: {
        insertPersonaje() {
            if (this.personaje.idSerie == -1) {
                alert("Debes seleccionar una serie");
            }
            else {
                service.insertPersonaje(this.personaje).then(() => {
                    this.$router.push("/" + 1);
                });
            }
        }
    },
    mounted() {
        service.getSeries().then(response => {
            console.log("Lista de series cargada en select.");
            this.series = response;
        })
    }
}
</script>

<style></style>