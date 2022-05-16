import { getSlugs } from "@scripts/PostApi";
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    await handleGet(res);
  } else if (req.method === "POST") {
    await handlePost(req, res);
  } else {
    res.end();
  }
};

const handleGet = async (res: NextApiResponse) => {
  try {
    const views = await prisma.post.findMany();
    res.status(200).json(views);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = JSON.parse(req.body);
    if (!slug || !getSlugs().includes(slug))
      return res.status(400).json({ message: `Slug '${slug}' was not found.` });

    const updatedViews = await prisma.post.upsert({
      where: { slug },
      create: {
        slug,
      },
      update: {
        views: {
          increment: 1,
        },
      },
    });

    res.status(200).json(updatedViews);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
