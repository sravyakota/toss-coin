// Write your code here
import {Component} from 'react'

import './index.css'

const a = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

const h = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, coin: h}

  coinTossButton = () => {
    const r = Math.floor(Math.random() * a.length)
    console.log(r)
    this.setState({coin: a[r]})
    if (r === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState(prevState => ({total: prevState.total + 1}))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState(prevState => ({total: prevState.total + 1}))
    }
  }

  render() {
    const {total, heads, tails, coin} = this.state

    return (
      <div className="bg1">
        <div className="bg2">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={coin}
            alt="toss result"
            className="im"
            onChange={this.coinChanging}
          />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.coinTossButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="resultsContainer">
            <p className="para2">Total:{total}</p>
            <p className="para2">Heads:{heads}</p>
            <p className="para2">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
