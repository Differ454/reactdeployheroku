import React from "react";
import "./About.css";
import PHP from "../../assets/phporg.png";
import SQL from "../../assets/db.png";
import REACT from "../../assets/reactjs.png";
import GIT from "../../assets/git.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
   
      <div className="wrap">
          <div className="cube">
            <img className="landing" src={SQL} alt="MySql" />
            <img className="landing" src={PHP} alt="php" />
            <img className="landing" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAAE5pE7RAAADAFBMVEX///+AvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQEc0sD/AAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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" alt="Javascript" />
            <img className="landing" src={REACT} alt="reactjs" />
            <img className="landing" src={"https://assets.algoexpert.io/spas/main/prod/ge715d58bea-prod/dist/images/4f67b9c3f3ba9f0538d0.png"} alt="GitHUb" />
            <img className="landing" src={GIT} alt="Git" />

          </div>
        </div> 


        {/* <div className="about__me">
          <div className="about__me-image">
             <img className="picture" src={ME} alt="About Image" /> 
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 + Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            rerum voluptatibus modi similique soluta natus maiores at unde
            officia nobis eveniet sit in obcaecati cum doloremque? Eos maiores,
            neque tenetur aperiam sapiente voluptatum placeat officiis, libero
            facere dolor ad quisquam fugit assumenda laudantium deserunt
            perferendis officia sed minima repudiandae? Sunt voluptatum quisquam
            dolorem. Exercitationem, voluptatibus quae a amet quis sit.
            Consectetur, ea iusto blanditiis omnis veritatis nihil adipisci
            nulla voluptate non fugiat laborum ullam eos delectus facilis?
            Similique in, illo doloribus ab reiciendis eaque. Quam cumque
            sapiente impedit delectus nihil doloremque repellendus dolores.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
