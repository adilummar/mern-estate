import express from "express";
import { test } from "../condrollers/user.condroller.js";

const router = express.Router()

router.get('/test',test);


export default router;