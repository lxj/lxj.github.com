---
layout: post
title: Ubuntu下配置jekyll运行环境
category: ubuntu
tags: ubuntu jekyll
---

先看下[jekyll](https://rubygems.org/gems/jekyll)目前的最新版本和所需ruby的版本,当前jekyll版本v2.5.3，对ruby版本要求是>= 1.9.3

## 安装ruby>= 1.9.3环境

{% highlight bash %}
louxiaojian@dao:～$ sudo apt-get install ruby ruby-dev
{% endhighlight %}

<!-- more -->

## 设置gem源的地址

如果可以正常访问https://rubygems.org/，那么下面的设置忽略吧。

{% highlight bash %}
louxiaojian@dao:～$ sudo gem sources –remove http://rubygems.org/
*** CURRENT SOURCES ***

http://rubygems.org/
{% endhighlight %}

{% highlight bash %}
louxiaojian@dao:～$ sudo gem sources -a http://ruby.taobao.org/
http://ruby.taobao.org/ added to sources
{% endhighlight %}

{% highlight bash %}
louxiaojian@dao:～$ sudo gem sources -l
*** CURRENT SOURCES ***

http://rubygems.org/
http://ruby.taobao.org/
{% endhighlight %}

## 安装jekyll

{% highlight bash %}
louxiaojian@dao:～$ sudo gem install jekyll --version '2.5.3'
{% endhighlight %}

## 安装jekyll运行所需的依赖

{% highlight bash %}
louxiaojian@dao:～$ sudo gem install RedCloth
louxiaojian@dao:～$ sudo gem install rdiscount
{% endhighlight %}


## 运行jekyll --server

### 单纯构建网站

{% highlight bash %}
louxiaojian@dao:$ /home/lxj.github.com/ jekyll build
{% endhighlight %}

增加监控文件功能

{% highlight bash %}
jekyll build --watch
{% endhighlight %}

### 构建并加个web server

{% highlight bash %}
louxiaojian@dao:/home/lxj.github.com$ jekyll server
{% endhighlight %}

这个版本的还有watch功能，检测到文件变化，自动构建的。调试时方便很多。


