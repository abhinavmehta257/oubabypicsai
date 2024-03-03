import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
  } from 'next-share'
  
export default function ShareLinks(){
    const shareLink = 'https://www.instagram.com/ourbabypicai?igsh=MTR2Ym1xdGtraG4zbA==';
    const shareText= 'See Your Future Baby👶 With Our AI Baby Generator✨';
    console.log(shareLink,shareText);
    return (
    <div className='share-btns'>
        <FacebookShareButton
            url={`${shareLink}`}
            quote={shareText}
            >
            <FacebookIcon size={32}/>
        </FacebookShareButton>
        <WhatsappShareButton
            url={`${shareLink}`}
            title={shareText}
            separator=":: "
            >
            <WhatsappIcon size={32} />
        </WhatsappShareButton>
        <TwitterShareButton
            url={`${shareLink}`}
            title={shareText}
            >
            <TwitterIcon size={32} />
        
        </TwitterShareButton>
        <EmailShareButton
            url={`${shareLink}`}
            subject={'Next Share'}
            body="body"
            >
            <EmailIcon size={32} />
        </EmailShareButton>
    </div>)
}