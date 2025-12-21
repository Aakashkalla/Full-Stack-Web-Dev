import dotenv from 'dotenv'
dotenv.config();
import { Client } from "pg";

const pgClient = new Client(process.env.PG_STRING)

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response)
    console.log("Connected to NEON DB")
}

main()