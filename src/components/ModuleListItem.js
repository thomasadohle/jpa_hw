import React from 'react'

const ModuleListItem = ({module, selectModule, updateModule, moduleUpdated, deleteModule, setActive}) =>
    <li className="list-group-item nav-link wbdv-module-list-item">
        <div className="col-lg-12 row">
            <div className="col-6">
                <button type="button" className="btn btn-warning" id={module.title}
                        onClick={() => {
                            document.getElementById(module.title).classList.add("active")
                            selectModule(module)
                        }
                        }>{module.title}</button>
            </div>


            <div className="col-1" >
            </div>
                <div className={"col-1"} onClick={() => {
                    deleteModule(module)
                }
                }>
                    <ion-icon name="close-circle-outline" size="large"
                    >
                    </ion-icon>
                </div>


            <div className="col-1">
                <ion-icon name="create" size="large"
                          onClick={() => {
                              console.log("clicked update")
                          }
                          }
                />
            </div>
        </div>

    </li>

export default ModuleListItem;