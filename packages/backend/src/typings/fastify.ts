import type { FastifyRequest } from 'fastify';
import type { TokenPayload } from '@types';

declare module 'fastify' {
  interface FRequest extends FastifyRequest {
    user?: TokenPayload;
  }
}