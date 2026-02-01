import { register } from "./actions";

export default function RegisterPage() {
  return (
    <form action={register} className="max-w-sm mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>

      <input
        name="username"
        placeholder="Username"
        required
        className="border p-2 w-full"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2 w-full"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="border p-2 w-full"
      />

      <button className="bg-black text-white p-2 w-full">Register</button>
    </form>
  );
}
