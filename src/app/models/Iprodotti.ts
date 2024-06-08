export interface Iprodotti {
    prodotti:Array<Product>
}

export interface Product {
    id:number,
    immagine:string,
    nome:string,
    descrizione:string,
    prezzo:number,
    disponibilita:boolean,
    marchio:string,
    tipo:string,
    specifiche:SpecificheTecniche
    quantita?:number
}

export type SpecificheTecniche = ST_Laptop | ST_Computer | ST_Telefonia | ST_Stampante


interface ST_Laptop {
    processore:string,
    RAM:string,
    memoria:string,
    schermo:string,
    sistema_operativo:string
}

interface ST_Computer {
    processore:string,
    RAM:string,
    memoria:string,
    scheda_video:string,
    sistema_operativo:string
}

interface ST_Telefonia {
    schermo:string,
    processore:string,
    memoria:string,
    fotocamera:string,
    sistema_operativo:string
}

interface ST_Stampante {
    tipo_stampa:string,
    velocità_stampa?:string,
    funzioni?:Array<string>,
    formato_stampa?:string,
    connessione:string,
    risoluzione_stampa?:string,
    funzionalità:string[]
}

