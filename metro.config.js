const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg', 'svg');

config.resolver.sourceExts.push('js', 'jsx', 'json', 'ts', 'tsx', 'cjs');

module.exports = config;
