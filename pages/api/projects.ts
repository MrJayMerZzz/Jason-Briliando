import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        include: {
          photos: true,
          category: true,
        },
      });
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  } else if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    interface FormidableFields {
      title?: string;
      category?: string;
      location?: string;
      description?: string;
    }

    interface FormidableFiles {
      file?: formidable.File;
    }

    form.parse(req, async (err: Error | null, fields: FormidableFields, files: FormidableFiles) => {
      if (err) {
      res.status(500).json({ error: 'Failed to upload file' });
      return;
      }

      const { title, category, location, description } = fields;
      const file = files.file as formidable.File;

      try {
      const newProject = await prisma.project.create({
        data: {
        title: title as string,
        category: {
          connectOrCreate: {
          where: { name: category as string },
          create: { name: category as string },
          },
        },
        location: location as string,
        description: description as string,
        photos: {
          create: {
          path: `/uploads/${path.basename(file.path)}`,
          },
        },
        },
      });
      res.status(201).json(newProject);
      } catch (error) {
      res.status(500).json({ error: 'Failed to create project' });
      }
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}