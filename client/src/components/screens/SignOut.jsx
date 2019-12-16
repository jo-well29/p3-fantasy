import { Component } from 'react'
import { signOut } from '../../services/auth'

class SignOut extends Component {
  async componentDidMount() {
    await signOut()
    this.props.history.push('/sign-in')
  }

  render() {
    return ''
  }
}

export default SignOut