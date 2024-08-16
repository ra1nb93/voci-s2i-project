import { ProfessionistaMedia, ProgrammaFormazione, Piattaforma} from "./classes";

const professionista1 = new ProfessionistaMedia("Maria", "Rossi", "Giornalismo", 5, ["diritti umani", "politica"]);
const professionista2 = new ProfessionistaMedia("Giulia", "Verdi", "Regia", 8, ["documentari", "cinema sociale"]);

const programma1 = new ProgrammaFormazione("Mentorship per Giornaliste", "Un programma per sostenere la crescita professionale delle giornaliste", "Giornalismo", 12);
const programma2 = new ProgrammaFormazione("Regia per il Cambiamento", "Un programma dedicato a registe emergenti", "Regia", 16);

const piattaforma1 = new Piattaforma("Voci Blog", "online", "Una piattaforma dedicata alla condivisione di storie e opinioni", ["giornalismo", "diritti umani"]);
const piattaforma2 = new Piattaforma("Voci Video", "audiovisivo", "Un canale video per documentari e interviste", ["documentari", "cinema sociale"]);

// Collegamento tra professioniste, programmi di formazione, e piattaforme

professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);

piattaforma1.pubblicaContenuto(professionista1, "Un articolo sui diritti umani in Europa.");
piattaforma2.pubblicaContenuto(professionista2, "Un documentario sulle sfide delle registe emergenti.");
