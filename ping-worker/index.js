import dotenv from 'dotenv'
dotenv.config()

import db from './config/db.js'
import './workers/monitorWorker.js'

(
    async () => {
        await db()
        console.log("Ping Worker Service Started")
    }
)()