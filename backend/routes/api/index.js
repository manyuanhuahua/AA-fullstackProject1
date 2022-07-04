const router = require('express').Router();
const sessionRouter = require('./session.js')
// const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
const userRouter = require('./user.js')
const {restoreUser}=require('../../utils/auth.js')

// router.post('/test', (req,res)=>{
//     res.json({requestBody: req.body})
// })

// router.get('/set-token-cookie', async (_req, res)=>{
//     const user = await User.findOne({
//         where:{
//             username: 'Demo-lition'
//         }
//     });
//     setTokenCookie(res,user);
//     return res.json({user})
// })

router.use(restoreUser);

// router.get('/restore-user',(req,res)=>{
    //     return res.json(req.user)
    // })


const { requireAuth} = require('../../utils/auth.js');
router.use(requireAuth)

    // const { requireAuth} = require('../../utils/auth.js');
    // router.get('/require-auth',requireAuth,(req,res)=>{
    //         return res.json(res)
    // })

router.use('/session',sessionRouter)

router.use('/users',userRouter);

// router.post('/test',(req,res)=>{
//     res.json({requestBody: req.body})
// })



module.exports = router;