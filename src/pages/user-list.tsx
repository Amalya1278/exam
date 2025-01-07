import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";
import { IUser } from "../types";

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then((response)=>setUsers(response))
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="space-y-2">
                
                    {users.map((user) => (
                        <li key={user.id} className="p-3 bg-gray-100 rounded-md">
                            <Link to={`/users/${user.id}`} className="text-indigo-600 hover:underline">
                                {user.name} {user.surname} (Age: {user.age})
                            </Link>
                        </li>
                    ))
                }
            </div>
            <Link to="/add" className="block mt-4 bg-green-500 text-white py-2 px-4 rounded-md text-center">
                Add User
            </Link>
        </div>
    );
};
