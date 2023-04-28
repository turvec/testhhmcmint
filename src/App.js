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
    src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc721.html?contract=0x08d420f70Bf14166730ECf74e71DB8A4b2D0c943&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D"
    width="600px"
    height="600px"
    style={{maxWidth: '100%'}}
    frameborder="0"
    title="myFrame" ></iframe>
      </main>
    </div>
  );
}
