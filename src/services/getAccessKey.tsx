import { CLIENT_ID, CLIENT_SECRET, LOGIN, PASSWORD, SECRET_KEY } from "../constans/constans";

const url = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=${LOGIN}&password=${PASSWORD}
&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const fetchGetAccessKey = async () => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-secret-key": SECRET_KEY,
      "Content-Type": "application/json"

    } });
  const data = await res.json();

  return { data, res };
};


export { fetchGetAccessKey };