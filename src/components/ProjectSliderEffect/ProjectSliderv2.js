import React from 'react'
import portfolio from "../../images/project/mll-portfolio.png";
import '../ProjectSliderEffect/ProjectSlider.css'

const ProjectSliderv2 = () => {
  return (
    <div className='projectCarousel'>
        <div className="projectList">
            <div className='projectItem'>
                <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                <div className="projectContent">
                    <div className="projectName">TEST Name 01</div>
                    <div className="projectTopic">TEST Topic 01</div>
                    <div className="projectOther">TEST Other 01</div>
                    <div className="projectDesc">TEST Desc 01</div>
                    <div className='projectContentButton'>
                        <button>SEE MORE</button>
                        <button>TRY</button>
                    </div>
                </div>
            </div>
            <div className='projectItems'>
                <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                <div className="projectContent">
                    <div className="projectName">TEST Name 02</div>
                    <div className="projectTopic">TEST Topic 02</div>
                    <div className="projectOther">TEST Other 02</div>
                    <div className="projectDesc">TEST Desc 02</div>
                    <div className='projectContentButton'>
                        <button>SEE MORE</button>
                        <button>TRY</button>
                    </div>
                </div>
            </div>
            <div className='projectItems'>
                <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                <div className="projectContent">
                    <div className="projectName">TEST Name 03</div>
                    <div className="projectTopic">TEST Topic 03</div>
                    <div className="projectOther">TEST Other 03</div>
                    <div className="projectDesc">TEST Desc 03</div>
                    <div className='projectContentButton'>
                        <button>SEE MORE</button>
                        <button>TRY</button>
                    </div>
                </div>
            </div>
            <div className='projectItems'>
                <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                <div className="projectContent">
                    <div className="projectName">TEST Name 04</div>
                    <div className="projectTopic">TEST Topic 04</div>
                    <div className="projectOther">TEST Other 04</div>
                    <div className="projectDesc">TEST Desc 04</div>
                    <div className='projectContentButton'>
                        <button>SEE MORE</button>
                        <button>TRY</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="projectThumbnail">
            <div className="projectThumbnailItem">
                <div className="projectThumbnailItemContent">
                    <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                    <div className="projectThumbnailItemContentTitle">
                        Slider 01
                    </div>
                </div> 
            </div>
            <div className="projectThumbnailItem">
                <div className="projectThumbnailItemContent">
                    <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                    <div className="projectThumbnailItemContentTitle">
                        Slider 02
                    </div>
                </div> 
            </div>
            <div className="projectThumbnailItem">
                <div className="projectThumbnailItemContent">
                    <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/>
                    <div className="projectThumbnailItemContentTitle">
                        Slider 03
                    </div> 
                </div> 
            </div>
            <div className="projectThumbnailItem">
                <div className="projectThumbnailItemContent">
                    <img className="projectSliderImg" src={`${portfolio}`} alt="mll-portfolio"/> 
                    <div className="projectThumbnailItemContentTitle">
                        Slider 04
                    </div> 
                </div> 
            </div>
        </div>

        {/* button arrows */}
        <div className="projectArrows">
            <button 
                id="projectPrev" 
                // onClick={() => {handleClickArrows("projectPrev");}}
            > 
                ←
            </button>
            <button 
                id="projectNext" 
                // onClick={() => {handleClickArrows("projectNext");}}
            >
                →
            </button>
            </div>
    </div>

  )
}

export default ProjectSliderv2