import {Router} from 'express'
import {registerUserController} from "../controllers/user.controller.js"
import {verifyEmailController} from "../controllers/user.controller.js"
import {loginController} from "../controllers/user.controller.js"
import {logoutController} from "../controllers/user.controller.js"
import {uploadAvatar} from "../controllers/user.controller.js"
import {updateUserDetail} from "../controllers/user.controller.js"
import {forgotPasswordController} from "../controllers/user.controller.js"
import {verifyForgotPasswordOtp, resetpassword, refreshToken,userDetails} from "../controllers/user.controller.js"
import upload from "../middleware/multer.js"
import auth from '../middleware/auth.js'


const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login', loginController)
userRouter.get('/logout',auth, logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'), uploadAvatar)
userRouter.put('/upload-avatar',auth,upload.single('avatar'), uploadAvatar)
userRouter.put('/upload-avatar',auth,upload.single('avatar'), uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetail)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetpassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)







export default userRouter