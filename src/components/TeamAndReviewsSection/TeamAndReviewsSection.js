import React from 'react'
import './TeamAndReviews.css'
import Member from './Member'

import img_kristine from '../../assets/images/Kristine.png'
import img_mark from '../../assets/images/Mark.png'
import img_kimberly from '../../assets/images/Kimberly.png'
import img_justin from '../../assets/images/Justin.png'
import img_cassandra from '../../assets/images/Cassandra.png'
import img_amanda from '../../assets/images/Amanda.png'
import img_jack from '../../assets/images/Jack.png'
import img_star from '../../assets/images/star.png'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const TeamAndReviewsSection = () => {

    const members = [
        {img: img_kristine, title: "Kristine Palmer", description: "Chef Operation Officer"},
        {img: img_mark, title: "Mark Aubri", description: "Senior Consultant"},
        {img: img_kimberly, title: "Kimberly Hansen", description: "Senior Tech Consultant"},
        {img: img_justin, title: "Justin Willoman", description: "Senior Consultant"}
    ]

    const reviewers =[

    ]

    return (
        <section class="team-and-reviews">
            <div class="container meet-our-team">
                <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
                <Button type="yellow" text=" Browse Team " url="/team"/>
                <div class="team-members">
                    
                    {members.map((member, index) => (
                        <Member key={index} img={member.img} title={member.title} description={member.description}/>
                    ))}

                </div>
            </div>
            <div class="dots">
                <span class="dot"></span>
                <span class="dot second"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="container testimonial">
                <div class="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div class="reviews-row">
                    <div class="review">
                        <span class="stars">
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                        </span>
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        </p>
                        <div class="reviewer">
                            <img src="images/Cassandra.png" alt="Cassandra Warren"/>
                            <h3>Cassasndra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                    <div class="review">
                        <span class="stars">
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                        </span>
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        </p>
                        <div class="reviewer">
                            <img src="images/Amanda.png" alt="Cassandra Warren"/>
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                    <div class="review">
                        <span class="stars">
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <i class="fa-sharp fa-solid fa-star"></i>
                        </span>
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        </p>
                        <div class="reviewer">
                            <img src="images/Jack.png" alt="Cassandra Warren"/>
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
                <Button type="black" text="All Reviews" url="/reviews"/>
            </div>
        </section>
    )
}

export default TeamAndReviewsSection