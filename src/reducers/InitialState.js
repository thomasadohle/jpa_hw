import courses from '../services/courses.json'

const widgetTemplate =
    {
        id: "",
        title: "",
        type: "",
        link: {
            url: "",
            linkText: ""
            },
        image: {
            url: "",

        },
        heading: {
            headingText: "",
            headingSize: ""
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "",
            listItems: []
        }
    }

const linkWidget1 =
    {
        id: 123,
        title: "Reddit Link",
        type: "LINK",
        link: {
            url: "http://www.reddit.com",
            linkText: "The front page of the internet"
        },
        image: {
            url: "",

        },
        heading: {
            headingText: "",
            headingSize: ""
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "",
            listItems: []
        }
    }

    // let linkWidget1 = widgetTemplate;
    // linkWidget1.id = 123;
    // linkWidget1.title = "Reddit Link";
    // linkWidget1.type = "LINK";
    // linkWidget1.link.url = "http://www.reddit.com";
    // linkWidget1.link.linkText = "The front page of the internet";

    // let linkWidget2 = widgetTemplate;
    // linkWidget2.id = 234;
    // linkWidget2.title = "Slack link";
    // linkWidget2.type = "LINK";
    // linkWidget2.link.url = "https://slack.com/";
    // linkWidget2.link.linkText = "The best team communication";


const imageWidget1 =
    {
        id: 345,
        title: "Calming Image",
        type: "IMAGE",
        link: {
            url: "",
            linkText: ""
        },
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYSY5hgIgWdU5zD1T5MYFaJccD0SbkAYEtmmmxuR5NprQSoC1rw",

        },
        heading: {
            headingText: "",
            headingSize: ""
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "",
            listItems: []
        }
    }
    // let imageWidget1 = widgetTemplate;
    // imageWidget1.id = 345;
    // imageWidget1.title = "Calming image";
    // imageWidget1.type = "IMAGE"
    // imageWidget1.image.url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYSY5hgIgWdU5zD1T5MYFaJccD0SbkAYEtmmmxuR5NprQSoC1rw";

    // let imageWidget2 = widgetTemplate;
    // imageWidget2.id = 456;
    // imageWidget2.title="Cute dog";
    // imageWidget2.type = "IMAGE";
    // imageWidget2.image.url = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000440/Bernese-Mountain-Dog-On-White-01.jpg"

const headingWidget1 =
    {
        id: 567,
        title: "Important Information",
        type: "HEADING",
        link: {
            url: "",
            linkText: ""
        },
        image: {
            url: "",

        },
        heading: {
            headingText: "Redux Rocks!",
            headingSize: 2
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "",
            listItems: []
        }
    }
    // const headingWidget1 = widgetTemplate;
    // headingWidget1.id = 567;
    // headingWidget1.title = "";
    // headingWidget1.type = "HEADING";
    // headingWidget1.heading.headingText = "Redux Rocks!";
    // headingWidget1.heading.headingSize = 2;

    // const headingWidget2 = widgetTemplate;
    // headingWidget2.id = 678;
    // headingWidget2.title = "Need to know:";
    // headingWidget2.type = "HEADING";
    // headingWidget2.headingText = "Managing state is great!";
    // headingWidget2.headingSize = 1;


const paragraphWidget1 =
    {
        id: 789,
        title: "Lorum Ipsum",
        type: "PARAGRAPH",
        link: {
            url: "",
            linkText: ""
        },
        image: {
            url: "",

        },
        heading: {
            headingText: "",
            headingSize: 0
        },
        paragraph: {
            paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \" +\n" +
                "        \"ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \" +\n" +
                "        \"ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \" +\n" +
                "        \"dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \" +\n" +
                "        \"deserunt mollit anim id est laborum."
        },
        list: {
            listType: "",
            listItems: []
        }
    }

    // const paragraphWidget1 = widgetTemplate;
    // paragraphWidget1.id = 789;
    // paragraphWidget1.title = "Lorum Ipsum";
    // paragraphWidget1.type = "PARAGRAPH";
    // paragraphWidget1.paragraph.paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
    //     "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
    //     "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
    //     "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
    //     "deserunt mollit anim id est laborum.";

const listWidget1 =
    {
        id: 891,
        title: "Favorite Foods",
        type: "LIST",
        link: {
            url: "",
            linkText: ""
        },
        image: {
            url: "",

        },
        heading: {
            headingText: "",
            headingSize: 0
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "UNORDERED",
            listItems: ["pizza", "buffalo chicken", "pad thai"]
        }
    }

const listWidget2 =
    {
        id: 891,
        title: "Best New England States",
        type: "LIST",
        link: {
            url: "",
            linkText: ""
        },
        image: {
            url: "",

        },
        heading: {
            headingText: "",
            headingSize: 0
        },
        paragraph: {
            paragraphText: ""
        },
        list: {
            listType: "ORDERED",
            listItems: ["Massachusetts", "Maine", "Vermont"]
        }
    }

    // const listWidget1 = widgetTemplate;
    // listWidget1.id = 891;
    // listWidget1.title = "Favorite foods";
    // listWidget1.type = "LIST";
    // listWidget1.list.listItems = ["pizza", "buffalo chicken", "pad thai"];
    // listWidget1.list.listType = "UNORDERED";
    //
    // const listWidget2 = widgetTemplate;
    // listWidget2.id = 912;
    // listWidget2.title = "Best New England States";
    // listWidget2.type = "LIST";
    // listWidget2.list.listItems = ["Massachusetts", "Maine", "Vermont"];
    // listWidget2.list.listType = "ORDERED";

    const setUp = () =>{
       if (! courses[0].modules[0].lessons[0].topics[0].widgets[0]){
        courses[0].modules[0].lessons[0].topics[0].widgets.push(linkWidget1);
       courses[0].modules[0].lessons[0].topics[0].widgets.push(paragraphWidget1);
        courses[0].modules[0].lessons[0].topics[0].widgets.push(imageWidget1);
        courses[0].modules[0].lessons[0].topics[0].widgets.push(listWidget2);
        courses[0].modules[0].lessons[0].topics[1].widgets.push(paragraphWidget1);
        // courses[0].modules[0].lessons[0].topics[1].widgets.push(imageWidget2);
        courses[0].modules[0].lessons[0].topics[0].widgets.push(listWidget1);
        courses[0].modules[0].lessons[1].topics[0].widgets.push(paragraphWidget1);
        // courses[0].modules[0].lessons[1].topics[0].widgets.push(headingWidget2);
          courses[0].modules[0].lessons[1].topics[1].widgets.push(listWidget1);
         courses[0].modules[0].lessons[1].topics[1].widgets.push(paragraphWidget1);
         courses[0].modules[0].lessons[0].topics[0].widgets.push(headingWidget1);
        console.log(courses);
       }
        return courses;
    }
    export default setUp



