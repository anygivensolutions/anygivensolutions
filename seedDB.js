require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PSWD}@localhost/${process.env.DB}?authSource=${process.env.SOURCE}`, {useNewUrlParser: true});
//h2 add class='inlinePostHeading' - subheadings use single quotes on classes
//signature should be an h2

var myBlog = new Blog ({
    title: 'And I Am Back!',
    body: ` 

<p>Today I am happy to say I have finally gotten my website back online. After about a year of it being offline for various reasons. I finally took the time to get it back up and running, just in time for the new year. I have recently started to work on, building some portfolio pieces. In doing that I want to remain consistent so I will start the 301 days of code journey. I am going to document the process of me building some projects and honing my skills as a web developer. </p>

<p>When I put this website online today, it will not even be remotely finished at all, so please don’t expect that. What I did is got the structure setup so it is online and people can get to it. The next step is to round it out into the product I want it to be. As I am fixing it, to improve this site. I will be writing about and posting the changes I have made on the site in a blog post.</p>

<p>I believe this can be a really great learning experience for me. To be able to document what I’m doing and keep my blog progression in step with the website & portfolio building progression it should be interesting.</p>

<h2 class='inlinePostHeading'>Getting the blog setup:</h2>
<p>As a part of this learning experience. I decided I wanted to build my own blog. I previously went the wordpress route and it just was not for me. I got stuck in the cycle of looking for the perfect theme, but never finding it. Then I wanted to customize one that I found and getting the pages to render how I wanted them. I spent more time fixing the theme than producing any content.</p>

<p>I decided I am going to build my own blog engine that works for me and has the features that I am looking for out of a blog. I think it will be a fun little project to do on the side while I am working on other things. So far what you see is what I have but I need it to be way more dynamic, automated and have formating options built-in. Right now I am doing most of it manually. Automation is up next!</p>

<h2 class='inlinePostHeading'>Building portfolio pieces:</h2>

<p>I want to start looking for some developer job. Before I do so, I want to build out several portfolio pieces to put up and demo on this website. I am going to document that entire process as well. As I get the portfolio pieces built, I will be adding the portfolio section to the homepage to show what all I have been working on!</p>

<h2 class='inlinePostHeading'>301 Days Of Code:</h2> 

<p>To help faciliate all of the coding goals that I have. To be more consistent with coding, getting better and building projects. I decided I am going to start the 301 Days Of Code. To at minimum code 1 hour a day. Every. Single. Day. What I work on each day will be posted to the blog and uploaded daily. </p>

<p>It all will end up tying together. I just wanted to create this blog to document the journey I am on in hopes to share some things I learn along the way with others!</p>

<h2 class="signature">-Dom</h2>`

});


//myBlog.save((err) => {
 // if(err) {
   // console.log(err);
 // } else {
   // console.log('saved!');
  //}
//});

var myBlog02 = new Blog ({
    title:'Yes, I dev from an iPad full time!',
    body: `

<p>There has been a lot of debate and conversation lately about whether or not an iPad can replace your laptop. Debat on if you can really have a pro workflow from an iPad. I say it depends. Universally, no, it isn't going to replace everyone's laptop. However, for some people it can and it did for me. Let me tell you about the my experience so far and how I dev solely from my iPad Pro.</p>
<h2 class='inlinePostHeading'>Core Apps & Services for Development:</h2>
<ul class='blogList'>
	<a href='https://itunes.apple.com/us/app/blink-shell-mosh-ssh/id1156707581?mt=8' target='_blank'><li>Blink Shell: Mosh & SSH</li></a>
	<a href='https://digitalocean.com' target='_blank'><li>Digital Ocean</li></a>
	<a href='https://itunes.apple.com/us/app/inspect-browser/id1203594958?mt=8' target='_blank'><li>Inspect Browser</li></a>
	<a href='https://itunes.apple.com/us/app/dash-offline-api-docs/id1239167694?mt=8' target='_blank'><li>Dash - Offline API Docs</li></a>
	<a href='https://itunes.apple.com/us/app/coda/id500906297?mt=8' target='_blank'><li>Coda</li></a>
	<a href='https://itunes.apple.com/us/app/drafts-5-capture-act/id1236254471?mt=8' target='_blank'><li>Drafts</li></a>
	<a href='https://itunes.apple.com/us/app/todoist-organize-your-life/id572688855?mt=8' target='_blank'><li>Todoist</li></a>
	<a href='https://itunes.apple.com/us/app/graphic-for-ipad/id363317633?mt=8' target='_blank'><li>Graphic for iPad</li></a>
	<li>Honorable mention: Transmit for iOS</li>
	<li>iOS Notes app</li>
	<li>Files App</li>
	<li>Music App - Apple Music</li>
