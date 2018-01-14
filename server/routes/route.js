import express from 'express';

// Import Controller object from controller folder
import * as RecipeController from '../controllers/controller';

// Create router object
const router = express.Router();

// Set routes
router.route('/')
    .get(RecipeController.getRequest)
    .post(RecipeController.postRequest)
    .put(RecipeController.putRequest);

router.route('/:id')
    .get(RecipeController.getRequestByID)
    .delete(RecipeController.deleteRequestById);

export default router;