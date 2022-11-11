import React from "react";
import { StyledParagraph, StyledLink } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

const Projects = () => {
  return (
    <StyledProjects id="projects" style={{ backgroundColor: "#F2AA4CFF" }}>
      <SectionHeading>
        <SectionTitle number="01">Project Idea & Description </SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        {" "}
        <StyledLink
          href="https://github.com/monciego"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our project repository
        </StyledLink>
      </StyledParagraph>
      <StyledParagraph style={{ color: "green" }}>
        <strong style={{ color: "red" }}>Project Description: </strong><br /><br />
        Creating a web app to recommend retailers the most
        preferred items in their home regions , predicting the
        profit margins they will generate after prioritising the
        recommended products using machine learning and
        feedback collection of the entire ecosystem using
        blockchain technology.<br /><br />
        <strong style={{ color: "red" }}>Project Description: </strong>
        <br /><br />
        <ul>
          <li>-- Data analyzation will be done through various bills of retail stores and
            we will be able to predict most popular items using machine learning</li><br />
          <li>--The shopkeepers will use our web application and as input they will add
            location and type of shop they are running like pharmacy, grocery, cloth
            shop, shoe shop, etc. and the capacity of their shop.</li><br />
          <li>--Our web application will be to give output as which item they should
            keep and how much % chances will those items will be sold. Our web
            application will also be able to predict the amount of profit they will be
            able to generate.</li><br />
          <li>--This will help small shop owners and since india is a diverse country so
            we will have the interface available in at least 10 regional languages.
            Feedback collection maybe done implementing blockchain technology</li><br />
        </ul>
      </StyledParagraph>
      {/* <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer> */}
    </StyledProjects>
  );
};

export default Projects;
