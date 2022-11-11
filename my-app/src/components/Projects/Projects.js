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
        <SectionTitle number="01">Project Idea</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        So this is our project idea.{" "}
        <StyledLink
          href="https://github.com/monciego"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our project repository
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
