import Global from "./../Global";
import axios from "axios";

export default class SeriesService {
    getSeries() {
        var request = "api/Series";
        var url = Global.seriesAPI + request;

        console.log("Servicio obteniendo lista de series...");
        return fetch(url).then(response => { return response.json(); }).then(data => { return data; });
    }

    getSerieById(id) {
        return new Promise(function (resolve) {
            var request = "api/Series/" + id;
            var url = Global.seriesAPI + request;
            var serie = {};

            console.log("Servicio obteniendo serie con ID " + id + "...");
            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })
        })
    }

    getPersonajes() {
        return new Promise(function (resolve) {
            var request = "api/Personajes";
            var url = Global.seriesAPI + request;
            var personajes = [];

            console.log("Servicio obteniendo lista de personajes...");
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        });
    }

    getPersonajeById(id) {
        return new Promise(function (resolve) {
            var request = "api/Personajes/" + id;
            var url = Global.seriesAPI + request;
            var personaje = null;

            console.log("Servicio obteniendo personaje...");
            axios.get(url).then(response => {
                personaje = response.data;
                resolve(personaje);
            })
        });
    }

    getPersonajesByIdSerie(idSerie) {
        return new Promise(function (resolve) {
            var request = "api/Series/PersonajesSerie/" + idSerie;
            var url = Global.seriesAPI + request;
            var personajes = [];

            console.log("Servicio obteniendo lista de personajes de serie...");
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        });
    }

    insertPersonaje(personaje) {
        return new Promise(function (resolve) {
            var request = "api/personajes";
            var url = Global.seriesAPI + request;

            console.log("Servicio insertando nuevo personaje...");
            axios.post(url, personaje).then(() => {
                console.log("Personaje insertado con exito.");
                resolve();
            });
        });
    }

    updatePersonaje(idp,ids) {
        return new Promise(function (resolve) {
            var request = "api/personajes/" + idp + "/" + ids;
            var url = Global.seriesAPI + request;

            console.log("Servicio insertando nuevo personaje...");
            axios.put(url).then(() => {
                console.log("Personaje insertado con exito.");
                resolve();
            });
        });
    }
}