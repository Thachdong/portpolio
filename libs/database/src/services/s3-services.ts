'use server';
import { S3ClientConfig, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3ClientConfig: S3ClientConfig = {
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
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
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${folder}/${filename}`,
    Body: buffer,
  });

  await s3Client.send(command);
}
