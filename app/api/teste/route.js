export async function POST(req) {
  const data = await req.json();
  return new Response(JSON.stringify({ received: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
