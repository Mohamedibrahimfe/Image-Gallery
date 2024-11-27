"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-l-md text-black"
      />
      <button type="submit" className="p-2 border border-gray-300 rounded-r-md">
        Search
      </button>
    </form>
  );
}
