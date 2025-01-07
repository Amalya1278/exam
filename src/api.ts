import axios from "axios";

const Axios=axios.create({
    baseURL:"http://localhost:4000",
})
export const addUser=async(data:any):Promise<any>=>{
    const response=await Axios.post("/users",data)
    return response.data
}
export const getUsers = async (): Promise<any> => {
    const response = await Axios.get("/users");
    return response.data;
};

export const getUsersById = async (id: number): Promise<any> => {
    const response = await Axios.get(`/users/${id}`);
    return response.data;
};