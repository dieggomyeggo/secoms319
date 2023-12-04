import { MongoClient } from 'mongodb'
const connectionString = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(connectionString)
let connection
try {
    connection = await client.connect()
} catch (e) {
    console.error(e)
}
let db = connection.db('final')
export default db
