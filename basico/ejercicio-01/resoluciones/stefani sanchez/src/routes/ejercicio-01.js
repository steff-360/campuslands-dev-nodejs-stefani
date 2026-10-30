import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.json({ ok:true, exercise:"' + $exerciseName + '", author:"stefani sanchez" });
});
export default router;
