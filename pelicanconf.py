#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Odeilly'
SITENAME = "Odeilly's Note"
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Tokyo'

DEFAULT_LANG = 'ja'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#ARTICLE_URL = 'posts/{category}/{slug}/'
#ARTICLE_URL = 'posts/{category}/{slug}/index.html'

ARTICLE_URL = '{category}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
DEFAULT_DATE_FORMAT = '%Y年%B%d日 (%a)'

THEME = 'pelican-bootstrap3'
JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
PLUGIN_PATHS = ['../pelican-plugins']
PLUGINS = ['i18n_subsites']


#STYLESHEET_FILES = ("pygment.css", "voidybootstrap.css",)
#SIDEBAR = "sidebar.html"
#CUSTOM_SOCIAL = False
#SOCIAL = False
#SIDEBAR_HIDE_CATEGORIES = True
#CUSTOM_SIDEBAR_MIDDLES = ("sb_taglist.html", )
