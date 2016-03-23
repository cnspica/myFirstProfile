# coding:utf-8
'''
Created on 2013-11-10

@author: Administrator
'''
PINBOT_ANALYSE = 10
PINBOT_ANALYSE_REFRESH = 11
GET_ANALYSE_DATA = 20
GET_ANALYSE_DATA_REFRESH = 21
PLUGIN_POPUP = 30
PINBOT_DISPLAY = 40

PINBOT_ADD_WATCH = 50
PINBOT_REMOVE_WATCH = 51
PINBOT_DISCARD_RESUME = 52

PINBOT_ADD_COMMENT = 60
PINBOT_DEL_COMMENT = 61
PINBOT_SAVE = 70

PAGE_STATIS = 100

PLUGIN_DOWNLOAD = 31
PLUGIN_LOGIN = 32
PLUGIN_ADD_RESUME = 33

PINBOT_SIGN = 80
PINBOT_SINOUT = 81
PINBOT_MODIFY_INFO = 82
PINBOT_MY_WATCH = 83

PINBOT_INDEX = 1

PINBOT_FEED_INDEX = 90
PINBOT_FEED_AJAX = 91
PINBOT_FEED_ADD_NEW = 92
PINBOT_FEED_DELETE = 93
PINBOT_FEED_SUBMIT = 94
PINBOT_FEED_EDIT = 95
PINBOT_FEED_UPDATE = 96

TAOCV_URL = 200

PINBOT_ADD_RESUME_TAG = 210
PINBOT_DEL_RESUME_TAG = 211
PINBOT_ADD_FEED_TAG = 212

PINBOT_STATIS_LIST = \
[
# (u"插件分析", PINBOT_ANALYSE),
# (u"tab页刷新", PINBOT_ANALYSE_REFRESH),
# (u"获取数据", GET_ANALYSE_DATA),
# (u"获取数据刷新", GET_ANALYSE_DATA_REFRESH),
# (u"删关注", PINBOT_REMOVE_WATCH),
# (u"删简历", PINBOT_DISCARD_RESUME),
# (u"插件弹出页", PLUGIN_POPUP),
(u"添评论", PINBOT_ADD_COMMENT),
(u"插件下载", PLUGIN_DOWNLOAD),
# (u"到pinbot看", 70)
(u'我的关注', PINBOT_MY_WATCH),
(u'我的订阅', PINBOT_FEED_INDEX),
(u'点击订阅具体订阅', PINBOT_FEED_AJAX),
(u"PINBOT简历页", PINBOT_DISPLAY),
(u"添关注", PINBOT_ADD_WATCH),
]

PINBOT_STATIS_HEAD_LIST = [ x for x, y in PINBOT_STATIS_LIST]
PINBOT_STATIS_DICT = {y:x for x, y in PINBOT_STATIS_LIST}
