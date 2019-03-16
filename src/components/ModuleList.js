import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService"

const service = CourseService;

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService
        this.state = {
            courseId: this.props.courseId,
            module: {title: ''},
            modules: this.props.modules,
            activeModule: this.props.activeModule
        };

        // this.titleChanged = this.titleChanged.bind(this);
    }

    componentDidMount() {
        this.courseService.findCourseModules(this.state.courseId).then(modules => {
            this.setState({
                modules: modules
            })
            console.log("state in ModuleList: modules " + JSON.stringify(modules))
        })
    }

    createModule = () => {
        let newModuleTitle
        if (this.state.module.title === "") {
            newModuleTitle = "New Module"
        } else {
            newModuleTitle = this.state.module.title
        }
        var newModule = {
            moduleTitle: newModuleTitle,
        }
        this.courseService.addModule(newModule, this.state.courseId).then(modules => {
            this.courseService.findCourseModules(this.state.courseId).then(modules => {
                this.setState({
                    modules: modules,
                    active: modules[0]
                })
            })
        })
        //this.props.addModule(newModule)
    };

    deleteModule = (module) => {
        this.courseService.deleteModule(module)
        console.log("deleteModule in ModuleList called")
        this.courseService.findCourseModules(this.state.courseId).then(modules => {
            this.setState({
                modules: modules
            })
        })
    }

    titleChanged = (event) => {

        this.setState(
            {
                module: {title: event.target.value}
            });
    };

    updateModule = (module) => {
        const newName = prompt("What would you like to rename the module?");
        module.moduleTitle = newName
       this.courseService.updateModule(module).then(prop => {
           console.log("updated module: " + JSON.stringify(prop))
           this.courseService.findCourseModules(this.state.courseId)
               .then(modules => {
                   console.log("After update, modules are: " + JSON.stringify(modules))
                   this.setState({
                       modules: modules
                   })
               })
       })


           this.courseService.findCourseModules(this.state.courseId)
    };

    setActive = (module) => {
        if (this.state.activeModule.title === module.title) {
            console.log("Module " + module.title + "is active")
            return "activeModule"
        } else {
            return "inactiveModule"
        }
    }

    triggerModuleChange = (module) => {
        console.log("triggerModuleChange was called")
        console.log("Selected  module is" + module.title)
        this.setState({
            active: module
        })
    }


    render() {
        return (
            <div>
                <h3 id="moduleListTitle">Module List</h3>
                <ul className="nav flex-column nav-pills">
                    <li className="list-group-item" id="addModule">
                        <input
                            onChange={this.titleChanged}
                            className="form-control"
                            id="newModuleName"/>
                        <button
                            onClick={this.createModule}
                            className="btn btn-primary btn-block">Add Module
                        </button>
                    </li>

                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        key={module.id}
                                        module={module}
                                        className={"nav-link wbdv-module-list-item thomas-class"}
                                        idFromParent={this.setActive(module)}
                                        deleteModule={this.deleteModule}
                                        updateModule={this.updateModule}
                                        triggerModuleChange={this.triggerModuleChange}/>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ModuleList;