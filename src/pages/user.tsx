import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersById } from "../api";
import { IUser } from "../types";

export const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if(id){
            getUsersById(Number(id)).then((response) => setUser(response))
        }
    }, [id]);

    if (!user) return <p className="text-center text-lg text-gray-600">User not found</p>;

    return (
        <div className="container mx-auto p-6 max-w-lg bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">User</h1>
            <div className="space-y-4">
                <p className="text-xl font-medium text-gray-700"><strong>Name:</strong> {user.name}</p>
                <p className="text-xl font-medium text-gray-700"><strong>Surname:</strong> {user.surname}</p>
                <p className="text-xl font-medium text-gray-700"><strong>Age:</strong> {user.age}</p>
                <p className="text-xl font-medium text-gray-700"><strong>Salary:</strong> ${user.salary}</p>
            </div>
        </div>
    );
};
