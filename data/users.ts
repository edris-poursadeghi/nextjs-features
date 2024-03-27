// data/users.ts
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const users: User[] = [
  { id: 1, name: "Eddie", email: "edris.ps.96@gamil.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
  {
    id: 3,
    name: "William Johnson",
    email: "william.johnson@example.com",
    role: "Editor",
  },
  // Add more users as necessary
];
