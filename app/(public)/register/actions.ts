"use server";

import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  redirect("/login");
}
