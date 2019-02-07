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

    const linkWidget1 = widgetTemplate;
    linkWidget1.id = 123;
    linkWidget1.title = "Reddit Link";
    linkWidget1.type = "LINK";
    linkWidget1.link.url = "http://www.reddit.com";
    linkWidget1.link.linkText = "The front page of the internet";

    const linkWidget2 = widgetTemplate;
    linkWidget1.id = 234;
    linkWidget1.title = "Slack link";
    linkWidget1.type = "LINK";
    linkWidget1.link.url = "https://slack.com/";
    linkWidget1.link.linkText = "The best team communication";

    const imageWidget1 = widgetTemplate;
    imageWidget1.id = 345;
    imageWidget1.title = "Calming image";
    imageWidget1.type = "IMAGE"
    imageWidget1.image.url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYSY5hgIgWdU5zD1T5MYFaJccD0SbkAYEtmmmxuR5NprQSoC1rw";

    const imageWidget2 = widgetTemplate;
    imageWidget2.id = 456;
    imageWidget2.title="Cute dog";
    imageWidget2.type = "IMAGE";
    imageWidget2.image.url = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000440/Bernese-Mountain-Dog-On-White-01.jpg"


    const headingWidget1 = widgetTemplate;
    headingWidget1.id = 567;
    headingWidget1.title = "Important Information";
    headingWidget1.type = "HEADING";
    headingWidget1.heading.headingText = "Redux Rocks!";
    headingWidget1.heading.headingSize = 2;

    const headingWidget2 = widgetTemplate;
    headingWidget2.id = 678;
    headingWidget2.title = "Need to know:";
    headingWidget1.type = "HEADING";
    headingWidget1.heading.headingText = "Managing state is great!";
    headingWidget1.heading.headingSize = 1;


    const paragraphWidget1 = widgetTemplate;
    paragraphWidget1.id = 789;
    paragraphWidget1.title = "Lorum Ipsum";
    paragraphWidget1.type = "PARAGRAPH";
    paragraphWidget1.paragraph.paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
        "deserunt mollit anim id est laborum.";


    const listWidget1 = widgetTemplate;
    listWidget1.id = 891;
    listWidget1.title = "Favorite foods";
    listWidget1.type = "LIST";
    listWidget1.list.listItems = ["pizza", "buffalo chicken", "pad thai"];
    listWidget1.list.listType = "UNORDERED";

    const listWidget2 = widgetTemplate;
    listWidget1.id = 912;
    listWidget1.title = "Best New England States";
    listWidget1.type = "LIST";
    listWidget1.list.listItems = ["Massachusetts", "Maine", "Vermont"];
    listWidget1.list.listType = "ORDERED";

    const setUp = () =>{
    courses[0].modules[0].lessons[0].topics[0].widgets.push(linkWidget1);
    courses[0].modules[0].lessons[0].topics[0].widgets.push(paragraphWidget1);
    courses[0].modules[0].lessons[0].topics[0].widgets.push(imageWidget1);
    courses[0].modules[0].lessons[0].topics[1].widgets.push(linkWidget2);
    courses[0].modules[0].lessons[0].topics[1].widgets.push(paragraphWidget1);
    courses[0].modules[0].lessons[0].topics[1].widgets.push(imageWidget2);
    courses[0].modules[0].lessons[1].topics[0].widgets.push(listWidget2);
    courses[0].modules[0].lessons[1].topics[0].widgets.push(paragraphWidget1);
    courses[0].modules[0].lessons[1].topics[0].widgets.push(headingWidget2);
    courses[0].modules[0].lessons[1].topics[1].widgets.push(listWidget1);
    courses[0].modules[0].lessons[1].topics[1].widgets.push(paragraphWidget1);
    courses[0].modules[0].lessons[1].topics[1].widgets.push(headingWidget1);
    console.log(courses);
    return courses;
    }

    const coursesWithWidgets = setUp
    export default setUp



