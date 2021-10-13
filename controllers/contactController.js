import express from 'express';
import Contact from "../models/contact.js";
import contactRules from '../validation/contactRules.js';
import errorCheck from '../middleware/errorCheck.js';
const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/", 
    errorCheck(contactRules), 
    async (request, response) => {
        console.log(request.body);
        response.status(201);
        response.json(await Contact.create(request.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find({}));
});

export default router;