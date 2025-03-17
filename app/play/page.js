import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default async function UsersPage() {
  const res = await fetch(`${API_URL}/api/play`);
  const users = await res.json();

  return (
    <div>
      <h1>Últimos usuários</h1>
      {users.map((links) => (
        <div key={links.id}>
          <Link
            href={`https://meublog.com/posts/${links.name}`}
            className="user-card"
          >
            {links.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
