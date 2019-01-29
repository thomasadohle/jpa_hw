import React from 'react'

const TopicPills = ({topics}) =>
    <ul className="nav nav-tabs">
        {
            topics.map(topic =>
                <li key={topic.id} className="nav-item">

                <a className="nav-link active"
                   href="#">{topic.title}
                </a>
                </li> )
        })
        <li className="nav-item">
            <ion-icon name="add-circle-outline" size="large"></ion-icon>
        </li>

    </ul>
export default TopicPills



