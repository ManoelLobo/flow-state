const { Machine } = require('xstate');

const flowMachine = Machine({
  initial: 'idle',
  states: {
    idle: { on: { START: 'working' } },
    working: { on: { REST: 'resting', CONTINUE: 'working', QUIT: 'idle' } },
    resting: { on: { RESTART: 'working', DELAY: 'resting', QUIT: 'idle' } },
  },
});

module.exports = flowMachine;
