import axios from "axios";

export default class MainService {
    private static async request<T>(method: string, url: string, data?: object, token?: string): Promise<T> {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios[method](`/api/${url}`, data, { headers });
            return response.data;
        } catch (err) {
            // Типизируйте ошибку и обрабатывайте её соответствующим образом
            throw err;
        }
    }

    public static async create(url: string, data: object, token: string): Promise<any> {
        return MainService.request<any>('post', url, data, token);
    }

    public static async auth(url: string, data: object): Promise<any> {
        return MainService.request<any>('post', url, data);
    }

    public static async logout(url: string, data: object): Promise<any> {
        return MainService.request<any>('post', url, data);
    }

    public static async get(url: string): Promise<any> {
        return MainService.request<any>('get', url);
    }

    public static async pagination(url: string, page: number, limit: number): Promise<any> {
        return MainService.request<any>('get', `${url}?page=${page}&limit=${limit}`);
    }

    public static async update(url: string, id: number, data: object): Promise<any> {
        return MainService.request<any>('put', `${url}/${id}`, data);
    }

    public static async delete(url: string, id: number): Promise<any> {
        return MainService.request<any>('delete', `${url}/${id}`);
    }
}