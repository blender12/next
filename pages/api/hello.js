import {Mail} from '../../utils/mail';


export default function handler (req,res){
    if (req.method === 'POST') {
         res.json({messg:req.body.email});
      }
}