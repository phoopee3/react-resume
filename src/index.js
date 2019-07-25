import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/bootstrap.min.css';
import './assets/octicons.min.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let r = {
    "header": {
        "name": "Jason Lawton",
        "title": "Developer"
    },
    "contact": {
        "attributes": {
        },
        "data": [
            {
                "title": "Email",
                "content": "jason@jasonlawton.com"
            },
            {
                "title": "Phone",
                "content": "201-873-0168"
            },
            {
                "title": "Website",
                "content": "https://jasonlawton.com",
                "link": "https://jasonlawton.com"
            },
            {
                "title": "Resume",
                "className": "hidden-print",
                "content": "PDF Download",
                "link": "https://jasonlawton.com/resume/Jason-Lawton-Resume.pdf"
            }
        ]
    },
    "about": {
        "attributes": { },
        "content": "Self-motivated team player who utilizes knowledge, skills, and experience that has been acquired over 15 years as a Web Developer to solve problems through exploring different possibilities and determining the best course of action. Also has diverse knowledge and experience designing and developing websites and content management systems for end users."
    },
    "profiles": {
        "attributes": {},
        "data": [
            {
                "title": "Github",
                "content": "phoopee3",
                "link": "https://github.com/phoopee3"
            },
            {
                "title": "StackOverflow",
                "content": "jason",
                "link": "http://stackoverflow.com/users/128532/jason"
            },
            {
                "title": "WordPress",
                "content": "phoopee3",
                "link": "https://profiles.wordpress.org/phoopee3/"
            },
            {
                "title": "LinkedIn",
                "content": "Jason Lawton",
                "link": "https://www.linkedin.com/in/jason-lawton"
            }
        ]
    },
    "work": {
        "attributes": {},
        "data": [
            {
                "title": "Merck/Boss Group",
                "date-from": "2017-03",
                "date-to": "current",
                "subtitle": "Senior Back End Developer / WordPress Specialist",
                "link": "https://merck.com",
                "link-text": "https://merck.com",
                "description": "WordPress developer specializing in back end programming. Creating custom themes to hand off to front end developers, and custom plugins to solve client issues.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        {
                            "content": "Delivered projects under tight deadlines. Some projects needed to be finished in time for a conference or company event, and being able to deliver in time required planning and motivation to get the job done."
                        },
                        {
                            "content": "Introduced and evangelized best practices such as code reuse via plugins, using SCSS instead of CSS, storing documentation as markdown files in git, and video during meetings for remote attendees."
                        },
                        {
                            "content": "Worked with other team members to create flexible solutions to solve client issues."
                        },
                        {
                            "content": "Developed a WordPress plugin to present PowerPoint files in an intuitive and customizable fashion for department knowledge sharing. A web application separates the powerpoint files into separate slides, and then sends the data to WordPress via custom API endpoints. There is a custom search page that lets the user search the entire presentation, or just the individual slides. When viewing the slide, relevant metadata added by the client appears to help the user understand what the slide is about."
                        },
                        {
                            "content": "Developed a WordPress plugin to foster interaction with the website by adding a gamification element. Users would gain points by completing various tasks, posting, replying, filling out their profile, etc. The plugin was flexible in that it allowed the administrator to specify which WordPress hooks to look for, and then add a point value to that event when it was completed. A leaderboard with profile pictures and user bios showed the top users in each company region."
                        },
                        {
                            "content": "Created documentation and best practices for internal department guidelines with regards to git branching and workflow."
                        },
                        {
                            "content": "Wrote documentation for clients to use as reference once the project was handed off to them. Documentation was written in markdown and stored in git so it could be referenced and reused for similar projects. Markdown also provided an easy way to convert to different formats as required by the client."
                        },
                        {
                            "content": "Coordinated with IT for risk assessments of externally hosted websites."
                        },
                        {
                            "content": "Deployed WordPress as static sites to AWS."
                        }
                    ]
                }
            },
            {
                "title": "Freelance",
                "date-from": "2005-04",
                "date-to": "current",
                "subtitle": "Full Stack Developer",
                "link": "https://jasonlawton.com",
                "link-text": "https://jasonlawton.com",
                "description": "<p>Consult with clients and investigate opportunities to keep skills up to date, explore new technologies, and methods of programming.</p><p>Focus on using WordPress as a content management system to create websites for local businesses. This provides a site that is not only flexible and adaptable to the client's business, but also usable by the client so they do not have to contact me every time they need something updated.</p>",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        {
                            "content": "WordPress Plugins - Wrote WordPress plugins that solve problems when suitable solutions could not be found on the WordPress plugin directory. The plugins are available via GitHub. Recent plugins are: Slack Auto Invite, Auto Login, List plugins, and Admin Bar Contact."
                        },
                        {
                            "content": "MJML (MailJet Markup Language) - Learned and implemented MJML for creating two HTML emails on a tight deadline."
                        },
                        {
                            "content": "TwoRiverTheater.org - Developed a WordPress powered site as part of a team. Advanced Custom Fields was used to provide an easy way for the client to update content on the site, specifically the repeater field and flexible content layout."
                        },
                        {
                            "content": "MNYPIA.com - Migrated from Wix and redesigned site in WordPress. Utilized Gravity Forms with PayPal integration to enable client to accomplish multiple fundraising efforts."
                        },
                        {
                            "content": "RodephSholom.org - Refactored page layouts using Advanced Custom Fields. Updated form layouts using Gravity Forms to provide better functionality and usability."
                        },
                        {
                            "content": "Nurse Manager - Wrote an AngularJS (v1.5) application to help a pharmacy manage their customers and interactions between customers and staff at hospitals, and the deliverability of medication. The backend API was written using the Laravel PHP framework. The AngularJS front end authenticates against the back end, and then calls API endpoints as necessary to allow the user to interact with the system."
                        },
                        {
                            "content": "AriellesGallery.com - Developed a WordPress site coupled with WooCommerce for a jewelry/art retail store to allow them to showcase their products and take orders online."
                        },
                        {
                            "content": "FMDisplayConcepts.com - Developed a WordPress site using the Divi theme to showcase a line of ice cream display cases and their design services for custom builds in the restuarant industry."
                        }
                    ]
                }
            },
            {
                "title": "eScholar",
                "date-from": "2012-09",
                "date-to": "2017-01",
                "subtitle": "Senior Front End Developer",
                "link": "https://www.escholar.com",
                "link-text": "https://www.escholar.com",
                "description": "Helped take eScholar's myTrack product from prototype to full production.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        {
                            "content": "Built prototype mockups in HTML and Javascript."
                        },
                        {
                            "content": "Created foundation for myTrack product using ExtJS framework."
                        },
                        {
                            "content": "Created custom theme for myTrack using SCSS."
                        },
                        {
                            "content": "Created custom components using ExtJS framework."
                        },
                        {
                            "content": "Implemented unit and application tests using Jasmine."
                        },
                        {
                            "content": "Gave presentation on Bootstrap. Wrote a custom app with a coworker to poll the audience and show results in real-time. Used AngularJS, Express, Node, and Firebase to create application."
                        }
                    ]
                }
            },
            {
                "title": "Rodman Publishing",
                "date-from": "2005-04",
                "date-to": "2012-09",
                "subtitle": "Web Developer",
                "link": "https://rodmanmedia.com",
                "link-text": "https://rodmanmedia.com",
                "description": "Built the company's online presence from static HTML web pages to dynamic database-driven websites using PHP, mySQL, javascript, jQuery, and other technologies.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        {
                            "content": "Created custom-built CMS that allowed editors to add content to the websites. All 12 websites utilized a central site for managing content."
                        },
                        {
                            "content": "Along with another developer, rebuilt CMS using OOP/MVC PHP methodologies."
                        },
                        {
                            "content": "Implemented OpenX ad server that served over 650k ad impressions per month."
                        },
                        {
                            "content": "Implemented and heavily modified phpList to send thousands of emails every week to various lists."
                        },
                        {
                            "content": "Created an email newsletter builder, which created HTML and text-based emails. Emails were sent to over 150k subscribers every week."
                        }
                    ]
                }
            }
        ]
    },
    "volunteer": {
        "attributes": {},
        "data": [
            {
                "title": "Northern NJ WordPress Meetup",
                "date-from": "2017-06",
                "date-to": "current",
                "subtitle": "Co-organizer",
                "link": "https://www.meetup.com/WordPress-Montclair-Meetup/",
                "link-text": "https://www.meetup.com/WordPress-Montclair-Meetup/",
                "description": "Cameron Barrett resurrected the WordPress meetup in early 2017, and I quickly joined as a member and then started assisting as a co-organizer along with two other people. Over the past 2 years, we have grown the meetup from 300 members to over 1200 members.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        { "content": "Help desk meetup - we offer help to local WordPress users on a wide variety of WordPress questions." },
                        { "content": "WordPress professionals meetup - a meetup for professionals who use WordPress in their workplace, and where discussions on trends and problem solving take place." },
                        { "content": "Talk by an Expert - a local WordPress/Subject Matter Expert presents on a topic." }
                    ]
                }
            },
            {
                "title": "WordCamp Montclair 2019",
                "date-from": "2019-06-01",
                "date-to": "2019-06-02",
                "subtitle": "Co-organizer",
                "link": "https://2019.montclair.wordcamp.org",
                "link-text": "https://2019.montclair.wordcamp.org",
                "description": "With the size of our WordPress meetup reaching a certain level, the next step was clear to have a WordCamp for our WordPress community. Along with 5-10 other volunteers, we were able to organize a highly successful first WordCamp in the state of New Jersey.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        { "content": "Assisted in styling the 2019 WordCamp Montclair site." },
                        { "content": "Worked with another volunteer to send out mailings for announcing the meetup, call for speakers, and selling tickets." },
                        { "content": "Speaker Wrangler for 20 speakers. Main point of contact, in charge of getting all the speaker information and presentations." },
                        { "content": "Created the schedule for the conference." }
                    ]
                }
            },
            {
                "title": "Northern NJ WordPress Meetup",
                "date-from": "2012-01",
                "date-to": "2012-06",
                "subtitle": "Organizer",
                "link": "",
                "link-text": "",
                "description": "For 6 months, I took over as the organizer of the Northern NJ WordPress Meetup. It was a defunct organization on meetup.com which wasn't having any meetings. I took over and was able to have monthly meetings over a six month timeframe. I had to step down as the organizer due to my job changing and having a longer commute.",
                "highlights": {
                    "title": "Highlights",
                    "items": [
                        { "content": "Presented on how to set up WordPress using Bitnami." },
                        { "content": "Local WordPress developers came and presentationed on what they had built and the methods they used." },
                        { "content": "Held Q&A/help sessions in the second half of each meeting where people would ask questions about themes and plugins." }
                    ]
                }
            }
        ]
    },
};

