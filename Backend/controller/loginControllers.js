const sendlogin = async(req,res)=>{
    try {
        res.send("ddddd")
        
    } catch (error) {
        res.status(500).json()
    }

}

module.exports = {
  sendlogin
};