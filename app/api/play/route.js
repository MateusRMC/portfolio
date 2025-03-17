export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return new Response(JSON.stringify(users), { status: 200 });
}
