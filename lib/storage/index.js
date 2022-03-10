import {Platform} from 'react-native';

const defaultProvider = Platform.select({
    default: () => require('./WebStorage').default,
    native: () => require('./NativeStorage').default,
})();

let selectedStorage = defaultProvider;
function setStorageProvider(provider) {
    selectedStorage = provider;
}

const Storage = (() => selectedStorage)();

export default Storage;
export {setStorageProvider};
