"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piattaforma = exports.ProgrammaFormazione = exports.ProfessionistaMedia = void 0;
var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
        console.log("".concat(this.nome, " ").concat(this.cognome, " ha partecipato al programma: ").concat(programma.titolo));
    };
    return ProfessionistaMedia;
}());
exports.ProfessionistaMedia = ProfessionistaMedia;
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoSpecializzazione, durata) {
        this.elencoPartecipanti = [];
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
        console.log("Partecipante ".concat(professionista.nome, " ").concat(professionista.cognome, " aggiunto al programma ").concat(this.titolo));
    };
    return ProgrammaFormazione;
}());
exports.ProgrammaFormazione = ProgrammaFormazione;
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Il contenuto di ".concat(professionista.nome, " ").concat(professionista.cognome, " \u00E8 stato pubblicato su ").concat(this.nome, ": ").concat(contenuto));
    };
    return Piattaforma;
}());
exports.Piattaforma = Piattaforma;
