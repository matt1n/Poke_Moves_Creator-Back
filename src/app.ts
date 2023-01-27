import express from 'express';
import cors from "cors";
import {movesRoutes} from './routers/movesRoutes.js';
import { authRoutes } from './routers/authRoutes.js';
import likesRoutes from './routers/likesRoutes.js';
import commentsRoutes from './routers/commentsRoutes.js';

const server = express();

server
.use(cors())
.use(express.json())
.get("/health", (req,res)=>res.send("WOW, is workinaag"))
.use(movesRoutes)
.use(authRoutes)
.use(likesRoutes)
.use(commentsRoutes)

const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> console.log("Server is running in port:" + PORT))