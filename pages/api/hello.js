import {Mail} from '../../utils/mail';


export default function handler (req,res){
        Mail(req.body.Email,req.body.Message);
         res.json({messg:'sent'});
      
}