---
layout: post
title: Ubuntu下配置jekyll运行环境
category: ubuntu
tags: ubuntu jekyll
---

## 安装ruby环境

{% highlight bash %}
louxiaojian@dao:～$ sudo apt-get install ruby ruby-dev
{% endhighlight %}

<!-- more -->

## 设置gem源的地址

{% highlight bash %}
louxiaojian@dao:～$ sudo gem sources –remove https://rubygems.org/
*** CURRENT SOURCES ***

http://rubygems.org/
{% endhighlight %}

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


## 安装jekyll运行所需的依赖

{% highlight bash %}
louxiaojian@dao:～$ sudo gem install RedCloth
louxiaojian@dao:～$ sudo gem install rdiscount
{% endhighlight %}


## jekyll --server

{% highlight bash %}
louxiaojian@dao:～$ jekyll --server
/usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require': iconv will be deprecated in the future, use String#encode instead.
Configuration from ～/lxj.github.com/_config.yml
Building site: ～/lxj.github.com -> ./_site
Successfully generated site: ～/lxj.github.com -> ./_site
[2015-03-01 16:27:54] INFO  WEBrick 1.3.1
[2015-03-01 16:27:54] INFO  ruby 1.9.3 (2013-11-22) [i686-linux]
[2015-03-01 16:27:54] WARN  TCPServer Error: Address already in use - bind(2)
[2015-03-01 16:27:54] INFO  WEBrick::HTTPServer#start: pid=29912 port=4000
{% endhighlight %}

## 碰到的问题

- 问题一

        /usr/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require': iconv will be deprecated in the future, use String#encode instead.


