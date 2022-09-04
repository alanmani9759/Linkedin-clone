import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css'

const Widgets = () => {

    const newsArticle = (heading, subtitle)=>{
      return (
        <div className="widgets__article">
         <div className="widgets__articleLeft">
          <FiberManualRecordIcon/>
         </div>
         <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
         </div>
        </div>
      )
    }
    return ( 
        <div className="widgets">
         <div className="widgets__header">
          <h2>Linkedin News</h2>
          <InfoIcon/>
         </div>
         {newsArticle('Alan is learning react','Top news- 3000 readers')}
         {newsArticle('Bitcoin is used everywhere','Top news- 9000 readers')}
         {newsArticle('Going to get a job','Top news- 4567 readers')}
         {newsArticle('I love working with redux','Top news- 10987 readers')}
         {newsArticle('hello people','Top news- 45456 readers')}
        </div>
     );
}
 
export default Widgets;