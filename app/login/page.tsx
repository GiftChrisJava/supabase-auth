"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  // login function
  const login = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: "someone@email.com",
        password: "PHueRtNNDEqwvuXiwjcO",
      });

      if (data) console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="container mx-auto w-[400px]">
      <div className="grid">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid">
        <label>Text</label>
        <input
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
      </div>

      <button onClick={login}>Login</button>
    </div>
  );
}
