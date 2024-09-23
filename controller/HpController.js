const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    abouts:(req, res)=>{
        res.render('abouts');
    },
    products:(req, res)=>{
        res.render('products');
    },
    blog:(req, res)=>{
        res.render('blog');
    },
    contacts:(req, res)=>{
        res.render('contacts');
    },
};
module.exports = con;