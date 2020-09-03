import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const serverResponse = await fetch("http://localhost:4200/posts");
  const posts = await serverResponse.json();

  res.status(200).json(posts);
};
