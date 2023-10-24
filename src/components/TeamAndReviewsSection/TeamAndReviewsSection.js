import React from 'react'
import './TeamAndReviews.css'
import Member from './Member'
import Review from './Review'

import img_kristine from '../../assets/images/Kristine.png'
import img_mark from '../../assets/images/Mark.png'
import img_kimberly from '../../assets/images/Kimberly.png'
import img_justin from '../../assets/images/Justin.png'
import img_cassandra from '../../assets/images/Cassandra.png'
import img_amanda from '../../assets/images/Amanda.png'
import img_jack from '../../assets/images/Jack.png'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import Dots from '../Generics/Dots'

const TeamAndReviewsSection = () => {

    const members = [
        {img: img_kristine, title: "Kristine Palmer", description: "Chef Operation Officer"},
        {img: img_mark, title: "Mark Aubri", description: "Senior Consultant"},
        {img: img_kimberly, title: "Kimberly Hansen", description: "Senior Tech Consultant"},
        {img: img_justin, title: "Justin Willoman", description: "Senior Consultant"}
    ]

    const reviews =[
        {img: img_cassandra, name: "Cassandra Warren", description: "Business Manager, Dorfus"},
        {img: img_amanda, name: "Amanda Tulling", description: "Senior Developer, Square"},
        {img: img_jack, name: "Jack McDogglas", description: "Key Account Manager, Gobona"}
    ]

    return (
        <section className="team-and-reviews">
            <div className="container meet-our-team">
                <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
                <Button type="yellow" text=" Browse Team " url="/team"/>
                <div className="team-members">
                    
                    {members.map((member, index) => (
                        <Member key={index} img={member.img} title={member.title} description={member.description}/>
                    ))}

                </div>
            </div>
            <Dots/>
            <div className="container testimonial">
                <SectionTitle title="Testimonial" description="What Our Client Says"/>
                <div className="reviews-row">

                    {reviews.map((reviewer, index) => 
                        <Review key={index} img={reviewer.img} name={reviewer.name} description={reviewer.description}/>
                    )}

                </div>
                <Button type="black" text="All Reviews" url="/reviews"/>
            </div>
        </section>
    )
}

export default TeamAndReviewsSection