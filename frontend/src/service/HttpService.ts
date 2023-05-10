import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface DataType {
  [key: string]: string;
}

export default class HttpService {
  protected http: AxiosInstance;

  baseURL = 'http://localhost:5200';

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
    });

    this.http.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    });
  }

  protected async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.get(url);
      return response.data;
    } catch (error: any) {
      this.handleRequestError(error);
      throw error;
    }
  }

  protected async post<T>(url: string, data: DataType): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.post(url, data);
      return response.data;
    } catch (error: any) {
      this.handleRequestError(error);
      throw error;
    }
  }

  protected handleRequestError(error: AxiosError) {
    console.error('Erro na requisição:', error.message);
  }
}
