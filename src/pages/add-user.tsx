import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api";
import { InputUser } from "../types";

export const AddUser = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm<InputUser>();
    const navigate = useNavigate();
    const onSubmit = async (data:any) => {
       await addUser(data)
        reset();
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        {...register("name", { required: "Name is require" })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Surname</label>
                    <input
                        {...register("surname", { required: "Surname is required" })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        {...register("age")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                    <input
                        type="number"
                        {...register("salary")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                    Add User
                </button>
            </form>
        </div>
    );
};