</ul>
<h2 class='inlinePostHeading'>Blink</h2>
<p>I use this app to connect to my VPS. Where all the main development takes place. Using Blink with the VPS is very, very responsive. I do not experience any lag at all & that is great! I have tried different terminals. They would all crash or drop the connection. So far blink has been the best hands down. It is customizable & powerful. It makes this whole process achievable.</p>
<h2 class='inlinePostHeading'>Digital Ocean</h2>
<p>Another service that has made this solution possible. I use one of the higher end droplets. I don't have too. I actually started off with one of the $5 a month droplets and it worked great. However, I know I would be doing some, somewhat heavy processing & multitasking. So I wanted to future proof a little bit and use one of the better droplets. I do see the performance and speed differences which is exactly what I was looking for it is worth every cent.</p>
<h2 class='inlinePostHeading'>Inspect Browser</h2>
<p>I just started using this app over the last few weeks! It allows you to view the source code of the web page you are currently viewing and insepct it. Inspect Browser is packed with useful features that I was previously missing, by not having a desktop browser. Responsive design is mandatory these days and it has a great collection of presets to view the web pages according to the set media query.</p>
<h2 class='inlinePostHeading'>Dash - Offline API Docs</h2>
<p>If you plan on doing any offline coding this app is a must! It has any API you can think of to use as a reference.</p>
<h2 class='inlinePostHeading'>Coda</h2>
<p>I use Coda sparingly. Not because it isn't a good app. It is actually a great app and if I was using a code editor regularly on iOS. It would be Coda hands down, there isn't any thing close to it in the iOS app store in my opinion. Over the past few months Ive been commited to using vim. Since I develop solely from the server. I like the idea of being able to SSH or Mosh into it from any where and my editor is there. I dont have to worry about what editor i'm going to use. At most I have to import my vimrc file and update vim, that only would take a few seconds. So its a low barrier for entry. As opposed to having to get online and install an app and then packages etc. Other than that I like the philosophy behind vim. Coding is much faster when I don't have to touch a mouse. Seeing as how I don't have a mouse and I was curious about vim before my Mac decided to die. Vim and the iPad seem like the natural way to go. The more I use it the faster I get with vim and I love it. It is definitely a learning curve. I know for sure I have not begun to scratch the surface with it. I learn something new about it every day. On the days where I just want to get in and play around with some code real quick - Coda is my go to choice.</p>
<h2 class='inlinePostHeading'>Drafts</h2>
<p>Drafts, is an app that I have used on an off over the years and even pay for it. I want to use it more now that I am begining to write more content from either the iPhone or iPad. I absolutely love the new updated drafts though I still have the old one installed. I use both apps but I do need to fully migrate over to the new one. I mostly use drafts to preview markdown documents or write drafts of longer documents - like blog posts.</p>
<h2 class='inlinePostHeading'>Todoist</h2>
<p>I use the premium version of this app and how I have used this app over the years has evolved. I definitely use it as my go to task manager. I dump everything I need in there. However, for developement. I use it kind of like an issues tracker and a code "to do app". Each project has its own folder structure with a list of items and features that need to be completed and so forth.</p>
<h2 class='inlinePostHeading'>Graphic for iPad</h2>
<p>I use this app to play around with design ideas for new projects I decide to work on.</p>
<h2 class='inlinePostHeading'>Transmit for iOS</h2>
<p>When I said earlier I get around it, most of the time it is because of this app. I wasn't going to mention it because you can no longer get it on the iOS app store. Luckily I got it before they discontinued the iOS version of it. They do have a Mac version It is another app that was made by Panic, who also makes Coda.</p>
<h2 class='inlinePostHeading'>iOS Notes.app</h2>
<p>This is one of my go to Notes app. I have tried other apps like Noteability, Goodnotes, Bear just to name a few. They all are great at so much and the iOS leaves much to be desired. However, I do house the bulk of my notes here....once again because I am all in on the Apple ecosystem. Having all my notes accessible across all devices and in sync its vaulable. It just works. I am able to nest folders inside of folders to help structure the data. I use the notes app for a lot of code snippets, quick terminal commands and other little quick things I need to copy and paste real quick. For this use it works great. I often find my self needing little bits of information frequently that I can copy and paste some where else, fortunately the notes app is great for that, I guess you can say it is my clipboard so to speak. Whatever it is it works for me.</p>
<h2 class='inlinePostHeading'>Files.app</h2>
<p>Not much to say here. It is what it is. I've found several ways to work with it and around it to make it work for me. Some times I run into things where I have to get ultra creative to move files around but for the most part it is ok. In combination with the NAS and the server for now it gets the job done. I do hope in future iOS versions the improve it and add folder/file manipulation support. I am looking for things like compression, being able to download folders and not have to download individual files from the folders(getting around this can be nightmareish). Simple things like that would be ideal but I get around it.</p>
<h2 class='inlinePostHeading'>Music.app - Apple Music</h2>
<p>I am all in on the apple ecosystem so this was the natural choice for me. I have been using it for a year or so. I was definitely a late adopter. Since I have been using it though, it works great for me. Between the iPad, iPhone, Apple Watch & Apple TV. No matter what device I am on. I have full access to my whole library, that's something I am not willing to sacrifice at all. I have a rather large music library outside of Apple Music. The iCloud Music Library that comes included lets me have full access to all that music plus my Apple music. A no brainer for me.</p>
<h2 class='inlinePostHeading'>My Cloud.app</h2>
<p>One acronym. NAS. Network attached storage. This has been a life saver sooo many times when working with my Digital Ocean droplets. I use the NAS to regularly send my backups of my servers and store them to the NAS. I also use it to backup my iCloud Drive files. By using Rsync or scp or transmit. I can easily get the files where I need to be to properly archive them.</p>
<h2 class='inlinePostHeading'>Airplay</h2>
<p>Airplay is a good tool to have as well. I can throw up the code on the tv if I want to get on to a larger screen than my iPad. It isn't going to be full screen but it definitely helps. This really isn't much of an issue any more with the newer iPad Pro you can directly connect a display. I love the look of the new iPad but I am not fond of the bending that has been reported with the device. I don't suspect it would be a major isssue for me but since I would be using it as my main device 10 or so hours a day. I don't want to have to even possibly worry about it. I may wait until the next one is released I am not sure I may not we shall see.</p>
<p>Those are the main apps I use to write code on a daily basis. There are plenty of other apps I use to help me get things done throughout the day. Though these are the core apps that are revolved around me writing code. The workflow I have is always a work in progress. I do think that getting a second iPad would help smooth out the process. I am use to working with at least 2 monitors. When I am on the server and using tmux i dont really miss it there. When I am working on documents, watching videos, running 5-8 apps at onces. I'd like to relieve some of that workload on the one iPad and put it on another one. Especially when I am watching tutorial vidoes. The main app I use to learn from does not allow side by side apps, which is understandable. It makes it tough to then write code or test it at the same time without having to stop the video and switch apps or code from the iPhone. That is another thing with the setup I have I can run it all from my iPhone seamlessly without missing a beat. Again, it just works.</p>
<h2 class='inlinePostHeading'>Productivity vs Mac & Focus</h2>
<p>For some reason compared to my Mac. I write code more frequenlty and put out more code than I ever did from my Mac. To me the iPad takes away a lot of distractions or what would be distractions. The device is somewhat always in focused mode. What I mean by that is, unless you are using the multitasking side by side features. Each app is full screen, taking up your full attention. Even when you are in side by side mode, you are still only using 2 apps. It allows you to focus more on the content you are actually trying to focus on. Instead of having the ability to run 20 apps and 3 web browsers at once. The iPad allows you to focus in on the task at hand, get it done and then get back to the device for media! Whether you are using it for work or play it is definitly up for the the task it all just depends on your approach & perspective.</p>
<h2 class='inlinePostHeading'>Verdict</h2>
<p>Operating fully from an iPad is definitely possible. There are a few of us other there that is doing this. I recognize it is not for everyone, to each their own. If you have been curious though, I would definitely say go for it. This by no means does not mean I won’t buy another mac in the future. But there isn’t a glaring need for it now. 
Eventually I will but for now I am happy with my iPad setup.</p>
<p>By using a VPS, the well made iOS apps. If you approach it with an open mind and a little bit of a different perspective. You can have an iPad replace your Mac or PC. Especially if you are familiar with the commandline. You can use a VPS for you file system and the iOS apps as your UI, it can get the job done. Even for short term use and on the go it can be a great solution! --on deving from iPad.</p>
<h2 class='signature'>-Dom</h2>
`
});

var myBlog03 = new Blog ({
    title: 'Code, Code, Code',
    body: `
