I've always known the importance of having a personal website, if not just for domain security, but the last time I updated mine was way back in 2016 - before I even got into front end development! I followed a tutorial and used a theme for a Jekyll site on Digital Ocean, and while it worked just fine, I wanted to create something of my own that I could be proud of (and didn't cost me anything to host!) So, using the hottest new tech, I took my winter break and did just that.

The site  uses the fantastic [Gatsbyjs framework](https://www.gatsbyjs.org/), which allows me to have a statically generated single-page-application with React and Webpack. Was also my first time using GraphQL, and while there was a bit of a learning curve, it made me a fan.

I used AdobeXD to plan/prototype the design beforehand as I find having a completed design in front of you while coding increases productivity massively. I wanted to give my site plenty of flavor, so I added a bunch of little colorful animations throughout. The most obvious one to a desktop user is the mouse trail animation that greets you in the background of pages. I went through many iterations with this component before finally settling on the gradient-changing 60fps HTML5 Canvas version you see now. If you'd like to see how that's coded (or implement one for your own site), check out the source [here!](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/Canvas.js)

There are also aplenty of other little animations and UI treats to maintain a premium feel, including a [FancyLink](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/FancyLink.js) component and an [inline navigation header](https://github.com/Egrodo/noahyamamoto.com/blob/master/src/components/PostHeader.js) for the blog posts that lets the user navigate through the blog posts and dynamically display content, as well as a bunch of other small things that I think add to the user experience.

Thanks for reading, if you have any recommendations or questions don't hesitate to let me know!