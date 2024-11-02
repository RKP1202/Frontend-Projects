import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState(0);
  const [To, setTo] = useState(0);
  const [conversionRate, setConversionRate] = useState(1);
  const [ConvertedAmt, setConvertedAmt] = useState(0);

  // extracting keys
  const currencyInfo = useCurrencyInfo(To);
  const CurrencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmt(Amount * (currencyInfo[To]));
  };

  const Swap = () => {
    setFrom(To);
    setTo(From);
    setAmount(ConvertedAmt);
    setConvertedAmt(Amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={Amount}
                onAmountChange={(amount) => setAmount(amount)}  // Update amount on input change
                currencyOptions={CurrencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}  // Correctly update `From`
                selectCurrency={From}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={Swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmt}
                currencyOptions={CurrencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}  // Correctly update `To`
                selectCurrency={To}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
