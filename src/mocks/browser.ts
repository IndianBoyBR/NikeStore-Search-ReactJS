import { setupWorker } from 'msw';
import { nikeStoresHandler } from './nike-stores/nike-stores-handler';

export const worker = setupWorker(...nikeStoresHandler);
