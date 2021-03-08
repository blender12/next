import {Mail} from '../../utils/mail';


export default async(req,res)=>{
    if (req.method === 'POST') {
        await Mail(req.body.Email,req.body.Message);
        return await res.json({messg:'sent'});
      }
      res.json({messg:''})
}