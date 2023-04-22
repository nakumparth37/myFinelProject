const jwt = require("jsonwebtoken")


function verify(req,res,next){
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            console.log(user);
            if(err) res.status(403).json("Token is not valid !");
            console.log(err);
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Your are note Authentication");
    }
}



module.exports = verify;