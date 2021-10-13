import { validationResult } from 'express-validator'

export default function errorCheck(input) {
    return [
        ...input,

        (req, res, next) => {
            const result = validationResult(req);
            if (!result.isEmpty()) {
                res.status(400);
                res.json({
                    errors: result.errors.map(e => {
                        return { [e.param]: e.msg }
                    })
                });
                return;
            }
            next();
        }
    ];
};