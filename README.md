# clipper race blog 

## Getting Started
Clone this repo.

```
git clone https://github.com/MattBodey/clipper-race-blog.git
```

Remove .git folder and setup a new one

Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

Now push to whatever repo you want!

## How to edit your site title and description 
Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```
