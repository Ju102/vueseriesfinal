<template>
    <div class="container p-5">
        <div class="card text-center w-50 me-auto ms-auto bg-secondary p-5" v-if="serie != null">
            <img class="w-auto img-fluid rounded-2" :src="serie.imagen" :alt="serie.nombre" />
            <h3 class="mt-2">{{ serie.nombre }}</h3>
            <p>Puntuación IMDB: {{ serie.puntuacion }}</p>
            <router-link class="btn btn-success me-auto ms-auto w-50"
                :to="'/personajes/' + serie.idSerie">Personajes</router-link>
        </div>
    </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();

export default {
    name: "SerieComponent",
    data() {
        return {
            serie: {}
        }
    },
    methods: {
        cargarSerie() {
            service.getSerieById(this.$route.params.id).then(response => {
                console.log("Serie con ID " + this.$route.params.id + " obtenida del servicio.")
                this.serie = response;
            });
        }
    },
    mounted() {
        this.cargarSerie();
    },
    watch: {
        '$route.params.id'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.cargarSerie();
            }
        }
    }
}
</script>

<style></style>