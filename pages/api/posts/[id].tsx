import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const serverResponse = await fetch(`http://localhost:4200/posts/${id}`);
  const post = await serverResponse.json();
  res.status(200).json(post);
};
