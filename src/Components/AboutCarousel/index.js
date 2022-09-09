import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ProfileImage from '../ProfileImage';
import Skills from '../Skills';
import Experience from '../Experience';

function AboutCarousel() {
  return (
    <>
    <div></div>
    <div></div>
    <Container className="mt-100">
      <Carousel variant="dark">
        <Carousel.Item interval="30000">
          <ProfileImage />
         </Carousel.Item>
        <Carousel.Item interval="30000">
          <Skills />
        </Carousel.Item>
        <Carousel.Item interval="30000">
          <Experience />
        </Carousel.Item>
      </Carousel>
      </Container>
      </>
  );
}

export default AboutCarousel;
