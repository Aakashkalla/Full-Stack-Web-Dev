import dotenv from 'dotenv'
dotenv.config();
import { Client } from "pg";
import express  from 'express';

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.PG_STRING)

async function main() {
    await pgClient.connect();
    console.log("Connected to NEON DB")
    app.listen(3000, () => {
        console.log("SERVER STARTED")
    })
}

app.get('/hello', (req,res)=>{
    res.send("HELLO");
})

app.post('/signup', async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try{
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;

        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id
        await pgClient.query(addressInsertQuery, [city,country, street, pincode, userId])
        await pgClient.query("COMMIT;")

        res.json({
            message : "You have signed up"
        })

    }catch(e){
        console.log(e);
        res.json({
            message : "ERROR"
        })
    }

})

app.get('/metadata', async (req,res) =>{
    const id = req.query.id;

    const query2 = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode 
    FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1`
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`

    const response = await pgClient.query(query2, [id])

    res.json({
        response : response.rows
    })
})


main()