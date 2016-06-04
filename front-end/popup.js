class Popup extends React.Component {
    render() {
        return (
            <div>
                <h2>Popup</h2>
            </div>
        )
    }
}

ReactDOM.render(<Popup/>,
    document.querySelector('#container')
)