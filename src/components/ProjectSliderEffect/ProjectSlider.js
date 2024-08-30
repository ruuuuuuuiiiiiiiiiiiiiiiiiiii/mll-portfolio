import React from 'react'
import portfolio from "../../images/project/mll-portfolio.png";
import '../ProjectSliderEffect/ProjectSlider.css'

const ProjectSlider = () => {

  let projectItems = document.querySelectorAll('.projectSlider .projectSliderList .projectSliderItem')
  let projectThumbnails = document.querySelectorAll('.projectThumbmail .projectThumbmailItem')

  //config param
  let countProjectItem = projectItems.length;
  let projectItemActive = 0;

  const handleClickArrows = (state) => {
    if(state === "projectNext"){
      projectItemActive = projectItemActive + 1;
        if(projectItemActive >= countProjectItem){
            projectItemActive = 0;
        }
        showSlider();
    }

    if(state === "projectPrev") {
      projectItemActive = projectItemActive - 1;
      if(projectItemActive < 0){
          projectItemActive = countProjectItem - 1;
      }
      showSlider();
    }
  }

  //auto run slider
  // let refreshInterval = setInterval(() => {
  //   handleClickArrows("projectNext")
  // }, 10000);

  const showSlider = () => {
    //remove item active old
    let projectItemActiveOld = document.querySelector('.projectSlider .projectSliderList .projectSliderItem.active');
    let projectThumbmailItemActiveOld = document.querySelector('.projectThumbmail .projectThumbmailItem.active');
    projectItemActiveOld.classList.remove("active");
    projectThumbmailItemActiveOld.classList.remove("active");

    //active new item
    projectItems[projectItemActive].classList.add('active');
    projectThumbnails[projectItemActive].classList.add('active');

    // clearInterval(refreshInterval);
    // refreshInterval = setInterval(() => {
    //   handleClickArrows("projectNext")
    // }, 3000);
    
  }

  // click thumbnail
  projectThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      projectItemActive = index;
      showSlider();
    })
  })

  return (
    <div className='project'>
      <div className="projectSlider">
              <div className="projectSliderList">
                <div className="projectSliderItem active">
                  <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 01</h2>
                    <p>Lorem ipsum 01</p>
                  </div>
                </div>
                <div className="projectSliderItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 02</h2>
                    <p>Lorem ipsum 02</p>
                  </div>
                </div>
                <div className="projectSliderItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 03</h2>
                    <p>Lorem ipsum 03</p>
                  </div>
                </div>
                <div className="projectSliderItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 04</h2>
                    <p>Lorem ipsum 04</p>
                  </div>
                </div>
                <div className="projectSliderItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 05</h2>
                    <p>Lorem ipsum 05</p>
                  </div>
                </div>
                <div className="projectSliderItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectSliderContent">
                    <p>design</p>
                    <h2>Slider 06</h2>
                    <p>Lorem ipsum 06</p>
                  </div>
                </div>
              </div>
              {/* button arrows */}
              <div className="projectArrows">
                <button id="projectPrev" onClick={() => {handleClickArrows("projectPrev");}}>←</button>
                <button id="projectNext" onClick={() => {handleClickArrows("projectNext");}}>→</button>
              </div>

              {/* thumbnail image */}
              <div className="projectThumbmail">
                <div className="projectThumbmailItem active">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 01
                  </div>
                </div>
                <div className="projectThumbmailItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 02
                  </div>
                </div>
                <div className="projectThumbmailItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 03
                  </div>
                </div>
                <div className="projectThumbmailItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 04
                  </div>
                </div>
                <div className="projectThumbmailItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 05
                  </div>
                </div>
                <div className="projectThumbmailItem">
                  <img src={`${portfolio}`} alt="mll-portfolio"/>
                  <div className="projectThumbmailContent">
                    Name Slider 06
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ProjectSlider