<p>Over the last two weeks I have been working on a few different projects. I've had a lot of fun doing them some of them personal and other for a clients. First up I started doing work on a new client project that I got. I have been working on the travel agency project that I picked up. It is a medium sized project in scope. It includes creating several internal tools and a website that is needed. The tools need to be simple, easy and extremely obvious to use. They didn't want a lot of UI buttons as that is why they don't use other software out there that can complete these functions. They wanted a customized solution for them. So I agreed to it. First up we decided to work on the first two of many internal tools they can use; an address book to keep record of their clients and an easy payments tracking system. Later on we would begin a website as a part of the project too, so I got to work.</p>
    
<p>First I started on the address book it took a little bit longer than expected and I'm sure it will iterate over time too of course as I am able to implement more features but they wanted something they could use ASAP, in agreement we would add more to it later. I started to work on the backend functionality first. I decided to go with NodeJS, Mongo for the DB and HBS for template rendering. I got the routes setup to view the "admin" page to show the options to get to the contacts and payment system. I left it open so that I can add more buttons later on.</p>
<h2 class='inlinePostHeading'>Fails:</h2>    
<p>I was using faker.js to seed my DB so I would have data to display and test on the design. I was getting a bulk write error for the longest time I wasnt sure why. I did a little research, it could have been due to the amount of contacts I was trying to add at once. I haven't had a chance to go back and test it yet to see if that was the issue but I do want to figure that out.</p>
<h2 class='inlinePostHeading'>Success:</h2>
<p>I was able to get the data to output and show the full master contacts list, a single contact once you choose a one contact from the list. That was one two of the major things I wanted to tackle earler and figure out. When I wasn't quite sure how I was going to do it. Once I got into the app and started working with the code I started figuring out solutions to the problems.</p>
    
