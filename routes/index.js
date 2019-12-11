const {Router } = require('express')
const controllers =require('../controllers')
const router = Router()
// const restrict = require('../helpers')


router.get('/', (req,res) => res.send('This is root file for fantasy coder!'))
router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)

router.get('/users', controllers.getAllUsers)
router.get('/coders', controllers.getRosterFromUser)
router.get('/coders/:id', controllers.getCoderById)
router.get('/users/:id/coders', controllers.getAllCodersByUserId)
router.put('/users/:id/coders/:coder_id', controllers.updateRoster)



module.exports = router

 