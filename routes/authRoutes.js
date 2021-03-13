const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

// REGISTER A ADMIN
router.post('/register',async (req, res) => {
    try {
        const { Email, Address, FirstName, LastName, Password, PhoneNumber } = req.body;

        const hashedPassword = bcrypt.hashSync(Password,10);

        const newAdmin = new Admin({
            Email: Email,
            Address: Address,
            FirstName: FirstName,
            LastName: LastName,
            Password: hashedPassword,
            PhoneNumber: PhoneNumber
        });
        await newAdmin.save();
        res.send({error: false, message: 'Admin has been created'});
    } catch(e) {
        res.send({error:true, message: 'Failed to create admin'});
    }
});

// LOGIN ADMIN
router.post('/login',async (req, res) => {
    try {
        let { Email } = req.body;
        let admin = await Admin.findOne({Email: Email});

        if(!admin)
            return res.send({error: true, message: 'Incorrect Email'});
        if(admin && !bcrypt.compareSync(req.body.Password, admin.Password)) 
            return res.send({error: true, message: 'Incorrect Password'});
            
        let { Password, ...rest} = admin._doc;

        let token = jwt.sign(rest, process.env.JWT_SECRET, { expiresIn: '1d'});


        res.status(200).send({error: false,token: token });
    } catch(e) {
        console.log(e);
        res.send({error:true, message: 'Unknown Error Occured'})
    }
});

module.exports = router;