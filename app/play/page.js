import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch("/api/play");
  const users = await res.json();
  return (
    <div>
      <h1>Últimos usuários</h1>
      {users.map((links) => (
        <div key={links.id}>
          <Link
            key={links.id}
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
