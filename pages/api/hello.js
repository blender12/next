import nodeMailer from 'nodemailer';
import {google} from 'googleapis';
import {oauth2} from 'googleapis/build/src/apis/oauth2';
const OAuth2=google.auth.OAuth2;

 const Mail=(messg)=>{

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
        html:`<h1>Conatct Portfolio</h1> <p>${messg}</p>`
    }
    
    mailTransporter.sendMail(mailOption,(err)=>{
        if(err){return console.log(err+" "+"mail")}
        console.log("mail sent");
    
    })
}


export default async(req,res)=>{
    if (req.method === 'POST') {
       await res.json({messg:'sent'});
       return Mail(req.body.Message);
      }
      res.json({messg:''})
}