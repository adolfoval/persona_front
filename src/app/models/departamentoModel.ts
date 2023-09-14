export interface Departamento{
    depid: string;
    depnombre: string;
}

export interface DepartamentoResponse{
    data: Array<Departamento>;
    message: string;
}