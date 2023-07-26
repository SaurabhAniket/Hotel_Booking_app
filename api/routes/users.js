import express from "express";
import { deleteUser, getUser, getUsers, updateUser  } from "../controllers/user.js";
import { verifyAdmin, verifyToken , verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication" , verifyToken , (req,res,next)=>{
//    res.send("Hello user, you are login");
//})
// router.get("/checkuser/:id" ,verifyUser , (req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account");
// })
// router.get("/checkadmin/:id" ,verifyAdmin , (req,res,next)=>{
//     res.send("Hello Admin, you are logged in and you can delete all account");
// })

router.put("/id", verifyUser, updateUser);
router.put("/id",verifyUser,deleteUser);
router.put("/id",verifyUser,getUser);
router.put("/",verifyAdmin,getUsers);

export default router