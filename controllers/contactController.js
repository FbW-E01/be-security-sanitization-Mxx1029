import express from 'express';
import Contact from "../models/contact.js";
const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/", async (request, response) => {
    response.json(await Contact.create(request.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find({}));
});

export default router;