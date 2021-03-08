import {Mail} from '../../utils/mail';


export default function handler (req,res){
    if (req.method === 'POST') {
         Mail(req.body.Email,req.body.Message);
         res.json({messg:'sent'});
      }
}