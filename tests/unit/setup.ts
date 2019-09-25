import pino from 'pino';

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
});

export { expect } from 'chai';
export { shallowMount } from '@vue/test-utils';
export { logger };
