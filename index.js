const nativefier = require('nativefier').default;

options = {
    name: 'Birch Builder',
    targetUrl: 'https://unumux.github.io/birch-builder-2', 
    platform: 'darwin',
    icon: './icon.png',
    out: './dist',
    fastQuit: true,
    inject: [
        "./overrides.css"
    ],
    titleBarStyle: "hiddenInset"

}


nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});