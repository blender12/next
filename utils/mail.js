import nodeMailer from 'nodemailer';
import {google} from 'googleapis';
import {oauth2} from 'googleapis/build/src/apis/oauth2';
const OAuth2=google.auth.OAuth2;

export const Mail=(email,messg)=>{

    const OAuth2client=new OAuth2(
        '540938705045-6r5usjjv23bgidsnpqlsrq4ecpmevv3e.apps.googleusercontent.com',
        '22CLPKvns6aUVSRMu6Y0erVc',
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
            clientId:'540938705045-6r5usjjv23bgidsnpqlsrq4ecpmevv3e.apps.googleusercontent.com',
            clientSecret:'22CLPKvns6aUVSRMu6Y0erVc',
            refreshToken:'1//04AqJz-mW1ZiICgYIARAAGAQSNwF-L9IrzY480RkyFn5NpEozbS1kk-iwm2GlFNs3qf54lSABe4zRLVmPcLtOIP7Vh40THqHhy64',
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

