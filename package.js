Package.describe({
    name: 'izzilab:heatmap',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    var both = ['client', 'server'];
    var PATH = {
        CLIENT: "src/client",
        SERVER: "src/server",
        BOTH: "src/both"
    }
    api.versionsFrom('0.9.0');
    api.use(['mongo'], both);
    api.use(['templating','ui'], 'client');

    api.addFiles('namespace.js');
    api.export('IZ_Heatmap');

    api.addFiles([
        PATH.BOTH + '/collections.js'
    ], both);
    api.addFiles([
        PATH.SERVER + '/apis.js',
    ], 'server');
    api.addFiles([
        PATH.CLIENT + '/vendor/heatmap.min.js',
        PATH.CLIENT + '/page.js',
        PATH.CLIENT + '/region.html',
        PATH.CLIENT + '/region.js',
    ], 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('izzilab:heatmap');
    api.addFiles('heatmap-tests.js');
});
