---
layout: post
title: Jekyll Usage
description: Creating a Jekyll site usually involves the following, [[once jekyll is installed.|Install]]
categories:
    - other
tags: Jekyll data
---

From:https://github.com/mojombo/jekyll/wiki/Usage

Creating a Jekyll site usually involves the following, [[once jekyll is installed.|Install]]

1. Set up the basic structure of the site
2. Create some posts, or [[import them from your previous platform|Blog migrations]]
3. Run your site locally to see how it looks
4. Deploy your site

## Basic Structure

Jekyll at its core is a text transformation engine. The concept behind the system is this: you give it text written in your favorite markup language, be that Markdown, Textile, or just plain HTML, and it churns that through a layout or series of layout files. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed on the layout and more. This is all done through strictly editing files, and the web interface is the final product.

A basic Jekyll site usually looks something like this:

<pre>
.
|-- _config.yml
|-- _includes
|-- _layouts
|   |-- default.html
|   `-- post.html
|-- _posts
|   |-- 2007-10-29-why-every-programmer-should-play-nethack.textile
|   `-- 2009-04-26-barcamp-boston-4-roundup.textile
|-- _site
`-- index.html
</pre>

An overview of what each of these does:

### _config.yml

Stores [[configuration|Configuration]] data. A majority of these options can be specified from the command line executable but it's easier to throw them in here so you don't have to remember them.



### _layouts

These are the templates which posts are inserted into. Layouts are defined on a post-by-post basis in the [[YAML front matter]], which is described in the next section. The liquid tag <code>{{ content }}</code> is used to inject data onto the page.


### _posts

Your dynamic content, so to speak. The format of these files is important, as named as `YEAR-MONTH-DAY-title.MARKUP`. The [[Permalinks|permalinks]] can be adjusted very flexibly for each post, but the date and markup language are determined solely by the file name.

### _site

This is where the generated site will be placed once Jekyll is done transforming it. It's probably a good idea to add this to your `.gitignore` file.

### index.html and Other HTML/Markdown/Textile Files

Provided that the file has a [[YAML Front Matter]] section, it will be transformed by Jekyll. The same will happen for any `.html`, `.markdown`, or `.textile` file in your site's root directory or directories not listed above.

### Other Files/Folders

Every other directory and file except for those listed above will be transferred over as expected. For example, you could have a `css` folder, a `favicon.ico`, etc, etc. There's [[plenty of sites|Sites]] already using Jekyll if you're curious as to how they're laid out.

Any files in these directories will be parsed and transformed, according to the same rules mentioned previously for files in the root directory.

### Running Jekyll

Usually this is done through the `jekyll` executable, which is installed with the gem. In order to get a server up and running with your Jekyll site, run:

`jekyll --server` 

and then browse to http://0.0.0.0:4000. There's plenty of [[configuration options|Configuration]] available to you as well.

On Debian or Ubuntu, you may need to add `/var/lib/gems/1.8/bin/` to your path.

### base-url option

If you are using base-url option like 

`jekyll --server --base-url '/blog'`

then make sure that you access the site at 

`http://localhost:4000/blog/index.html` . 

Just accessing 

`http://localhost:4000/blog`

will not work.

### Deployment

Since Jekyll simply generates a folder filled with HTML files, it can be served using practically any available web server out there. Please check the [[Deployment]] page for more information regarding specific scenarios.
