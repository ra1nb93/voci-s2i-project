import { IProfessionistaMedia, IProgrammaFormazione, IPiattaforma } from "./interfaces";

export class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} ha partecipato al programma: ${programma.titolo}`);
    }
}

export class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number;
    elencoPartecipanti: IProfessionistaMedia[] = [];

    constructor(titolo: string, descrizione: string, ambitoSpecializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
        console.log(`Partecipante ${professionista.nome} ${professionista.cognome} aggiunto al programma ${this.titolo}`);
    }
}

export class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieContenuto: string[];

    constructor(nome: string, tipo: string, descrizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Il contenuto di ${professionista.nome} ${professionista.cognome} è stato pubblicato su ${this.nome}: ${contenuto}`);
    }
}