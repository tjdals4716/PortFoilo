/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

// 3. 증명사진
import image from "../images/song2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

// 4. 포트폴리오 사이트 (프로젝트 깃허브 사이트 등 올릴 것)
const projectList = [
  {
    title: "CapstoneDesign Team Project",
    description:
      "This is an in-school capstone design project that was carried out from 2023.09.01 ~ 2024.06.23 The theme is Voting Community, which established servers and databases of community web/apps through voting",
    url: "https://github.com/l0o0lv/Do-Vote",
  },
  {
    title: "SoftwareEngineering Project",
    description:
      "This is an in-school software engineering project that was carried out from 2024.03.01 ~ 2024.06.23. With the theme of the upcoming Paris Olympics, we created the project by differentiating existing Olympic shopping malls, collaborations with famous athletes, and auctions",
    url: "https://github.com/OlymPick",
  },
  {
    title: "LikeLion Central Hackton",
    description:
      "This is a central hackathon project organized by LikeLion, a club held at the Yangjae at Center in Seoul from 2024.08.06 ~ 2024.08.07. Under the theme of 'Solving Health Problems of Modern People' we developed a system that provides laughter to users by linking laughter and dopamine and rewards users who laugh a lot",
    url: "https://github.com/MangoWafflee",
  },
  {
    title: "VentureStartup Academy Hackathon",
    description:
      "This is a venture start-up academy hackathon project organized by venture start-ups from 2024.08.13 ~ 2024.08.14. Under the theme of 'Start-Up Problem Solving' we developed an AI service under the theme of interaction between influencer and companies",
    url: "https://github.com/Team-Innovator",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
