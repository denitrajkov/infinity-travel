import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    res.status(200).json({ name, email, message });
  } else {
    res.status(405).json({ success: false, message: "Методот не е дозволен." });
  }
}
