'use strict';

var config = require('../../config'),
    builder = require('../common/assetDataBuilder.js'),
    data = builder.prepare(__dirname),
    resolve = data.resolveFrontendPath;

data.assets.host = config.server.authorityBlog;
data.assets.profiles =  ['blogger', 'registered', 'anon'];

var registered = ['blogger', 'registered'];

data.assets.css = [
    resolve('/css/defaults/reset.css'),
    resolve('/css/defaults/basic.less'),
    resolve('/css/defaults/elements.less'),
    resolve('/css/defaults/controls.less'),
    resolve('/css/defaults/controls.spinner.less'),
    resolve('/css/defaults/layout.less'),
    resolve('/css/defaults/layout-footer.less'),
    resolve('/css/defaults/design.less'),
    resolve('/css/defaults/sprite.less'),

    resolve('/css/vendor/hint.less'),
    resolve('/css/vendor/markdown.less'),
    resolve('/css/vendor/markdown.editor.less'),
    resolve('/css/vendor/highlight.less'),
    '/css/highlight.less',

    resolve('/css/plugin/jquery.readingTime.less'),

    { profile: 'anon', file: '/css/views/shared/authentication.less' },
    '/css/views/shared/404.less',
    '/css/views/shared/upload.less',
    '/css/views/shared/expand.less',
    '/css/views/shared/table.pager.less',

    '/css/views/user/profile.less',
    { profile: registered, file: '/css/views/user/profile.edit.less' },
    { profile: 'anon', file: '/css/views/user/login.less' },
    { profile: 'anon', file: '/css/views/user/password-reset.less' },

    '/css/views/blog/entries.less',
    '/css/views/blog/entries-sidebar.less',
    '/css/views/blog/comments.less',
    { profile: registered, file: '/css/views/blog/comments.registered.less' },

    { profile: 'blogger', file: '/css/views/blogger/index.less' },
    { profile: 'blogger', file: '/css/views/blogger/blog.less' },
    { profile: 'blogger', file: '/css/views/blogger/editor.less' },
    { profile: 'blogger', file: '/css/views/blogger/review.less' },
    { profile: 'blogger', file: '/css/views/blogger/discussions.less' },
    { profile: 'blogger', file: '/css/views/blogger/users.less' }
];

data.assets.jQuery = { version: '1.9.1' };
data.assets.js = [
    resolve('/js/vendor/moment.min.js'),
    resolve('/js/vendor/mustache.js'),
    resolve('/js/vendor/jquery.color-2.1.1.js'),
    resolve('/js/vendor/jquery.ui.widget.js'),
    resolve('/js/vendor/jquery.fileupload.js'),
    resolve('/js/vendor/jquery.textarearesizer.min.js'),
    resolve('/js/vendor/ultramarked.bin.js'),
    resolve('/js/vendor/prettify.js'),
    resolve('/js/plugin/jquery.readingTime.js'),
    resolve('/js/ext/String.js'),
    resolve('/js/ext/prettify.js'),
    resolve('/js/ext/jquery.layout.js'),
    resolve('/js/ext/jquery.ui.js'), // not the well known, huge, and hideous, jQuery UI. just a few extensions
        
    '/js/nbrut/jquery.nbrut.js',
    '/js/nbrut/nbrut.core.js',
    { file: '/js/nbrut/nbrut.node.jsn', context: { config: config } },
    '/js/nbrut/nbrut.pluginFactory.js',
    '/js/nbrut/nbrut.md.js',
    '/js/nbrut/nbrut.ui.js',
    '/js/nbrut/nbrut.directives.js',
    '/js/nbrut/nbrut.templates.js',
    '/js/nbrut/nbrut.thin.js',
    '/js/nbrut/nbrut.init.js',
    resolve('/js/vendor/Markdown.Converter.js'),
    resolve('/js/vendor/Markdown.Editor.js'), // depends on NBrut

    '/js/social/index.js',
    '/js/social/twitter.js',
    '/js/social/buffer.js',
    '/js/social/pocket.js',

    '/js/hooks/thin.js',
    '/js/hooks/thin.validation.js',
    '/js/hooks/templates.js',
    '/js/hooks/templates.md.js',
    '/js/hooks/templates.metadata.js',

    '/js/directives/flash-validation.js',

    '/js/plumbing/shared.js',
    '/js/plumbing/markdown.js',
    '/js/plumbing/entries.js',
    { profile: 'anon', file: '/js/plumbing/anon.js' },
    { profile: registered, file: '/js/plumbing/registered.js' },
    { profile: 'blogger', file: '/js/plumbing/blogger.js'},

    '/js/views/shared/upload.js',
    '/js/views/shared/expand.section.js',
    '/js/views/shared/table.pager.js',

    '/js/markdown/prompts.js',
    
    { profile: 'anon', file: '/js/views/user/login.js' },
    { profile: 'anon', file: '/js/views/user/password-reset.js' },
    '/js/views/user/profile.js',
    { profile: registered, file: '/js/views/user/profile.edit.js' },

    '/js/views/blog/search.js',
    '/js/views/blog/entries.js',
    { profile: registered, file: '/js/views/blog/comments.registered.js' },
    { profile: registered, file: '/js/views/blog/comments.edit.js' },
    
    { profile: 'blogger', file: '/js/views/blogger/blog.js' },
    { profile: 'blogger', file: '/js/views/blogger/editor.js' },
    { profile: 'blogger', file: '/js/views/blogger/review.js' },
    { profile: 'blogger', file: '/js/views/blogger/discussions.js' },
    { profile: 'blogger', file: '/js/views/blogger/users.js' }
];

module.exports = builder.complete(data);