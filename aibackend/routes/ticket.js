import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { createTicket, getTicket, getTickets ,deleteTicket } from "../controllers/ticket.js";

const router = express.Router();

router.get("/get-tickets", authenticate, getTickets);
router.get("/get-ticket/:id", authenticate, getTicket);
router.post("/create-ticket", authenticate, createTicket);
router.delete("/get-ticket/:id",  deleteTicket);
export default router;