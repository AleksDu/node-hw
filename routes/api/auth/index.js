import { Router } from "express";
import { registration, login, logout } from "../../../controllers/auth";
// import guard from "../../../middlewares/guard";

const router = new Router();

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);

export default router;
