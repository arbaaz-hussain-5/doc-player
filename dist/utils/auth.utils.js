import jwt from "jsonwebtoken";
function createAutheticationToken(userobject) {
    const token = jwt.sign(userobject, "your-secret-key", {
        expiresIn: "1h",
    });
    return token;
}
function verifyAuthentication(authenticationToken) {
    try {
        const decoded = jwt.verify(authenticationToken, "your-secret-key");
        if (typeof decoded !== "string")
            return [true, decoded];
        throw "not founf";
    }
    catch (error) {
        return [false, "invalid token"];
    }
}
export { verifyAuthentication, createAutheticationToken };
//# sourceMappingURL=auth.utils.js.map