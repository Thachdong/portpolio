import { NextRequest, NextResponse } from 'next/server';
import { emmiter } from '../stream/route';
import { createCommentService } from '@/database';

export async function POST(req: NextRequest) {
  const { postId, message, sender } = await req.json();

  const comment = await createCommentService({
    content: message,
    authorId: sender,
    postId,
  });

  emmiter.emit('message', comment);

  return NextResponse.json({
    message: 'Message sent successfully',
    success: true,
  });
}
