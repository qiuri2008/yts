# coding: utf-8
from __future__ import unicode_literals

import re

from .common import InfoExtractor


class JWPlatformIE(InfoExtractor):
    _VALID_URL = r'(?:https?://content\.jwplatform\.com/(?:feeds|players|jw6)/|jwplatform:)(?P<id>[a-zA-Z0-9]{8})'
    _TEST = {
        'url': 'http://content.jwplatform.com/players/nPripu9l-ALJ3XQCI.js',
        'md5': 'fa8899fa601eb7c83a64e9d568bdf325',
        'info_dict': {
            'id': 'nPripu9l',
            'ext': 'mov',
            'title': 'Big Buck Bunny Trailer',
            'description': 'Big Buck Bunny is a short animated film by the Blender Institute. It is made using free and open source software.',
            'upload_date': '20081127',
            'timestamp': 1227796140,
        }
    }

    @staticmethod
    def _extract_url(webpage):
        mobj = re.search(
            r'<script[^>]+?src=["\'](?P<url>(?:https?:)?//content.jwplatform.com/players/[a-zA-Z0-9]{8})',
            webpage)
        if mobj:
            return mobj.group('url')

    def _real_extract(self, url):
        video_id = self._match_id(url)
        json_data = self._download_json('http://content.jwplatform.com/feeds/%s.json' % video_id, video_id)
        return self._parse_jwplayer_data(json_data, video_id)
