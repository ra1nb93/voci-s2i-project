"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var professionista1 = new classes_1.ProfessionistaMedia("Maria", "Rossi", "Giornalismo", 5, ["diritti umani", "politica"]);
var professionista2 = new classes_1.ProfessionistaMedia("Giulia", "Verdi", "Regia", 8, ["documentari", "cinema sociale"]);
var programma1 = new classes_1.ProgrammaFormazione("Mentorship per Giornaliste", "Un programma per sostenere la crescita professionale delle giornaliste", "Giornalismo", 12);
var programma2 = new classes_1.ProgrammaFormazione("Regia per il Cambiamento", "Un programma dedicato a registe emergenti", "Regia", 16);
var piattaforma1 = new classes_1.Piattaforma("Voci Blog", "online", "Una piattaforma dedicata alla condivisione di storie e opinioni", ["giornalismo", "diritti umani"]);
var piattaforma2 = new classes_1.Piattaforma("Voci Video", "audiovisivo", "Un canale video per documentari e interviste", ["documentari", "cinema sociale"]);
// Collegamento tra professioniste, programmi di formazione, e piattaforme
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
piattaforma1.pubblicaContenuto(professionista1, "Un articolo sui diritti umani in Europa.");
piattaforma2.pubblicaContenuto(professionista2, "Un documentario sulle sfide delle registe emergenti.");
