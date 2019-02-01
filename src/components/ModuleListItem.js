import React from 'react'

const ModuleListItem = ({triggerModuleChange, module, selectModule, updateModule, moduleUpdated, deleteModule, setActive,idFromParent}) =>
    <li className="list-group-item nav-link wbdv-module-list-item deb-class" id={idFromParent}>
        <div className="col-lg-12 row"

               >
            <div className="col-6"
                >
                <button type="button" className="btn btn-warning active"
                        id={module.title}
                        onClick={() => {
                            {selectModule(module)}
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
                              updateModule(module)
                          }
                          }
                />
            </div>
        </div>

    </li>

export default ModuleListItem;