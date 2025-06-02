import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import emoji from 'react-easy-emoji';
import './Greeting.css';
import landingPerson from '../../assets/lottie/landingPerson';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import OptimizedImage from '../../components/OptimizedImage';

import { illustration, greeting } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? 'dark-mode greeting-text' : 'greeting-text'}
              >
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p
                className={
                  isDark
                    ? 'dark-mode greeting-text-p'
                    : 'greeting-text-p subTitle'
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink || "#"}
                />
              </div>
              
            </div>
            <div className="button-greeting">
                
                <Button 
                  text="⭐ Star Me On Github "
                  newTab={true}
                  href={greeting.repoLink || "#"}
                />
              </div>
          </div>
         
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <OptimizedImage 
                src={require('../../assets/images/manOnTable.svg')}
                alt="man sitting on table"
                priority={true}
                width={500}
                height={500}
                className="greeting-image"
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
