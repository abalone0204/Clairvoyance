import p104 from './104.js'
import p1111 from './1111.js'
import p518 from './518.js'

const rootProvider = {
    ["104"]: p104,
    ["1111"]: p1111,
    ["518"]: p518
}

export function getProviderName() {
    const matcher = location.host.match(/([^w\.]+)\.com/)
    if (matcher) {
        return matcher[1]
    }
}

export function getJobQuery(provider) {
    const jobQuery = {}
    
    Object.keys(provider).forEach(key => {
        jobQuery[key.substring(4)] = provider[key]()
    })

    return jobQuery
}

export default function getProvider () {
    return rootProvider[getProviderName()]
}