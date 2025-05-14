'use server';
import { ES3Folder } from '@/utility';
import {
  S3ClientConfig,
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
} from '@aws-sdk/client-s3';

const s3ClientConfig: S3ClientConfig = {
  region: process.env.STORAGE_REGION, // Default to a valid region if undefined
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY as string,
    secretAccessKey: process.env.STORAGE_SECRET_KEY as string,
  },
};

const s3Client = new S3Client(s3ClientConfig);

export async function uploadFile(
  file: File,
  filename: string,
  folder: string
): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: process.env.STORAGE_BUCKET_NAME,
    Key: `${folder}/${filename}`,
    Body: buffer,
  });

  await s3Client.send(command);
}

export async function getMdFileContent(
  filename: string
): Promise<string | undefined> {
  const command = new GetObjectCommand({
    Bucket: process.env.STORAGE_BUCKET_NAME,
    Key: [ES3Folder.POSTS, filename].join('/'),
  });

  const response = await s3Client.send(command);

  const content = await response.Body?.transformToString();

  return content;
}
