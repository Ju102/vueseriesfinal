<template>
    <div class="container w-50 mt-5">
        <form class="me-auto ms-auto pt-3 pb-4 px-5 text-white rounded-4" style="border: 2px solid black;"
            v-on:submit.prevent="modificarPersonaje()">
            <h4 class="mb-4">Modificar Personaje</h4>
            <label>Selecciona un personaje:</label>
            <select class="form-select" v-model="idpersonaje" v-on:change="cambiarPreviewPersonaje()">
                <option value="-1">-- Seleccione el personaje--</option>
                <option v-for="pers in personajes" :key="pers" :value="pers.idPersonaje">{{ pers.nombre }}</option>
            </select>
            <label>Selecciona la nueva serie:</label>
            <select class="form-select" v-model="idserie" v-on:change="cambiarPreviewSerie()">
                <option value="-1">-- Seleccione la serie--</option>
                <option v-for="ser in series" :key="ser" :value="ser.idSerie">{{ ser.nombre }}</option>
            </select>

            <button class="btn btn-success w-25 mt-4">Modificar</button>
        </form>
        <hr class="text-white"/>
        <div class="row me-auto ms-auto">
            <div class="col-6" v-if="previewPersonaje != null">
                <img class="w-50" :src="previewPersonaje.imagen" />
                <h4>{{ previewPersonaje.nombre }}</h4>
            </div>
            <div class="col-6" v-if="previewSerie != null">
                <img class="w-50" :src="previewSerie.imagen" />
                <h4>{{ previewSerie.nombre }}</h4>
            </div>
        </div>

    </div>
</template>

<script>

import SeriesService from './../services/SeriesService';
const service = new SeriesService();

export default {
    name: "UpdateComponent",
    data() {
        return {
            series: [],
            personajes: [],
            idserie: -1,
            idpersonaje: -1,
            previewSerie: null,
            previewPersonaje: null
        }
    },
    methods: {
        cambiarPreviewSerie() {
            service.getSerieById(this.idserie).then(response => {
                this.previewSerie = response;
            });
        },
        cambiarPreviewPersonaje() {
            service.getPersonajeById(this.idpersonaje).then(response => {
                this.previewPersonaje = response;
            });
        },
        modificarPersonaje() {
            var ids = this.idserie;
            var idp = this.idpersonaje;
            service.updatePersonaje(idp, ids).then(() => {
                this.$router.push("/");
            })
        }
    },

    mounted() {
        service.getSeries().then(response => {
            console.log("Lista de series cargada en select.");
            this.series = response;
        });
        service.getPersonajes().then(response => {
            console.log("Lista de personajes cargada en select.");
            this.personajes = response;
        })
    }
}
</script>

<style></style>