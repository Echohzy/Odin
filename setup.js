window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

import fetch from 'isomorphic-fetch';

window.fetch = window.fetch || fetch;