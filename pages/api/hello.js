import nodeMailer from 'nodemailer';
import {google} from 'googleapis';
import {oauth2} from 'googleapis/build/src/apis/oauth2';
const OAuth2=google.auth.OAuth2;



export default (req,res)=>{
    const {Message} = req.body;
    
    const OAuth2client=new OAuth2(
        process.env.clientID_mail,
        process.env.ClientSecret_mail,
        "https://developers.google.com/oauthplayground"
    );
    
    OAuth2client.setCredentials({
        refresh_token:process.env.mailer_ref_tk
    });
    
    const accessToken=OAuth2client.getAccessToken();
    
    const mailTransporter=nodeMailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAuth2",
            user:"cricketraid200@gmail.com",
            clientId:process.env.clientID_mail,
            clientSecret:process.env.ClientSecret_mail,
            refreshToken:process.env.mailer_ref_tk,
            accessToken:accessToken
    
        }
    });
    
    const mailOption={
        to:'cricketraid200@gmail.com',
        subject:"Thanks for joining Templemanto",
        generateTextFromHTML:true,
        html:`<h1>Conatct Portfolio</h1> <p>${Message}</p>`
    }
    
    mailTransporter.sendMail(mailOption, (err, data) => {
        if (err) {
          console.log(err);
          res.send("error" + JSON.stringify(err));
        } else {
          console.log("mail send");
          res.send("success");
        }
    });

}