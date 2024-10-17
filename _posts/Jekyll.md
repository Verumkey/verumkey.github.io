---
layout: post
title:  "Jekyll 使用教程"
date:   2024-10-17 19:05:01 +0800
categories: [技术，编程]
tags: [Jekyll,博客]
excerpt: "本篇文章演示如何获得一个静态网站"
---
# 一.在Windows上配置Jekyll
## 1.安装Ruby和DevKit
网址：[https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)
![](\images\Jekyll-images\jekyll.1.png)
## 2.安装Bundler和Jekyll
在命令行或终端输入：gem install bundler jekyll
![](\images\Jekyll-images\jekyll.2.png)
# 二.创建Jekyll网站项目
## 1.创建一个存放项目的文件
![](\images\Jekyll-images\jekyll.3.png)
## 2.创建一个Jekyll网站项目
### 2.1.使用cd命令进入你上面创建的文件的目录下

	cd "D:\Work\My-Website"
### 2.2.输入命令：jekyll new 文件名（你想设置的名字）

	jekyll new my-website
### 2.3.进入创建的文件安装项目依赖

	cd my-website
	bundle install
### 2.4.运行本地服务器以预览网站

	bundle exec jeky11 serve
### 2.5.图片演示
![](\images\Jekyll-images\jekyll.4.png)
![](\images\Jekyll-images\jekyll.5.png)
![](\images\Jekyll-images\jekyll.6.png)