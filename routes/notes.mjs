import express from "express";
import notesController from "../controllers/notes.controller.mjs";

const router = express.Router();

// NOTES ROUTES
router.post("/username/:collection", notesController.getNotesByUsernameAndCollection); // Get notes by username and collection
router.post("/", notesController.insert); // Create new note
router.delete("/:id", notesController.delete) // Delete note
router.delete("/:username/:collection", notesController.deleteByUsernameAndCollection);
router.patch("/:id", notesController.update); // Update note
router.patch("/username/:collection", notesController.editByUsernameAndCollection); // Update notes by username and collection

export default router;