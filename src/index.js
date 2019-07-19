import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
                "hide-on-print": true,
                "content": "PDF Download",
                "link": "https://jasonlawton.com/resume/Jason-Lawton-Resume.pdf"
            }
        ]
    },
    "about": {
        "attributes": { },
        "content": "Self-motivated team player who utilizes knowledge, skills, and experience that has been acquired over 15 years as a Web Developer to solve problems through exploring different possibilities and determining the best course of action. Also has diverse knowledge and experience designing and developing websites and content management systems for end users."
    }
};

class Resume extends React.Component {
    render() {
        let components = {
            header: Header,
            contact: Contact,
            about: About
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
        // <div class="col-sm-6 col-xs-3">
        //     <strong>Email</strong>
        //     <div class="email"><a class="__cf_email__" href="/cdn-cgi/l/email-protection" data-cfemail="472d26342829072d263428292b26303328296924282a">[email&#160;protected]</a><script data-cfhash='f9e31' type="text/javascript">/* <![CDATA[ */!function(t,e,r,n,c,a,p){try {t = document.currentScript || function () { for (t = document.getElementsByTagName('script'), e = t.length; e--;)if (t[e].getAttribute('data-cfhash')) return t[e] }(); if(t&&(c=t.previousSibling)){p = t.parentNode; if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</script></div>
        // </div>
        // <div class="col-sm-6 col-xs-3">
        //     <strong>Phone</strong>
        //     <div class="phone">201-873-0168</div>
        // </div>
        // <div class="col-sm-6 col-xs-3">
        //     <strong>Website</strong>
        //     <div class="website">
        //         <a href="https://jasonlawton.com">https://jasonlawton.com</a>
        //     </div>
        // </div>
        // <div class="col-sm-6 col-xs-3 hidden-print">
        //     <strong>Resume</strong>
        //     <div class="website">
        //         <a href="https://jasonlawton.com/resume/Jason-Lawton-Resume.pdf">PDF download</a>
        //     </div>
        // </div>

        let contactMethods = this.props.data.data.map((item) => {
            return (
                <div class="col-sm-6 col-xs-3">
                    <strong>{item.title}</strong>
                    <div>{item.content}</div>
                </div>
            );
        });
        return (
            <section id="contact" class="row">
                <aside class="col-sm-3">
                    <h3>Contact</h3>
                </aside>
                <div class="col-sm-9">
                    <div class="row">
                        {contactMethods}
                    </div>
                </div>
            </section>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <section id="about" class="row">
                <aside class="col-sm-3">
                    <h3>About</h3>
                </aside>
                <div class="col-sm-9">
                    <p>{this.props.data.content}</p>
                </div>
            </section>
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
