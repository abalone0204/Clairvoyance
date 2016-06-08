import Loading from './app/components/Loading'
import fetchJob from './app/API/fetchJob.js'
import createJob from './app/API/createJob.js'
const handler = (e) => {
    const company_name = '中文'
    const job_name = 'test'
    const e04_job_no = 'e0444'

    fetchJob({
        company_name,
        job_name,
        e04_job_no
    }).then(result => {
        console.log('result=>',result);
    })
}
const App = () => (
    <div>
        <Loading/>
        <button onClick={handler}>fetch job</button>
    </div>
)
ReactDOM.render(<App/>, document.querySelector('#container'))