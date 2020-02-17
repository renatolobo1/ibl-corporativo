import React, { Component } from 'react';
import './SlideShow.scss';
import Carousel from 'react-bootstrap/Carousel';
import imagem from './galeria1.jpg';
import DiscountForm from '../DiscountForm/DiscountForm';
import api from "../../services/api";

class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: {
        images:[],
      },
      redirect: null
    }
  }

  componentDidMount() {
    this.loadGallery();
  }

  loadGallery = async () => {
    try {
      const response = await api.get(`galleries/last`);
      const gallery = response.data;

      if (gallery) {
        this.setState({ gallery });
      }

    } catch (err) {
      console.log(err);
      this.setState({ redirect: true });
    }
  }

  renderGallery = () => {
    const { images } = this.state.gallery;
    return images.map(image => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image.url}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
    </Carousel.Item>
    ))
  }

  render() {
    return (
      <div id="course-carousel">
        <Carousel>
          {this.renderGallery()}
        </Carousel>
        <DiscountForm />
      </div>
    );
  }
}

export default SlideShow;
