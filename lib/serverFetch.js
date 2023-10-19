import axios from "axios";

export const guestLists = async (id) => {
  const data = axios({
    method: "GET",
    url: `http://localhost:3000/api/guests?id=${id}`,
  }).then((res) => {
    return res.data;
  });
  const res = await data;
  return res;
};
