const apiAdapter = require('../../apiAdapter')
const {URL_SERVICE_USERS}= process.env
const api = apiAdapter(URL_SERVICE_USERS);
module.exports= async(req, res)=>{
    try {
        const media = await api.get('http://localhost:8080/users')
        return res.send({'status':media.status,'data':media.data})
      } catch (error) {
         if(error != null){
          return res.send(error.message)
         }else{
           return res.send(error)
         }
      }
}