import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://hhmc.io/">HHMC MINTING PAGE</a>!
        </h1>

        <p className="description">
          Get started below
        </p>

        <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmbqEq5EQLx1aPurZFreM246fsKeawfpKDT8uzguAHAikr/erc721.html?contract=0x967D615057A0f30884dd13e68e2e22B47AEa7033&chainId=80001"
    width="600px"
    height="600px"
    style={{maxWidth: '100%'}}
    frameborder="0"
    title="myFrame" ></iframe>
      </main>
    </div>
  );
}
