/*import {Mail} from '../../utils/mail';*/


export default async(req,res)=>{
    if (req.method === 'POST') {
        await res.json({messg:req.body.Email});
      }
      res.json("good");
}