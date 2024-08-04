import { Router } from "express";

const router = Router();

import todosRoute from "./api-todos.js";

router.use("/todos", todosRoute);

export default router;
