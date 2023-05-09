import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export default class HttpService {
  protected http: AxiosInstance;

  constructor(baseURL: string) {
    this.http = axios.create({ baseURL });
  }

  // protected async get<T>(url: string): Promise<T> {
  //   try {
  //     const response: AxiosResponse<T> = await this.http.get(url);
  //     return response.data;
  //   } catch (error: any) {
  //     this.handleRequestError(error);
  //     throw error;
  //   }
  // }

  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.post(url, data);
      return response.data;
    } catch (error: any) {
      this.handleRequestError(error);
      throw error;
    }
  }

  protected handleRequestError(error: AxiosError) {
    // Lógica para lidar com erros de requisição, como exibir uma mensagem de erro ou realizar alguma ação específica
    console.error('Erro na requisição:', error.message);
  }
}
