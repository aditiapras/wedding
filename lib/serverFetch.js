import axios from "axios";

export const guestLists = async (id) => {
  const data = axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_INV_LINK}api/guests?id=${id}`,
  }).then((res) => {
    return res.data;
  });
  const res = await data;
  return res;
};
