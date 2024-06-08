import axios from "axios";
export default class MainService{
    // Metod create
    public static async create(url:string,data:object):Promise<any>{
        try{
            const created = await axios.post(`/api/${url}`,data);
            return created.data;
        }catch(err){
            return err;
        }
    }
    // Metod auth
    public static async auth(url:string,data:object):Promise<any>{
        try{
            const authed = await axios.post(`/api/${url}`,data);
            return authed.data;
        }catch(err){
            return err;
        }
    }
    // Metod logout
    public static async logout(url:string,data:object):Promise<any>{
        try{
            const logouted = await axios.post(`/api/${url}`,data);
            return logouted.data;
        }catch(err){
            return err;
        }
    }
    // Metod get
    public static async get(url:string):Promise<any>{
        try{
            const getted = await axios.get(`${url}`);
            return getted.data;
        }catch(err){
            return err;
        }
    }
    // Metod for pagination
    public static async pagination(url:string,page:number,limit:number):Promise<any>{
        try{
            const paginated = await axios.get(`${url}?page=${page}&limit=${limit}`);
            return paginated.data;
        }catch(err){
            return err;
        }
    }
    // Metod update
    public static async update(url:string,id:number,data:object):Promise<any>{
        try{
            const updated = await axios.put(`${url}/${id}`,data);
            return updated.data;
        }catch(err){
            return err;
        }
    }
    // Metod delete
    public static async delete(url:string,id:number):Promise<any>{
        try{
            const deleted = await axios.delete(`${url}/${id}`);
            return deleted.data;
        }catch(err){
            return err;
        }
    }   
}