<p>Other than that I started the process of learning Vue. I have to say I really love the framework. At first I started out with react and after spending what felt like an eternity to get react setup so I can even practice. I took a look at the Vue docs. I was up and running after a few minutes. That is when I decided to go for Vue as my front end framework to pair with express to build my apps going foward on the next several projects. I don't regret the decision at all. My first thought though was when did front end work become so involved! I lost a little love for front end work and thats how I ended up learning node and express, the front end felt tedius. After being introduced to Vue it made writing front end code fun for me again and I couldn't wait to dive in.</p>
    
<p>Since then I have spent the bulk of my time really trying to learn and understand the framework and how I can intergrate it with Express. That took me down a rabit hole of having to learn webpack, babel and other tools. The experience gave me valulable practice in just diving into the code and sort of reverse engineering it to figure out how things work, just so you can get it to work. That is what I ended up doing for several hours but it was fun. Before I knew it, it was dark outside and I'm sure I started when it was well within daylight hours. It took forever to figure out how to serve vue to express and get it all setup on my server and display out to the web so I could have a play ground to practice and build projects. Of course I only ended up having to change two lines of code but I had to read through several, several lines of code, dig through the folder structure and skim thorugh a lot of the files to figure that out. I can now say I won't forget how to do that going forward. Learning how to do little things like that by reading the docs and just opening up the files to see what you have and fit your code into that structure was both frustrating and rewarding at the same time. I want to learn enough of Vue to integrate it into the address book project and the other parts of that project as well. So far Vue seems simple enough to be able to do that in a short amount of time without extending out the build time too much longer than initially planned.</p>
    
