import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import TeamImage from "../../assets/TeamImage.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Our Team
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={TeamImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph style={{ marginTop: "200px" }}>
            We are team XYZ, we have 5 members in our team:
            <br></br>
            <br></br>
            <ul style={{ listStyleType: 'lower-latin', color: '#00ffff' }}>
              <li>Gandhi Monil - 20BCE10128,</li>
              <li>Shubham kumar - 20BCE10050,</li>
              <li>Akhil Rajeev P - 20BCE10386,</li>
              <li>Vivek Dharewa - 20BAI10032,</li>
              <li>Sparsh Mahajan - 20BAI10287</li>
            </ul>
          </StyledParagraph>
          {/* <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS, TailwindCSS,
            Bootstrap, PHP Laravel, Git and GitHub, Figma, Adobe XD and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              //href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume> */}
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
