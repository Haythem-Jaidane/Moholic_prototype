const { CryptoService } = require(["m3o/crypto"]);

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

async function getCryptocurrencyPrice() {
  const rsp = await cryptoService.price({
    symbol: "ETHUSD",
  });
  console.log(rsp);
}

getCryptocurrencyPrice();