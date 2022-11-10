import React from 'react'
import './SpeakerSection.css'
import Card from '../Card/Card'
import user from '../../assets/images/webinarImg.png'

function SpeakerSection() {
    return (
        <div className='speakers__mentors'>
            <div className="blur1"></div>
            <div className="blur2"></div>
            <section className='speaker__section'>
                <h1 className='speaker__heading'>Speakers</h1>
                <div className='speakers__container'>
                        <div className="speaker__el">
                            <Card imgUrl={user} name='User1' des="abcde"/>
                        </div>
                        <div className="speaker__el">
                            <Card imgUrl={user} name="User2" des="abcde"/>
                        </div>
                        <div className="speaker__el">
                            <Card imgUrl={user} name="User4" des="abcde"/>
                        </div>
                        <div className="speaker__el user5">
                            <Card imgUrl={user} name="User5" des="abcde"/>
                        </div>
                        <div className="speaker__el user6">
                            <Card imgUrl={user} name="User6" des="abcde"/>
                        </div>
                </div>
            </section>
            <section className='mentors__section'>
                <h1 className='speaker__heading'>Mentors</h1>
                <div className="mentors__container">
                    <div className="mentor__el mentor_1">
                        <Card imgUrl={user} name="user1" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user2" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user3" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user4" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user5" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user6" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user7" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user8" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user9" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user10" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user11" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user12" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user13" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user14" rounded des="abcde"></Card>
                    </div>
                    <div className="mentor__el">
                        <Card imgUrl={user} name="user15" rounded des="abcde"></Card>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default SpeakerSection