class Resume extends React.Component {
    render() {
        let components = {
            header: Header,
            contact: Contact,
            about: About,
            profiles: Profiles,
            work: Work,
            volunteer: Volunteer,
        };
        let content = [];
        var TempComponent;
        var tempData;

        for (var key in r) {
            if (r.hasOwnProperty(key)) {
                console.log(key);
                TempComponent = components[key];
                tempData = r[key];

                content.push(<TempComponent data={tempData} />);
            }
        }

        // let data = { name: "Jason", title:"Web Developer"};
        // let data2 = { name: "Kristy", title: "Copy Editor" };
        // let comp = "header";

        // // defined content
        // content.push(<Header data={data} />);

        // // dynamically defined content
        // let MyComponent = components[comp];
        // content.push(<MyComponent data={data2} />);

        return content;
    }
}

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-sm-push-3">
                            <h1>
                                {this.props.data.name}
                            </h1>
                            <h2>
                                {this.props.data.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

class Contact extends React.Component {
    render() {
        let contactMethods = this.props.data.data.map((item) => {
            let elementClass = "col-sm-6 col-xs-3 ";
            if ( typeof(item.className) != 'undefined' ) {
                elementClass += item.className;
            }
            return (
                <div className={elementClass}>
                    <strong>{item.title}</strong>
                    <div>
                        { item.link &&
                            <a href={item.link}>{item.content}</a>
                        }
                        { !item.link && <span>{item.content}</span> }
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <section id="contact" className="row">
                    <aside className="col-sm-3">
                        <h3>Contact</h3>
                    </aside>
                    <div className="col-sm-9">
                        <div className="row">
                            {contactMethods}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <section id="about" className="row">
                    <aside className="col-sm-3">
                        <h3>About</h3>
                    </aside>
                    <div className="col-sm-9">
                        <p>{this.props.data.content}</p>
                    </div>
                </section>
            </div>
        )
    }
}

class Profiles extends React.Component {
    render() {

        let profiles = this.props.data.data.map((item) => {
            return (
                <div className="col-sm-6 col-xs-6">
                    <strong className="network">
                        {item.title}
                    </strong>
                    <div className="username">
                        <div className="url">
                            <a className="show-print-link" href={item.link}>{item.content}</a>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <section id="profiles" className="row">
                <aside className="col-sm-3">
                    <h3>Profiles</h3>
                </aside>
                <div className="col-sm-9">
                    <div className="row">
                        {profiles}
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

class Work extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map( (work) => {
            return(
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{work.title}</span>
                        <span className="date">
                            {work['date-from']}
                            - 
                            { work['date-to'] }
                            </span>
                    </h4>
                    <div className="website pull-right">
                        { work.link && work['link-text'] &&
                            <a href="{work.link}">{work['link-text']}</a>
                        }
                    </div>
                    <div className="position">
                        {work.subtitle}
                    </div>
                    <div className="summary">
                        <p>{work.description}</p>
                    </div>
                    { work.highlights && 
                        <H4List data={work.highlights} />
                    }
                </div>
            );
        } );
        // console.log(this.props);
        return (
            <div className="container">
                <section id="work" className="row">
                    <aside className="col-sm-3">
                        <h3>Work</h3>
                    </aside>
                    <div className="col-sm-9">
                        <div className="row">
                            {content}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class Volunteer extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map( (volunteer) => {
            return(
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{volunteer.title}</span>
                        <span className="date">
                            {volunteer['date-from']}
                            - 
                            { volunteer['date-to'] }
                            </span>
                    </h4>
                    <div className="website pull-right">
                        { volunteer.link && volunteer['link-text'] &&
                            <a href="{volunteer.link}">{volunteer['link-text']}</a>
                        }
                    </div>
                    <div className="position">
                        {volunteer.subtitle}
                    </div>
                    <div className="summary">
                        <p>{volunteer.description}</p>
                    </div>
                    { volunteer.highlights && 
                        <H4List data={volunteer.highlights} />
                    }
                </div>
            );
        } );
        // console.log(this.props);
        return (
            <div className="container">
                <section id="volunteer" className="row">
                    <aside className="col-sm-3">
                        <h3>Volunteer</h3>
                    </aside>
                    <div className="col-sm-9">
                        <div className="row">
                            {content}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class H4List extends React.Component {
    render() {
        // console.log(this.props);
        let items = this.props.data.items.map((item) => {
            return (
                <li className="bullet">{item.content}</li>
            );
        });
        return (
            <div>
                <h4>{this.props.data.title}</h4>
                <ul className={this.props.data.title}>
                    {items}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <Resume />,
    document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
