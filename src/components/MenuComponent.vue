<template>
    <nav class="navbar navbar-expand-lg bg-danger py-4 px-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SERIES</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/create">Crear Personaje</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/update">Modificar Personaje</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Series
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="serie in series" :key="serie">
                                <router-link class="dropdown-item" :to="'/series/' + serie.idSerie"> {{ serie.nombre }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import SeriesService from './../services/SeriesService';
const service = new SeriesService();

export default {
    name: "MenuComponent",
    data() {
        return {
            series: []
        }
    },

    mounted() {
        service.getSeries().then(response => {
            console.log("Lista de series recibida del servicio;")
            this.series = response;
        });
    }
}
</script>

<style></style>