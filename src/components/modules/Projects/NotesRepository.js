import React from "react";
import "../Button.css";
import "./Projects.css";
import { Button } from "../Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import notesRepository from "../../../resources/photos/myProjects/notesRepository.png";

export const NotesRepository = () => {
  return (
    <div className="Project-Element-Container" data-value="93">
      <div className="Project-Element-Child">
        <LazyLoadImage
          className="project-image vertical-image"
          alt={"Notes Repository"}
          src={notesRepository}
          effect="blur"
          delayTime={800}
        />
      </div>
      <div className="Project-Element-Child">
        <h5>
          NotesRepository
          <br />
          <span className="badge badge-primary badge-sm">2022</span>
          <span className="badge badge-primary badge-sm">Asp .net Core</span>
          <span className="badge badge-primary badge-sm">
            Entity Framework Core
          </span>
          <span className="badge badge-primary badge-sm">Blazor</span>
          <span className="badge badge-primary badge-sm">C#</span>
          <span className="badge badge-primary badge-sm">html, css</span>
          <span className="badge badge-primary badge-sm">MsSQL</span>
          <span className="badge badge-primary badge-sm">Docker</span>
          <span className="badge badge-primary badge-sm">Azure</span>
        </h5>
        <p className="myProjectDescription">
          {" "}
          Web application which allows user to take notes and share them across
          all of their devices. The purpose of this application is to provide
          the user with a complex solution to take notes. App makes use of
          Markdown language which allows quick and effective text formatting as
          well as nesting html code inside of the note.
        </p>
        <a
          className="noLinkLight"
          href="https://github.com/BrotherhoodOfTheMagesTower/notes-repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Button buttonStyle="btn--outline">
            <i className="fab fa-github"></i> View on github
          </Button>
        </a>
        <a
          className="noLinkLight"
          href="https://notesrepository.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <i className="fas fa-external-link-alt"></i> go to website
          </Button>
        </a>{" "}
      </div>
    </div>
  );
};
