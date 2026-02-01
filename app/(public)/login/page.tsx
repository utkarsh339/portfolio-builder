import { login } from "./actions";

export default function LoginPage() {
  return (
    <form action={login} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full border p-2"
      />

      <button className="w-full bg-black text-white p-2">Login</button>
    </form>
  );
}
