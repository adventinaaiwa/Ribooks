const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/register');
const {login} = require('./controllers/login');
const {getUser} = require('./controllers/getUser');

router.post('/register', [
    body('name',"The name must be of minimum 3 characters length.")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Please insert your correct email address.")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"Password must be of minimum 6 characters length.").notEmpty().trim().isLength({ min: 6 }),
], register);


router.post('/login',[
    body('email',"Invalid email address.")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"Password must be of minimum 6 characters length.").notEmpty().trim().isLength({ min: 6 }),
],login);

router.get('/getuser',getUser);

//router.get('/logout',logout);

module.exports = router;