
import User from '../../models/user';
import connectDb from '../../utils/db';

connectDb();

export default async (req, res) => {
    if(req.method==='POST'){
        let user=await User({username:req.body.username,email:req.body.Email}).save();
         return res.json(user);
    }
    let user=await User.find({});
     res.json(user);
}