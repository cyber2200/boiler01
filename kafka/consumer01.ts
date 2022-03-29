const { Kafka } = require('kafkajs')

const test = async () => {
  const kafka = new Kafka({
    clientId: 'queue02',
    brokers: ['localhost:9092'],
  })

  const consumer = kafka.consumer({ groupId: 'queue02' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'queue02', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(partition)
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

test()