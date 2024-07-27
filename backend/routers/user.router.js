import express from 'express'
const router=express.Router();

import cors from 'cors';

const app = express();

app.use(cors());



import * as UserController from '../controller/user.controller.js';

router.post("/save",UserController.save);

router.get("/fetch",UserController.fetch);

router.delete("/delete",UserController.deleteUser);

router.patch("/update",UserController.update);

router.post("/login",UserController.login);

export default router;