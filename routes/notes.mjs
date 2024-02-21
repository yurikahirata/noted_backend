import express from "express";
import notesController from "../controllers/notes.controller.mjs";

const router = express.Router();

// USER ROUTES
router.get("/:username/:collection", notesController.getNotesByUsernameAndCollection); // All unsorted notes by username
router.post("/", notesController.insert); // Create new note
router.delete("/:id", notesController.delete) // Delete note
router.delete("/:username/:collection", notesController.deleteByUsernameAndCollection);
router.patch("/:id", notesController.update); // Update note
router.patch("/:username/:collection", notesController.editByUsernameAndCollection); // Update notes by username and collection

export default router;