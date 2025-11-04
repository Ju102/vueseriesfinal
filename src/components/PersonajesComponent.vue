<template>
    <div class="container p-5">
        <table v-if="personajes.length != 0" class="table table-bordered w-75 ms-auto me-auto table-striped table-dark">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td>{{ personaje.nombre }}</td>
                    <td><img class="img-fluid w-25" :src="personaje.imagen" /></td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-success" :to="'/series/' + idSerie">Volver</router-link>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();

export default {
    name: "PersonajesComponent",
    data() {
        return {
            personajes: [],
            idSerie: 0
        }
    },
    methods: {
        cargarPersonajes() {
            service.getPersonajesByIdSerie(this.idSerie).then(response => {
                this.personajes = response;
            })
        }
    },
    mounted() {
        this.idSerie = parseInt(this.$route.params.idserie);
        this.cargarPersonajes();
    }
}
</script>

<style></style>