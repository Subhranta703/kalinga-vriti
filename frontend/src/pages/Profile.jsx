import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="p-10">Please Login...</div>;

  return (
    <div className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-orange-700 mb-8">
        My Profile
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg">

        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            className="w-24 h-24 rounded-full shadow border-2 border-yellow-400 object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-blue-600">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
