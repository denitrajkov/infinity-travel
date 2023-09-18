import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, lastName, email, number } = req.body;

    res.status(200).json({
      name,
      lastName,
      email,
      number,
    });
  } else {
    res.status(405).json({ success: false, message: "Методот не е дозволен." });
  }
}
