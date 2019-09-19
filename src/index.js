import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './assets/bootstrap.min.css';
import './assets/octicons.min.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Resume extends React.Component {
    state = {
        resume: {}
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/phoopee3/resume/master/resume.json')
            .then(res => {
                console.log(res);
                const resume = res.data;
                this.setState({ resume });
            })
    }

    render() {
        // set up the components
        let components = {
            header      : Header,
            contact     : Contact,
            about       : About,
            profiles    : Profiles,
            work        : Work,
            volunteer   : Volunteer,
            education   : Education,
            publications: Publications,
            skills      : Skills,
            interests   : Interests
        };
        let content = [];

        var TempComponent;
        var tempData;

        for (var key in this.state.resume) {
            if (this.state.resume.hasOwnProperty(key) && components[key]) {
                console.log(key);
                TempComponent = components[key];
                tempData = this.state.resume[key];

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
            let elementClass = "col-sm-6 col-xs-6 ";
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
        let data = {
            section: "Contact",
            content: contactMethods
        };
        return (
            <Section data={data} />
        )
    }
}

class About extends React.Component {
    render() {
        // let data = {
        //     section: this.constructor.name,
        //     content: "<p>" + this.props.data.content + "</p>"
        // };
        // return (
        //     <Section data={data} />
        // )
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
        let content = this.props.data.data.map((item) => {
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
        let data = {
            section: "Profiles",
            content: content
        };
        return (
            <Section data={data} />
        )
    }
}

class Work extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map( (work) => {
            var dateRange = {
                "dateFrom": work['date-from'],
                "dateTo": work['date-to']
            };
            return(
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{work.title}</span>
                        <DateRange data={dateRange} />
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
                        <div dangerouslySetInnerHTML={{ __html: work.description }} />
                    </div>
                    { work.highlights && 
                        <H4List data={work.highlights} />
                    }
                </div>
            );
        } );
        let data = {
            section: "Work",
            content: content
        };
        return (
            <Section data={data} />
        )
    }
}

class Volunteer extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map( (volunteer) => {
            var dateRange = {
                "dateFrom": volunteer['date-from'],
                "dateTo": volunteer['date-to']
            };
            return(
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{volunteer.title}</span>
                        <DateRange data={dateRange} />
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

class Education extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map((education) => {
            var dateRange = {
                "dateFrom": education['date-from'],
                "dateTo"  : education['date-to']
            };
            return (
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{education.title}</span>
                        <DateRange data={dateRange} />
                    </h4>
                    <div className="website pull-right">
                        {education.link && education['link-text'] &&
                            <a href="{education.link}">{education['link-text']}</a>
                        }
                    </div>
                    <div className="area">
                        {education.major}
                    </div>
                    <div className="studyType">
                        <p>{education.degree}</p>
                    </div>
                </div>
            );
        });
        let data = {
            section: "Education",
            content: content
        };
        return (
            <Section data={data} />
        )
    }
}

class Publications extends React.Component {
    // this.props.data.data is an array
    render() {
        let content = this.props.data.data.map((publications) => {
            var dateRange = {
                "date": publications['date']
            };
            return (
                <div className="col-sm-12">
                    <h4 className="strike-through">
                        <span>{publications.title}</span>
                        <DateRange data={dateRange} />
                    </h4>
                    <div className="website pull-right">
                        {publications.link && publications['link-text'] &&
                            <a href={publications.link}><span className="sr-only">{publications.link}</span></a>
                        }
                    </div>
                    <div className="publisher">
                        <em>Published by</em>&nbsp;
                        <strong>{publications['published-by']}</strong>
                    </div>
                    <div className="summary">
                        <p>{publications.description}</p>
                    </div>
                </div>
            );
        });
        let data = {
            section: "Publications",
            content: content
        };
        return (
            <Section data={data} />
        )
    }
}

class Skills extends React.Component {
    render() {
        // console.log(this);
        let columnCount = this.props.data.data.length;
        columnCount = Math.floor( 12 / columnCount );
        let colClass = "col-sm-" + columnCount + " col-xs-12";
        let content = this.props.data.data.map((skills) => {
            return (
                <div className={colClass}>
                    { skills.title && skills.items &&
                        <H4List data={skills} />
                    }
                </div>
            );
        });
        let data = {
            section: "Skills",
            content: content
        };
        return (
            <Section data={data} />
        )
    }
}

class Interests extends Skills {
    
}
// subcomponents

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

class DateRange extends React.Component {
    render() {
        if ( this.props.data.dateFrom && this.props.data.dateTo ) {
            return (
                <span className="date">
                    {this.props.data.dateFrom}
                    &nbsp;-&nbsp;
                    {this.props.data.dateTo}
                </span>
            )
        } else if ( this.props.data.date ) {
            return (
                <span className="date">
                    {this.props.data.date}
                </span>
            )
        }
    }
}

class Section extends React.Component {
    render() {
        return (
            <div className="container">
                <section id={this.props.data.section.toLowerCase()} className="row">
                    <aside className="col-sm-3">
                        <h3>{this.props.data.section}</h3>
                    </aside>
                    <div className="col-sm-9">
                        <div className="row">
                            {this.props.data.content}
                        </div>
                    </div>
                </section>
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
