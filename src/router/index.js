const { Router } = require('express');
const router = Router();
const crud = require('../public/js/curd')



router.get('/', async (req, res) => {
    const datas = await crud.getCollection();
    res.render('home/home',{datas})
})



module.exports = router;