<h2 class='inlinePostHeading'>Lessons learned:</h2>
<p>I should have been using Vue a long time ago!</p>
    
<p>I am starting to realize why people prefer dev dependencies over global setups! Major plus for that, lesson learned.</p>
    
<p>It was easier than I thought it was going to be creating the backend logic for the contact list. It was taking longer to write the actual code that I wanted to achieve the solution than figuring out the logic behind it. I think that is something that I will get better with over time: writing code faster. I want to start tracking exactly how much time it is taking to build out each feature. So that I can track it over time the progress I am making in that regard.</p>
    
<p>There are other projects I want to build coming up that I would use daily one of them being a pomodoro app. I did start to build one a while back and I would like to go back and revisit that with a new approach. Instead of doing it all on the front end I want to allow it to have login capabilities so users can remember their setup settings. Then connect it to Vue on the front end for the UI. I think doing more focused session work in small 25-40 minute pomodoro sessions like that can help me speed up my output some, though not to sacrifce quality. I have fallen in love with the process, tweaking and iterating of it all. Whether its the code or the setup of developing from the iPad and creating vim into the editor that makes me most productive has all been fun and I look forward to seeing where it takes me further down the line.</p>
    
<p>Spending this much time coding didn't leave much time for writing about what I achieved daily and getting it posted daily. Instead of one overarching summary like this but I am ok with that for now. I think the code itself will show what I have been achieving daily through github.</p>
    
<p>I like being able to go back and reflect a couple of days later and write periodical updates like this with more content to show. I like that concept. I need to also get some more time in working on my own site to add more to it. Getting into the routine of all this and figuring out the best time to get it all done is going to take some time. I improve the process and tweak it constantly to work things in for instance I found I like to get the coding part done first. Then take care of the writing and admin tasks after that.</p>
    
<p>I am still getting everything done on the iPad. It has been handling things like a champ! I am happy with the setup so far. There are a few more things I want to add for automation on my workflow to help speed up tasks. I do have some Siri Shortcuts downloaded but I need way more. I want to start getting into creating my own eventually.</p>
<h2 class='signature'>-Dom</h2>`
});

//myBlog03.save((err) => {
  //if(err) {
    // console.log(err);
 // } else {
   // console.log('saved 03');
  //}
//});

var myBlog04 = new Blog({
    title: 'Getting Started with Vim Series Part One',
    body: ` 
<p>If you are looking to get started with Vim in 2019 then you have come to the right place! Here we can learn together! Since I am also relatively new to Vim and I have been using it for several months now. I decided I wanted to help other people get up and running with Vim and share my journey with it as my main text editor. It is amazing! I started to learn Vim and incorparate it into my daily tooling since then I haven't looked back. I wish I would have started to learn it a long time ago.</p>

