const router = require('express').Router();
const User = require('./UserModel')
const authUser = require('./authUser');


router.post('/users', async (req, res) => {
    try{
        console.log(req.body);
        const user = await User.create(req.body);
        await user.generateToken();
        
        console.log(user);
        res.send(user);
    }catch(err){
        res.status(500).send()
        console.log(err);
    };
});

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findByCredentials(email, password);
        await user.generateToken();
        res.status(200).send(user);
        console.log(user);

    }catch(err){
        console.log(err)
        res.status(500).send()
    }
})

router.post('/auto-login', authUser, async (req, res) => {
    res.send(req.user);

})

router.post('/logout', authUser, async (req, res) => {
    const user = req.user;
    user.token = '';
    await user.save();
    res.status(200).send();

})

router.post(`/add-favorites`, authUser, async (req, res) => {
    const {mealId} = req.body;
    const user = req.user;
    user.favorite.push(mealId);
    await user.save();
    res.status(200).send(user);
})

router.post(`/remove-favorites`, authUser, async (req, res) => {
    console.log(req.body);
    const {mealId} = req.body;
    console.log(mealId);
    const user = req.user;
    console.log(user.favorite);
    user.favorite = user.favorite.filter(id => id != mealId);
    await user.save();
    res.status(200).send(user);
})

module.exports = router;