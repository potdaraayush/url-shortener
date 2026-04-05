import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
    try {
        // 1. read header
        const authHeader = req.headers.authorization;
        // 1a. missing header
        // 1b. header doesnt start with "bearer "
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({error: "unauthorized"});
        }
        // 2. extract bearer token
        const token = authHeader.split(" ")[1];

        // 3. verify token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // 4. extract user and attach to request
        req.user = {id: decoded.sub}

        // 5. call next
        next();

    } catch(err) {
        return res.status(401).json({err: "unauthorized"})
    }
}