<p>Using Vim is an investment and not a small one. It will take time and a lot of practice to become proficient but it is well worth it in the end. Over the little time that I have spent with the editor. I have seen how over time it has increased the speed in which I am able to edit a document. I can move to the end or beginning of the line quickly skip forward or back 2 or 3 words. I can make precision cuts with my text editor with minimal effort all from the keyboard! The beauty of it really shines through when your able to navigate and make the necessary edits in a file in a matter of keystrokes.</p>

<h2 class='inlinePostHeading'>Why Vim?</h2>

<p>Vim (Vi improved) is an improved version of Vi. Vim is all about the keyboard and ditching the mouse. It can increase your productivity when working with text based files. All of your work is done on the keyboard, reducing the need for a mouse at all. By not having to switch over to your mouse to complete arbitrary clicks, you are naturally going to speed up your work time. Aside from that Vim brings a different perspective to text editing. At first using Vim can seem slow and counter-intuitive. Once you begin to use it and become accustomed to Vim's way of thinking. Things begin to flow and feel a lot more natural and it begins to feel like we should have been editing text this way a long time ago universally.</p>

<p>Vim is a text editing tool that can be both as minimal and powerful as you want. As a web developer and my primary language being JavaScript. I wanted a text editor that I could get up and running with no matter what system I am on. All I need to do is load in my configuration file and I've hit the ground running. That's what I love about Vim. No matter what environment I am in I can almost always count on it being available. That is huge for me especially when I am jumping from server to server, iPad, Mac or even maybe a PC some times when I'm not near my own iPad setup for some reason. I can always get my Vim setup quickly. Here we are going to get Vim installed, setup, ready to use and learn about basic Vim usage so you can get started today with Vim!</p>

<h2 class='inlinePostHeading'>Initial installation and setup</h2>

<p>Vim may already be installed on your machine. We can go into the command-line and find out this information by typing in the command:</p>
<p>$ vim -v</p>

<p>If you find it is an older version anything pre 8.0. You will want to go ahead and get the latest version available. You can get the latest version depending on your environment:</p>

<h3 class='inlinePostSubheading'>macOS</h3>
<p>Use Homebrew to install Vim. If you don't have Homebrew setup yet on your Mac. You can head over to their website brew.sh to view their docs and get that installed. Once you do run the command:</p>
<p>$ brew install vim</p>

<h3 class='inlinePostSubheading'>Ubuntu</h3>
<p>$ sudo apt-get install vim</p>

<h3 class='inlinePostSubheading'>Windows</h3>
<p>Visit the official website to download Vim. https://www.vim.org/download.php</p>

<p>Running the next command will open a new blank Vim window. This is where the magic happens. Once you have Vim installed you can go ahead and open it by running the command:</p>
<p>$ vim</p>

<h2 class='inlinePostHeading'>Vim modes:</h2>
<p>Once you are inside a Vim window you are in what is called normal mode.</p>

<p>Normal(command) - where you execute your commands like scrolling with hjkl, saving with :w, to quit without saving :q! and so on.</p>

<p>Insert - is for editing or inserting text. To get to this mode type i.</p>

<p>Visual - is for manipulating text selections. Visual mode has 3 sub modes that are: plain visual - character selection, line-wise visual - line selection,  and block-visual - block selection. To get to the plain visual mode type v it will work by character, V will get you to the line-wise selection of visual mode and VV will get you to the block visual mode.</p>

<p>To exit any mode press ESC on your keyboard.</p>

<h2 class='inlinePostHeading'>Basic file navigation</h2>

<p>Now that we know how to open up a new blank file in Vim. The next step is to be able to navigate that file. You get several commands to navigate a file for editing. We want to start out with the most basic ones. I found it easier to learn one or two commands at a time. Try to become comfortable with those commands before moving on and adding more under your belt. This way it will be easier to retain and efficiently implement what you are learning on a daily basis.</p>

