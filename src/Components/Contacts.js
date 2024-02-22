import './Contacts.css';
import linkedInIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import emailIcon from '../assets/email.png';
import instagramIcon from '../assets/instagram.png';

function Contacts({skill}) {
  return (
    <div className="Contacts">
      <a href='https://www.linkedin.com/in/aylo/' target='_blank'>
        <img src={linkedInIcon} alt='linkedin' />
      </a>
      <a href='https://github.com/annalo/' target='_blank'>
        <img src={githubIcon} alt='github' />
      </a>
      <a href='mailto:annayylo@gmail.com' target='_blank'>
        <img src={emailIcon} alt='email' />
      </a>
      <a href='https://www.instagram.com/grrroar/' target='_blank'>
        <img src={instagramIcon} alt='instagram' />
      </a>
    </div>
  )
}

export default Contacts;
