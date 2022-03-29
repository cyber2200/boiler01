const { Kafka } = require('kafkajs')

const test = async () => {
  const kafka = new Kafka({
    clientId: 'queue02',
    brokers: ['localhost:9092'],
  })

  const producer = kafka.producer()
  await producer.connect()
  let i = 0;
  setInterval(async () => {
    i++;
    await producer.send({
      topic: 'queue02',
      partition: i,
      messages: [
        { value: 'Test Event ### ' + i }
      ],
    })
    if (i === 1000) {
      await producer.disconnect()
      process.exit()
    }
  }, 10)
}

test()