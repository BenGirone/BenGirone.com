(this.webpackJsonpbengirone=this.webpackJsonpbengirone||[]).push([[0],{18:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},30:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(20),i=s.n(r),n=(s(26),s(8)),l=s(9),o=s(11),d=s(10),h=(s(27),s(28),s(0)),j=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(n.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{className:"CV-Header",children:"CV"}),Object(h.jsxs)("main",{className:"CV-Main",children:[Object(h.jsx)("div",{className:"Download",children:Object(h.jsx)("a",{href:"BenGironeResume.pdf",children:"Download as PDF"})}),Object(h.jsx)("iframe",{src:"./Resume.html"})]})]})}}]),s}(c.a.Component),m=(s(30),s(4)),b=s(2),u=s.p+"static/media/folder.5a797390.svg",p=s.p+"static/media/8890.c83028a3.webp";var g=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"Article-Media",src:p,alt:"Virtual GC"}),Object(h.jsx)("p",{className:"Article-Text",children:'The Virtual G.C. is a simulator that simulates several models of Agilent Gas Chromatographs. It was devloped for internal use. It simulates the back-end XML web service that several front-end "Data Systems" use to control the instrument. The Virtual G.C. is written in Visual Studio C# and uses Windows Forms for GUI. The architecture is Model View Controller.'}),Object(h.jsx)("p",{className:"Article-Text",children:"The GUI is presented at startup and allows users to customize the Virtual Gas Chromatograph hardware. After the Virtual G.C. is instantiated through the UI, the state of the virtual instrument begins being simulated. Actuals and setpoints can be monitored and set through seperate front-end software. Fake signal can be sent to the front-end as well."})]})},x=s.p+"static/media/browser.d2e6c975.JPG";var O=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Article-Media",children:Object(h.jsx)("img",{src:x})}),Object(h.jsx)("p",{className:"Article-Text",children:"This project was a solo project I was assigned. The goal of the project was to simulate the API that feeds Agilent's Browser UI normally controls a physical instrument. Internal Agilent users can log in to an Angular admin page hosted in AWS and start a simulation. The simulation presents the user with a standard front-end that connects to the simulated back-end. The backend simulation is a Node JS server."}),Object(h.jsx)("p",{children:"The cloud tech used in the project is S3, EC2, Elastik Beanstalk and RDS."})]})};var f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Article-Media",children:Object(h.jsx)("img",{src:x})}),Object(h.jsx)("p",{className:"Article-Text",children:"Agilent's Browser UI is a large team project with ~100,000 lines of code. It is developed with an EXT.js front-end. The back-end is a Node.js API. Some functionality, such as signals, is also provided by a socket.io server."}),Object(h.jsx)("p",{className:"Article-Text",children:"Every modern Agilent Gas Chromatograph serves its own Browser UI and API from the embedded firmware. The UI is used to control the instuments firmware/hardware."}),Object(h.jsx)("p",{className:"Article-Text",children:"My responsibilities were defect resolution, performance optimization and the development of new feautures."})]})};var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"Article-Text",children:"Top secret! No image here."}),Object(h.jsx)("p",{className:"Article-Text",children:"I initiated this project myself. I saw that the existing methods being used were insufficient and asked for the time to research and develop a better solution. This project was a year long effort to create a reliable system to match the peaks in a reference and sample signal. In the sample signal, the peaks from the reference signal could have shifted places several minutes. There could also be severe warping, data loss and impurity peaks."}),Object(h.jsx)("p",{className:"Article-Text",children:'I cannot legally mention any specifics of the algorithm or mention how it is used by Agilent. I can say that it works very well and manages to have a quadratic time complexity. This project involved a lot of machine learning, data science, statistics and "clever" math. I initially developed the algorithm in python. When it became sufficiently accurate, I re-implemented it in embedded C++.'})]})},w=s.p+"static/media/easygrade.70fe7e38.png";var y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Article-Media",children:Object(h.jsx)("img",{src:w})}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"https://easygrade.app",target:"_blank",children:"Open The Site"})}),Object(h.jsx)("p",{className:"Article-Text",children:'Easy grade is a site I developed for myself and my fellow students. It is a calculator that can tell students what grades they will need on tests, homework and essays within a Course. Students can begin by entering a desired grade (90% or "A" by default). Students can then copy the assignments from their syllabus. As they enter grades they have received on items so far, the calculator displays the minimum grade needed on remaining items.'}),Object(h.jsx)("p",{className:"Article-Text",children:'The application is a front-end only React site hosted in Google Cloud. I made this as an excuse to learn React. Also, I was tired of being the person in the classroom that was routinely asked by my classmates, "What grade do I need on the final to pass this course again?"'}),Object(h.jsx)("p",{children:'I could now say, "Go to EasyGrade.app. It\'s a free site that can tell you that in under a minute!"'})]})};s(18);var N=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Article-Video",children:Object(h.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/C9HgkgkNgkI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(h.jsx)("p",{className:"Article-Text",children:"This project was developed as my senior thesis in college. I came up with the idea while watching some youtube videos about autonomous cars and intersections. The video claimed that if all cars were autonomous, then at a red light they could continue simultaneously upon a green light. I thought that was incredible, but I felt it could be taken further. If the cars were autonomous, why should they stop at all at red lights? A decent scheduling algorithm should allow the cars to avoid collision."}),Object(h.jsx)("p",{className:"Article-Text",children:'I chose to develop the project using the "Processing" library in Java for the visual representation. I was familiar with the javascript counterpart "p5.js", but wanted the multithreading support of Java. I had to explore several fields of study to complete the process in the short 2 month time frame. Linear Algebra, Scheduling Algorithms and Discrete-Event Simulation. Due to the short time-frame, I was unable to finish animated turning vehicles. However, the scheduling algorithms can handle them as well as variably sized cars/trucks. The entire application is only a 1000 lines of well structured code.'}),Object(h.jsx)("p",{className:"Article-Text",children:'The program operates at a tick rate determined by the "Processing" animation framework. On each tick the scheduling algorithm iterates over each car and tries to make the necessary space-time reservations for the car to travel through the intersection at the a speed between 1 m.p.h. and the maximum speed limit. As you increase the frequency of cars in each lane, the cars can get slow, but never crash nor stop. At maximum frequency the cars would form a stable pattern and speed actually increases.'})]})},A=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(n.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{className:"Projects-Header",children:"Projects"}),Object(h.jsx)("main",{className:"Projects-Main",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/Projects/AVI",children:Object(h.jsx)(N,{})}),Object(h.jsx)(b.a,{path:"/Projects/EZG",children:Object(h.jsx)(y,{})}),Object(h.jsx)(b.a,{path:"/Projects/APM",children:Object(h.jsx)(v,{})}),Object(h.jsx)(b.a,{path:"/Projects/VGC",children:Object(h.jsx)(g,{})}),Object(h.jsx)(b.a,{path:"/Projects/VAPI",children:Object(h.jsx)(O,{})}),Object(h.jsx)(b.a,{path:"/Projects/BUI",children:Object(h.jsx)(f,{})}),Object(h.jsxs)(b.a,{path:"/",children:[Object(h.jsxs)("div",{className:"Projects-FolderRow",children:[Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/AVI",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Java Simulation"}),Object(h.jsx)("span",{className:"TinySpan",children:'"Autonomous Vehicle Intersection"'})]}),Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/EZG",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"React JS Site"}),Object(h.jsx)("span",{className:"TinySpan",children:'"EasyGrade.app"'})]}),Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/APM",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Agilent Embedded C++"}),Object(h.jsx)("span",{className:"TinySpan",children:'"Pattern Matching Algorithm"'})]})]}),Object(h.jsxs)("div",{className:"Projects-FolderRow",children:[Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/VGC",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Agilent .NET C#"}),Object(h.jsx)("span",{className:"TinySpan",children:'"Virtual G.C. Simulator"'})]}),Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/VAPI",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Agilent AWS Cloud"}),Object(h.jsx)("span",{className:"TinySpan",children:'"Virtual Browser UI (Full Stack)"'})]}),Object(h.jsxs)(m.b,{className:"Folder Projects-Folder",to:"/Projects/BUI",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Agilent Web App"}),Object(h.jsx)("span",{className:"TinySpan",children:'"Browser UI (Full Stack)"'})]})]})]})]})})})]})}}]),s}(c.a.Component),I=(s(36),s.p,s.p+"static/media/award.a2758288.jpg");var T=function(){var e=Date.now()-new Date("August 10, 1997").getTime(),t=new Date(e),s=Math.abs(t.getUTCFullYear()-1970);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Article-Media",children:Object(h.jsx)("img",{src:I})}),Object(h.jsxs)("p",{className:"Article-Text",children:["I'm Ben Girone. I was born on August 10, 1997. That makes me ",s," years old at the moment. This blog post is programmed to automatically calculate that age. If you can't tell by the construction of this site, I like programming things. I first began programming with video game scripting languages in high school (~2014). I quickly developed a deep interest in the problem solving process of programming. This lead me to learn many other languages to solve more complicated problems."]}),Object(h.jsx)("p",{className:"Article-Text",children:"In college, I took my fascination with problem solving a step further and decided that a degree in computer science wasn't enough. I opted to get a degree in mathematics as well. Towards the end of college I discovered a hobby that also scratches my itch for solving complex problems. Chess!"}),Object(h.jsx)("p",{className:"Article-Text",children:"Currently, I'm working at Agilent Technologies developing software and firmware solutions to better the field of Gas Chromatography. I do Full stack UI development, as well as develop cutting edge algorithms using math, statistics and machine learning. Outside of work, I still spend plenty of time developing personal projects like this site."})]})},k=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(n.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{className:"Blog-Header",children:"Blog"}),Object(h.jsx)("main",{className:"Blog-Main",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/Blog/About",children:Object(h.jsx)(T,{})}),Object(h.jsx)(b.a,{path:"/",children:Object(h.jsx)("div",{className:"Blog-FolderRow",children:Object(h.jsxs)(m.b,{className:"Folder Blog-Folder",to:"/Blog/About",children:[Object(h.jsx)("img",{className:"filter-green",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"About Me"})]})})})]})})})]})}}]),s}(c.a.Component),F=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/CV",children:Object(h.jsx)(j,{})}),Object(h.jsx)(b.a,{path:"/Projects",children:Object(h.jsx)(A,{})}),Object(h.jsx)(b.a,{path:"/Blog",children:Object(h.jsx)(k,{})}),Object(h.jsxs)(b.a,{path:"/",children:[Object(h.jsx)("header",{className:"App-header",children:"Hi! I'm Ben. Welcome to my site."}),Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"CV",children:Object(h.jsxs)(m.b,{className:"Folder",to:"/CV",children:[Object(h.jsx)("img",{src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"CV"})]})}),Object(h.jsx)("div",{className:"Projects",children:Object(h.jsxs)(m.b,{className:"Folder",to:"/Projects",children:[Object(h.jsx)("img",{className:"filter-blue",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Projects"})]})}),Object(h.jsx)("div",{className:"Blog",children:Object(h.jsxs)(m.b,{className:"Folder",to:"/Blog",children:[Object(h.jsx)("img",{className:"filter-green",src:u,alt:"Folder"}),Object(h.jsx)("span",{className:"BigSpan",children:"Blog"})]})})]})]})]})})})}}]),s}(c.a.Component),P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.fae8bfb0.chunk.js.map