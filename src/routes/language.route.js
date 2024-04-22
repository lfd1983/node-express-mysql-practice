import {Router} from "express"
import { methods as languageControllers } from "./../controllers/language.controller"

const router = Router()

router.get("/", languageControllers.getLanguages)
router.get("/:id", languageControllers.getLanguage)
router.delete("/:id", languageControllers.deleteLanguage)
router.put("/:id", languageControllers.updateLanguage)
router.post("/", languageControllers.addLanguages)

export default router