export interface UserUI {
  id: number;
  nombres: string;
  username: string;
  componente: React.ReactNode;
}

export interface UserApi {
  id: number;
  nombre: string;
  apellido: string;
  username: string;
}
