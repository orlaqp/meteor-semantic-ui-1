Package.describe({
  name: 'orlaqp:semantic-ui',
  summary: ' Meteor Package for Semantic UI',
  version: '1.0.0',
  git: 'https://github.com/orlaqp/meteor-semantic-ui'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  var path = Npm.require('path');
  var assetPath = path.join('lib/semantic-ui/dist/');

  console.log(assetPath);

  var assetFiles = [
    assetPath + 'semantic.js',
    assetPath + 'semantic.css',
  ];

  api.add_files(assetFiles, 'client');

});
