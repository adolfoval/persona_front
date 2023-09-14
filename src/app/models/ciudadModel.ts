export interface Ciudad{
    ciuid: string;
    ciunombre: string;
}

export interface CiudadResponse{
    data: Array<Ciudad>;
    message: string;
}