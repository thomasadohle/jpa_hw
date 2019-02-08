import React from 'react'

const TopicPills = ({topics, createTopic, deleteTopic, updateTopic, selectTopic}) =>
    <ul className="nav nav-tabs">
        {
            topics.map(topic =>
                <li key={topic.id} className="nav-item" id="topicListItem">

                    <div className="col-12" id="divInsideTopicListItemRow">
                        <button type="button" className="btn btn-info" id={topic.title}
                                onClick={() => {
                                   selectTopic(topic)
                                }
                                }>{topic.title}</button>
                        <ion-icon name="close-circle-outline" size="small" id="deleteButtonn"
                                  onClick={() => {
                                      deleteTopic(topic)
                                  }
                                  }
                        >
                        </ion-icon>
                        <ion-icon name="create" size="small" id="updateButtonn"
                                  onClick={() => {
                                      updateTopic(topic)
                                  }
                                  }
                        />
                    </div>
                </li> )
        }
        <li className="nav-item" id="addNewTopic">
            <div className = "col-12 form-inline " id="addNewTopicDiv">
                <input
                    id="newTopicName"
                    className="form-control form-group"/>
                <ion-icon name="add-circle-outline" size="small" className="form-group"
                          onClick={() => {
                              const newTitle = document.getElementById("newTopicName").value
                              createTopic(newTitle)
                          }}/>
            </div>
        </li>

    </ul>
export default TopicPills


