import { TMessage } from '@/database';
import { EventEmitter } from 'events';
import { NextRequest } from 'next/server';

export const emmiter = new EventEmitter();

export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get('postId');

  const stream = new ReadableStream({
    start(controller) {
      const onMessage = (message: TMessage) => {
        if (message.postId === postId) {
          controller.enqueue(
            new TextEncoder().encode(`data: ${JSON.stringify(message)}\n\n`)
          );
        }
      };

      emmiter.on('message', onMessage);

      req.signal.addEventListener('abort', () => {
        emmiter.off('message', onMessage);

        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
