function  auth(req,res){
    const authToken = req.headers['authorization']
    console.log(authToken)
    next();
}

module.exports = auth