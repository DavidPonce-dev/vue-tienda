import localSvcs from './local'

let service

if (process.env.VUE_APP_SVCS == 'local'){
    service = localSvcs
}

export default service