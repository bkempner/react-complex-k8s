const creds = require('./redisCredentials');
const redis = require('redis');

const redisClient = redis.createClient({
  host: creds.host,
  port: creds.port,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib(index) {
  console.log('index', index);
  if (index === 1) {
    return [0, 1];
  } else {
    var sequence = fib(index - 1);
    let nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextVal);
    console.log('sequence', sequence);
    return sequence;
  }
}

function sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
