import React from 'react'
import Routes from '../routes'
import { getCoders } from '../../services/items'


export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            coder: []
        }
    }
    async componentDidMount() {
        this.fetchCoders()
    }

    fetchCoders = async () => {
        try {
            const coders = await getCoders()
            this.setState({ coders })
        } catch (err) {
            console.error(err)
        }
    }
    addCoder = coder => this.setState({ coder: [...this.state.coders, coder] })
    setUser = user => this.setState({ user })
    clearUser = () => this.setState({ user: null })

    render() {
        const { user, coders } = this.state
        console.log(user)
        return (
            <>
                <main className="container">
                    <Routes
                        coders={coders}
                        user={user}
                        setUser={this.setUser}
                        addCoder={this.addCoder}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}

