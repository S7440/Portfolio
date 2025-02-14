import React from 'react';
import Project from './Project';

function Projects() {
  const projectList = [
    { 
      title: 'MNIBA', 
      description: 'The MNIBA website went through several iterations through my tenure with MNIBA. When I started the website was a very basic static html site and I assisted with custom CSS ensuring compliance with our branding guideline. In 2024 I came up with a development road map for all mniba systems that included a transition to WordPress saving the organization over 7k in annual operations expenses. As of November of 2024 we had launched our new site and custom theme with a roadmap review to take place with the new Executive director in December 2024. As of January 2025 the site has been deprecated with a new Wix site put in place by the new team.',
      headerImage: '/assets/imgs/mnibaHome.png'
    },
    { 
      title: 'Business Directory', 
      description: 'MNIBA operated a Native Business Directory as part of their Buy Native campaign. When I joined the organization the directory was a table on their website. During my onboarding I became involved with the development of a dedicated WordPress based subscription membership site for the directory. The business directory used API access to offer a nationwide map with interactive location pins to showcase local and national businesses. As of January 2025 the business directory has been deprecated with no replacement listed.',
      headerImage: '/assets/imgs/directoryHome.png'
    },
    { 
      title: 'MNAA', 
      description: 'As part of the 2024 IT overhaul I was tasked with the development of a new website for the MNAA. The site was built on WordPress and included a custom theme. The site was designed to act as a replacement for the Squarespace site previously developed. The site hosted an events page that mirrored our Facebook events, resources catered to artist entrepreneurs, programs, and showcase the work we did with artists.',
      headerImage: '/assets/imgs/mnaaLogo.png'
    },
    { 
      title: 'MNIBA Shop', 
      description: 'MNIBA chose to go with a Shopify site for our sales POS which allowed us to offer a modern shopping experience for customers nationwide as well as an inventory management system. I developed a custom theme using Liquid and CSS as well developed a donations plugin for the store.',
      headerImage: '/assets/imgs/mnibalogos-05.avif'
    }
  ];

  // Sort the projectList alphabetically by title
  projectList.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="main">
      <div>
        <h1>Projects Page</h1>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              headerImage={project.headerImage}
            />
          ))}
        </div>
     
      </div>
    </main>

  );
}

export default Projects;