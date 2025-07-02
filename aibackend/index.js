import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./routes/routes.js"
import ticketRoutes from "./routes/ticket.js"
import {serve} from "inngest/express"
import { inngest } from "./inngest/client.js"
import { onUserSignup } from "./inngest/function/onsignup.js"
import { onTicketCreated } from "./inngest/function/on-ticket-create.js"
import dotenv from "dotenv"
dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000
//cors is use to cors cross resource 
app.use(cors())
// for using json 
app.use(express.json())
// all this is coming api/auth 
app.use("/api/auth" , userRoutes)
app.use("/api/tickets", ticketRoutes)
app.use("/api/inngest" ,serve({
    client : inngest,
    functions: [onUserSignup , onTicketCreated]
}))
// this connect mongo data bases after connecting it will listen
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGO is connected");
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
})