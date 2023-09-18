import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      ticketType,
      from,
      to,
      dateDeparture,
      dateArrival,
      adults,
      children,
      baby,
      classs,
    } = req.body;

    res.status(200).json({
      ticketType,
      from,
      to,
      dateDeparture,
      dateArrival,
      adults,
      children,
      baby,
      classs,
    });
  } else {
    res.status(405).json({ success: false, message: "Error" });
  }
}
