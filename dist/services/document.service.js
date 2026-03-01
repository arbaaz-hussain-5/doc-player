import { Document } from "../models/document.model.js";
import { DatabaseMongooseError } from "../errors/DatabaseMongooseError.error.js";
async function findDocumentById(id, projectionObject = []) {
    return await Document.findById(id, projectionObject).exec();
}
async function addDocument(documentName, author, documentLink, genre) {
    try {
        await new Document({
            documentName,
            author,
            documentLink,
            genre,
        }).save();
        return true;
    }
    catch (err) {
        throw new DatabaseMongooseError("database error");
    }
}
export { findDocumentById, addDocument };
//# sourceMappingURL=document.service.js.map