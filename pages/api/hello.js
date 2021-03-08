import {Mail} from '../../utils/mail';


export default async(req,res)=>{
    if (req.method === 'POST') {
       await res.json({messg:'sent'});
       return Mail(req.body.Message);
      }
      res.json({messg:''})
}