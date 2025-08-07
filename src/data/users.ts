"use server";
export const getUsers = async (page: number) => {
  const getData = await fetch(`https://reqres.in/api/users?page=${page}`, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  const data = await getData.json();
  return data.data;
};
