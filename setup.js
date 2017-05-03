'use strict';

import fetch from 'isomorphic-fetch';
import React from 'react';

window.fetch = window.fetch || fetch;
window.React = React;
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

