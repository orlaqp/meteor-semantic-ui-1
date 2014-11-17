Package.describe({
  name: 'orlaqp:semantic-ui',
  summary: ' Meteor Package for Semantic UI',
  version: '1.0.1',
  git: 'https://github.com/orlaqp/meteor-semantic-ui'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  var path = Npm.require('path');
  var assetPath = path.join('lib/semantic-ui/dist/');
  var fontsPath = path.join(assetPath, 'themes/default/assets/fonts/');
  var imagesPath = path.join(assetPath, 'themes/default/assets/images/');

  console.log(assetPath);

  var assetFiles = [
    assetPath + 'semantic.js',
    assetPath + 'semantic.css',
    // fonts/icons
    fontsPath + 'icons.eot',
    assetPath + 'icons.otf',
    assetPath + 'icons.svg',
    assetPath + 'icons.ttf',
    assetPath + 'icons.woff',
    // images
    imagesPath + 'flags.png',
  ];

  api.add_files(assetFiles, 'client');

});
