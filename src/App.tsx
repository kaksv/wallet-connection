
import './App.css'
// import { useAccount } from 'wagmi'
// import { Account } from './account'
// import { WalletOptions } from './wallet-options.tsx'
import { Web3Provider  } from './Web3Provider.tsx'
import { ConnectKitButton } from 'connectkit'


// function ConnectWallet() {
//   const { isConnected } = useAccount()
//   if (isConnected) return <Account />
//   return <WalletOptions />
// }

function App() {
  

  return (
    <>
    <Web3Provider>
      {/* <ConnectWallet /> */}
      <ConnectKitButton />
    </Web3Provider>  
    </>
  )
}

export default App
