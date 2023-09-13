export interface PersonaModel{
    peridentificacion: string;
    pernombre1: string;
    pernombre2?: string;
    perapellido1: string;
    perapellido2: string;
    percorreo: string;
    pertelefono: string;
    ciuid: string;
}

export interface PersonaForm{
    peridentificacion: string;
    pernombre1: string;
    pernombre2?: string;
    perapellido1: string;
    perapellido2: string;
    percorreo: string;
    pertelefono: string;
    departamento: string;
    ciuid: string;
}

export interface personaResponse{
    peridentificacion: string;
    pernombre1: string;
    pernombre2?: string;
    perapellido1: string;
    perapellido2: string;
    percorreo: string;
    pertelefono: string;
    perestado: string;
    depid: string;
    ciuid: string;
    ciunombre: string;
}