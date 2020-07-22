import Cors from "cors";

import { API_SERVER_URL } from "../../constants/constants";

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  const { latitude, longitude, count } = req.query;
  await cors(req, res);

  const results = await fetch(
    `${API_SERVER_URL}/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`
  );
  const json = await results.json();

  res.statusCode = 200;
  res.json(json);
}
