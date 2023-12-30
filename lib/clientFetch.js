import axios from "axios";
import moment from "moment-timezone";

export const sendMessage = async (body) => {
  const data = axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_INV_LINK}api/messages`,
    data: {
      name: body.name,
      message: body.message,
      time: moment(),
    },
  }).then((res) => {
    return res.data;
  });
  const res = await data;
  return res;
};

export const editMessage = async (body) => {
  const data = axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_INV_LINK}api/edit?range=${body.range}`,
    data: {
      message: body.message,
    },
  }).then((res) => {
    return res.data;
  });
  const res = await data;
  return res;
};