<p>Up is k</p>
<p>Down is j</p>
<p>Left is h</p>
<p>Right is l</p>
<p>:w is save</p>
<p>:wq is save and quit</p>
<p>:q is quit</p>
<p>:q! is quit without saving any changes</p>
<p>:w <filename.txt> to save the file with a name on save.</p>
<p>$ vim <filename.txt> is to open a file using Vim from the command line.</p>

<h2 class='inlinePostHeading'>Configuration</h2>
<p>So we now now how to open a new or existing file in Vim and navigate it but we have a pretty bare bones setup at this point. The editor can be even better and do even more for you but it requires a little more setup. Vim gives you a pretty blank slate starting off. It is up to you to configure it in a way that works best for you. If you are a person who loves to customize every thing, this is the section for you! To start, if you want line numbers to show on each file that can be done, along with linting, syntax formating and anything else you would expect from a modern day code editor. The configuration is done using a .vimrc file in your user folder. You will find many .vimrc files on the web. I would suggest starting out with a blank or near blank .vimrc file. You want to understand what you are putting into the file and what exactly it does or manipulates. At least somewhat have an understanding of what is going on before putting that code in the .vimrc. I personally started out with a completely blank file and began to build it up with features as I wanted them. My configuration file is a composition of many other configs out there. I pieced it together based on what I found in other peoples configs that works with similar technologies as I do. Even if they don't you still may find something you want to implement into your own file. Just be sure to know how it works before adding it! Don't just copy and paste everything you see.</p> 

<p>Organize your .vimrc. Once you start to add more packages and configuration setup. The file is going to grow quickly as you start to figure out how to setup Vim to work for yourself. Take a look at other peoples configuration file and see how they organize it and come up with some sort of organization that works best for you. It will save you time in the long run when you can easily hop to the section you need to change instead of mindlessly scrolling hoping to come across a good place to put it.</p>

<p>To start configuring Vim create your configuration file. This will create a new file called .vimrc in the current directory you are in. So you want to be sure you are in your home root directory so Vim can find the file. To create your .vimrc file go back into your command line and type:</p>
<p>$ vim .vimrc</p>

<p>For Instance say we want to see line numbers in .vim. To do so in the config file type in set number. Then :wq to save and quit Vim. If you reopen Vim by typing in either vim in the command line or vim .vimrc to reopen to config file, you should now see line numbers!</p>

<p>That is only the beginning though, you can theme your editor, control how it handles those pesky tabs or spaces and almost anything else you can think of! If you are curious about all of the options available you can dig into the man pages of Vim. To get to them simply type in man vim from the command line or :help from inside Vim.</p>

<p>You now have all the tools you need to open, close, edit and save a file in Vim. Now you want to just practice and explore to learn more and become more comfortable with the editor.</p>

<h3 class='inlinePostSubheading'>Practice, Practice, Practice</h3>
<p>Vim has a built-in tool you can use to practice and become more familiar with the core concepts of Vim by typing in vimtutor from your command-line. It will bring up an document that has a more thorough introduction to Vim and more about file manipulation, navigation, searching and more. It can be helpful to run through vimtutor once or twice a day as practice that is what I did when I first started out and I still run through it from time to time to refresh some concepts when needed.</p>

<h2 class='inlinePostHeading'>Next steps</h2>
<p>From here you just want to get in and maybe use it on side projects or typing up some notes on something. Use it in situations that are not very important at first. As you want to get use to the editor and how it works. You don't want to sort of learn on the job with the editor. In the beginning it will seem like it is slowing you down more than it is helping you. I would suggest maybe taking 15-30 minutes a day just using Vim to practice some of the core fundamentals of getting in and out of the different Vim modes, saving and quitting files, and basic navigation. Once you feel like you have good grasp on those concepts. We will continue to build on those and add more concepts to become even more proficient with our text manipulation. Stay tuned for the next post to learn even more about how to use Vim and getting it setup for your needs! That is coming all in part two in this getting started with Vim series.</p>
<h2 class='signature'> -Dom</h2>
`

});

myBlog04.save((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('saved 04');
    }

});
