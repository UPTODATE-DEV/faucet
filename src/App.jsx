import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain Faucet</h1>
        <p>
          Welcome to the Ping.pub Faucet Service
        </p>
        <div className="faucet-info">
          <h2>Features</h2>
          <ul>
            <li>High Concurrency Support</li>
            <li>Robot Prevention</li>
            <li>No Deployment Needed</li>
            <li>Explorer Integration</li>
            <li>Customized Claiming Rules</li>
          </ul>
        </div>
        <div className="options">
          <div className="option">
            <h3>Faucet Service</h3>
            <p>Use our hosted faucet service with high concurrency and robot prevention</p>
          </div>
          <div className="option">
            <h3>Self-hosted</h3>
            <p>Deploy your own faucet instance</p>
            <ul>
              <li>Multi-chain support</li>
              <li>Cosmos blockchain support</li>
              <li>Evmos-like blockchain support</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App