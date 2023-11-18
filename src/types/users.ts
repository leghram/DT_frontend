export interface UserUI {
  id: number;
  nombre: string;
  username: string;
  componente: React.ReactNode;
}

export interface UserApi {
  id: number;
  nombre: string;
  apellido: string;
  username: string;
}
