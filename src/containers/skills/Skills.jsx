import React, { useContext } from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { illustration, skillsSection } from '../../portfolio';
import { Fade } from 'react-awesome-reveal';
import codingPerson from '../../assets/lottie/codingPerson';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import OptimizedImage from '../../components/OptimizedImage';
import StyleContext from '../../contexts/StyleContext';

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? 'dark-mode main' : 'main'} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <OptimizedImage
                alt="Man Working"
                src={require('../../assets/images/developerActivity.svg')}
                width={400}
                height={400}
                className="skills-image"
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? 'dark-mode skills-heading' : 'skills-heading'}
            >
              {skillsSection.title}{' '}
            </h1>
            <p
              className={
                isDark
                  ? 'dark-mode subTitle skills-text-subtitle'
                  : 'subTitle skills-text-subtitle'
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? 'dark-mode subTitle skills-text'
                        : 'subTitle skills-text'
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
