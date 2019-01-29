import React from 'react'

const ModuleListItem = ({module, selectModule, updateModule, moduleUpdated, deleteModule, moduleDeleted}) =>
    <li onClick={() => selectModule(module)} className="list-group-item nav-link wbdv-module-list-item">
        <div className="col-12 row">
            <div className="col-8">
                <button type="button" className="btn btn-warning">{module.title}</button>
            </div>
            <div className="col-1">
                <ion-icon name="create"
                            onClick={() => {
                                deleteModule(module)
                                moduleDeleted()
                            }
                            }
                ></ion-icon>
            </div>
            <div className="col-1">
                <ion-icon name="close-circle-outline">
                    onClick={() => {
                    updateModule(module)
                    moduleUpdated()
                }
                }
                </ion-icon>
            </div>
        </div>

    </li>

export default ModuleListItem;