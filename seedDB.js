require('dotenv').config()
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


myBlog.save((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('saved!');
  }
});

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

myBlog02.save((err) => {
  if(err) {
     console.log(err);
  } else {
    console.log('saved 02');
  }
});
