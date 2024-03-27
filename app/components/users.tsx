import { users } from "@/data/users";

function Users() {
  return (
    <>
      <div className="border-2 p-5 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 text-gray-900">
              <p className="text-gray-900 font-bold">Name: {user.name}</p>
              <p className="text-gray-900 text-en">Email: {user.email}</p>
              <p className="text-gray-900 text-sm">Role: {user.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
