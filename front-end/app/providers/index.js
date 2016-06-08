import p104 from './104.js'

const rootProvider = {
    ["104"]: p104
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