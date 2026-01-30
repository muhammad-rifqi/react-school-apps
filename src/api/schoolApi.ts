import type { School } from "../types/school";

export const fetchSchoolProfile = async (): Promise<School> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!res.ok) {
    throw new Error("Gagal ambil data user");
  }

  return res.json();
};
