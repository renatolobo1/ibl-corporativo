import React, { Component } from 'react';
import './SignForm.scss';
import api from "../../services/api";

class SignForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          courses: [],
        }
    }
    
    componentDidMount() {
        this.loadCourses();
    }
    
    loadCourses = async () => {
        try {
          const response = await api.get(`courses/index`);
          const courses = response.data;
          this.setState({ courses });
        } catch (err) {
          console.log(err);
        }
    }

    renderCourses = () => {
        const { courses } = this.state || [{ id: 1, title: "titulo" }];
        return courses.map(course => (
            <option key={course.id} value={course.id}>{course.title}</option>
        ))
    }

    renderAges = () => {
        const ages = [
            { id: 1, range: "5 - 10 anos" },
            { id: 2, range: "11 - 20 anos" },
            { id: 3, range: "21 - 30 anos" },
        ];
        return ages.map(age => (
            <option key={age.id} value={age.id}>{age.range}</option>
        ))
    }

    render() {
        return (

            <div className="inscricao">
                <p>Inscrição Online</p>
                <input type="text" placeholder="nome" />
                <input type="email" placeholder="email" />
                <input type="phone" placeholder="Telefone" />
                <div className="select-container">
                    <select className="select-inscricao" name="course">
                     {this.renderCourses()}
                    </select>
                    <select className="select-inscricao" name="age">
                        {this.renderAges()}
                    </select>
                </div>
                <div className="button-inscricao">
                    <p>Enviar</p>
                </div>
            </div>
        );
    }
}

export default SignForm;

