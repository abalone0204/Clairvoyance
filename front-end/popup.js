class Popup extends React.Component {
    render() {
        return (
            <div>
                <h2>Popup</h2>
                <a href="" onClick={()=>chrome.tabs.create({'url': "/options.html" } )}>選項</a>
            </div>
        )
    }
}

ReactDOM.render(<Popup/>,
    document.querySelector('#container')
)