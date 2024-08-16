// Definizione delle interfacce

export interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];
    partecipaProgramma(programma: IProgrammaFormazione): void;
}

export interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number; // durata in settimane
    elencoPartecipanti: IProfessionistaMedia[];
    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

export interface IPiattaforma {
    nome: string;
    tipo: string; // stampato, online, audiovisivo
    descrizione: string;
    categorieContenuto: string[];
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}
