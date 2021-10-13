import { body } from 'express-validator';

const contactRules = [
    body("name").exists().withMessage("name-required"),
    body("name").trim(),
    body("name").escape(),
    body("name").isLength({ min: 3 }).withMessage("name-minLength-3"),
    body("message").exists().withMessage("message-required"),
    body("message").trim(),
    body("message").escape(),
    body("message").isLength({ min: 3 }).withMessage("message-minLength-3"),
    body("message").isLength({ max: 400 }).withMessage("message-maxLength-400"),
    body("email").exists().withMessage("email-required"),
    body("email").trim(),
    body("email").escape(),
    body("email").isEmail().withMessage("email-invalid"),
    body("email").normalizeEmail(),
    body("email").custom(email => {
        if (alreadyHaveEmail(email)) {
            throw new Error('email-taken')
        }
    }),
    body("telephone").trim(),
    body("telephone").escape(),
    body("telephone").isNumeric({ no_symbols: true }).withMessage("telephone-only-numbers"),
    // body("telephone").isMobilePhone('en-US', { strictMode: true }).withMessage("telephone-needs-country-code"),

];

export default contactRules;