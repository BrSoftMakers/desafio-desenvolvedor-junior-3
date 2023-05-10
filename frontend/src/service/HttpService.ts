import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface DataType {
  [key: string]: string;
}

export default class HttpService {
  protected axios: AxiosInstance;

  baseURL = 'http://localhost:5200';

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseURL,
    });

    this.axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    });
  }

  protected async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(url);
    return response.data;
  }

  protected async post<T>(url: string, data: DataType): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.post(url, data);
      return response.data;
    } catch (error: any) {
      this.handleRequestError(error);
      throw error;
    }
  }

  protected async delete(url: string): Promise<void> {
    await this.axios.delete(url);
  }

  protected handleRequestError(error: AxiosError) {
    console.error('Erro na requisição:', error.message);
  }
}
