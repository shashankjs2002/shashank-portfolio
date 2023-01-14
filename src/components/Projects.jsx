import React from 'react'
// import { Container } from 'semantic-ui-react';
// import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import portfolioIcon from './assets/favicons/android-chrome-512x512.png'
import _10NewsIcon from './assets/10NewsIcon.png'
import myEnotesIcon from './assets/myEnotesIcon.png'

const Projects = (props) => {

  return (
    <div className='projects skills' id='projects'>
        <h1>Projects</h1>
        <div className="project row" 
        // style={{display:'flex', justifyContent:'space-between'}}
        >
            <div className="card col-md-4 mx-3 my-3" style={{background:'#493434'}}>
                <img src={portfolioIcon} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Portfolio Website</h5>
                    <p className="card-text">Portfolio website to showcase my skills and Projects developed in React.js. Anybody can contact me just by filling embedded google form.</p>
                    <a href="#" className="btn btn-danger">Visit --&gt; </a>
                </div>
            </div>
            <div className="card col-md-4 mx-3 my-3" style={{background:'#493434'}}>
                <img src={_10NewsIcon} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">10-News</h5>
                    <p className="card-text">
                    A React app that fetches news from API.
                    Inject props in URL to get results including search parameters.
                    Search parameters are passed to various components using
                    Context API.
                    </p>
                    <a target='_blank' href="https://10news.shashankjsirothiya.tk/" className="btn btn-danger">Visit --&gt;</a>
                </div>
            </div>

            {/* <div className="card col-md-4 mx-3 my-3" style={{background:'#493434'}}>
            <p>Space for google ads</p>
            <ins class="adsbygoogle"
                style={{display:"block"}}
                data-ad-format="fluid"
                data-ad-layout-key="+3l+p8-2p-6f+12g"
                data-ad-client="ca-pub-6847172398832884"
                data-ad-slot="3665300344"></ins>
                
                
                <script>

                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div> */}
            <div className="card col-md-4 mx-3 my-3" style={{background:'#493434'}}>
                <img src={myEnotesIcon} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">My e-Notes</h5>
                    <p className="card-text">A MERN Web application to store notes on cloud.
User can login and fetch their notes from any device.
Display username of logged in user using Context API.
Component like modal is reused for adding and updating note.
</p>
                    <a target='_blank' href="https://github.com/shashankjs2002/My-Notes" className="btn btn-danger">Visit --&gt;</a>
                </div>
            </div>
        
            
            {/* <Container>
            <div className='ui three column grid' id="cakesProduct">

            <div className="card ui fluid " style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card ui fluid " style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card ui fluid " style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            </Container> */}

        {/* <ScrollMenu
            arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
            arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
    
            
    
                    // data={numberOfPicture.map((picture, index) => (
                        
                {
                ...<>
                <div className="card ui fluid " style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card ui fluid " style={{width:"18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                        
            </>
                }
    //     //         <img
    //     //         style={{ height: "100px" }}
    //     //         alt="test"
    //     //         src="https://reactjs.org/logo-og.png"
    //     // />
    //   )
    //   )
    // }
    /> */}

        </div>

    </div>
  )
}

export default Projects