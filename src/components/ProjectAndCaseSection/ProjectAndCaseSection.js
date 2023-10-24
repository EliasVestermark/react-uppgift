import React from 'react'
import './ProjectAndCase.css'
import Project from './Project'

import img_article from '../../assets/images/article.png'
import img_glasses from '../../assets/images/glasses.png'
import img_notebook from '../../assets/images/notebook.png'
import img_laptop from '../../assets/images/laptop.png'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const ProjectAndCaseSection = () => {

    const projects = [
        {img: img_article, alt: "man reading newspaper", title: "Grow your business"},
        {img: img_glasses, alt: "pink apple products", title: "Why your client needs a responsive website"},
        {img: img_notebook, alt: "desk with office supplies", title: "Educate your employees to get better results"},
        {img: img_laptop, alt: "open laptop", title: "Business Insights is a important piece of your business"}
    ]

  return (
        <section className="project-and-case">
            <div className="container">
                <SectionTitle title="Project and Case Studies" description="Let’s Looks Our Global Projects"/>
                <div className="project-and-cases">

                    {projects.map((project, index) => (
                    <Project key={index} img={project.img} alt={project.alt} title={project.title}/>
                    ))}
                    
                </div>
                <div className="center-content">
                    <Button type="black" text="All Recent Projects" url="/projects"/>
                </div>
            </div>
        </section>
    )
}

export default ProjectAndCaseSection