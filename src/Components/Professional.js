import React,{ useState, useRef } from 'react';

import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Swiper from 'react-id-swiper';






function Professional (){
	const [swiper, setSwiper] = useState(null);
	const ref = useRef(null);

	//const [index, setIndex] = useState(0);
	

	  const params = {
		pagination: {
		  el: '.swiper-pagination',
		  type: 'bullets',
		  clickable: true
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev'
		},
		spaceBetween: 30
	  }
	  const goNext = () => {
		if (ref.current !== null && ref.current.swiper !== null) {
		  swiper.slideNext();
		setSwiper(swiper.slideNext);
		}
	  };
	 
	  const goPrev = () => {
		if (ref.current !== null && ref.current.swiper !== null) {
		  swiper.slidePrev();
		setSwiper(swiper.slidePrev);
		}
		};
return(


	<><br/>
	
	<Swiper ref={ref}{...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
	
	
	
	
	<br/><div style={{height:"auto%" ,borderStyle:"dashed",margin:"4%"}}>
	<Carousel  controls={false} >
		<Carousel.Item interval={2000}>
		<h1>Empowered Futures</h1>

			<h6>Frontend Developer</h6>
			<Carousel.Caption>
			<p>September,2022 - current</p>				
			</Carousel.Caption>
		</Carousel.Item>
	
		<Carousel.Item interval={6000}>
		<table>
		
		<tbody>Meeting with the development team to discuss user interface ideas and applications</tbody>
		<tbody>Responsible for the design and implementation of user interfaces</tbody>
		<tbody>Documenting application changes and developing updates</tbody>
		<tbody>Reviewing application requirements and interface designs as required by tickets</tbody>
		<tbody>Writing application interface codes using JavaScript following react.js workflows</tbody>

	</table>
		</Carousel.Item>
	</Carousel>
	</div>



	<Carousel  controls={false}>
		<Carousel.Item interval={2000}>
		<h1>Diksha Empires</h1>

			<h6>Full-Stack Developer</h6>
			<Carousel.Caption>
			<p>Toronto January 2021 - May 2021</p>				
			</Carousel.Caption>
		</Carousel.Item>
	
		<Carousel.Item interval={6000}>
		<table>
		
		<tbody>Work in sprints and create, develop and deliver features as decided in planning</tbody>
			<td>Work closely with the product owner and deliver good quality and performant code</td>
			<tbody>Implement best practices, use source control to commit the code to git repositories and review and merge the final code</tbody>
			<tbody>Extensively used GitHub, Android Studio, Teams, Zoom</tbody>
			<tbody>Technologies Used: HTML, CSS, Android (Java), Native Development, Firebase</tbody>
	</table>
		</Carousel.Item>
	</Carousel>
	
	{/* <table>
			<thead>Full-Stack Developer</thead>
			<thead>Diksha Empires</thead>
			<tbody>Toronto January 2021 - May 2021</tbody>
			<tbody>Work in sprints and create, develop and deliver features as decided in planning</tbody>
			<td>Work closely with the product owner and deliver good quality and performant code</td>
			<tbody>Implement best practices, use source control to commit the code to git repositories and review and merge the final code</tbody>
			<tbody>Extensively used GitHub, Android Studio, Teams, Zoom</tbody>
			<tbody>Technologies Used: HTML, CSS, Android (Java), Native Development, Firebase</tbody>
		</table>
		<br/> */}
		
		{/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
	  <img className="d-block w-100"
	  	src={st1}
		alt="anImage"
		></img>
		
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
		
		</>




	
	)
}


export default Professional;