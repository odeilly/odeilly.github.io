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
#LINKS = ()

# Social widget
SOCIAL = (
     ('GitHub', 'https://github.com/odeilly'),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

ARTICLE_URL = '{category}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
DEFAULT_DATE_FORMAT = '%Y年%b年%d日 (%a)'

from unidecode import unidecode
TAG_REGEX_SUBSTITUTIONS = [
    ('Pelican', 'pelican'),
    (unidecode('サンプル'), 'sample'),
]

THEME = 'pelican-bootstrap3'
BOOTSTRAP_THEME = 'cerulean'
PYGMENTS_STYLE = 'emacs'

DISPLAY_TAGS_ON_SIDEBAR = True

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
PLUGIN_PATHS = ['../pelican-plugins']
PLUGINS = [
    'i18n_subsites',
    'tag_cloud'
]
