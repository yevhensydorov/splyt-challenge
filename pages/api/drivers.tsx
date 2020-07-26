import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import { API_SERVER_URL } from "../../constants/constants";

function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Promise<void>) => {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { latitude, longitude, count } = req.query;
  await cors(req, res);

  const results = await fetch(
    `${API_SERVER_URL}/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`
  );
  const json = await results.json();

  res.statusCode = 200;
  res.json(json);
}
