import localSvcs from './local'

let service

if (process.env.SVC_TYPE == 'local'){
    service = localSvcs
}

export default service