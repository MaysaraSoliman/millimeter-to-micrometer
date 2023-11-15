import { useRef, useState } from 'react';
import './App.css';
import styles from './App.module.css'

function App() {
  let [procedurePrice, setProcedurePrice] = useState(0);
  let millimeterInputRef = useRef();
  let priceInputRef = useRef();
  let ProcedureAmountInputRef = useRef();

  function handleConvertermillimeterToMicroMeterBtn() {
    handleConvertermillimeterToMicroMeterPricing()
  }

  function handleConvertermillimeterToMicroMeterPricing() {
    let microMeter = millimeterInputRef.current.value * 1000;
    let amountPriceOfMicroMeter = (priceInputRef.current.value / microMeter);
    handleConvertermillimeterToMicroMeterProcedurePrice(amountPriceOfMicroMeter);
  }

  function handleConvertermillimeterToMicroMeterProcedurePrice(mainPriceOfMicroMeter) {
    let microMeter = ProcedureAmountInputRef.current.value * 1000;
    let price = (mainPriceOfMicroMeter * microMeter);
    setProcedurePrice(price);
  }
  return (
    <>
      <div className={styles.converter}>
        <div className={styles.converterWrapper}>
          <div>
            <h2 className={styles.h2}>Millimeter to Micrometer Converter</h2>
          </div>
          <div className={styles.inputsContainer}>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="millimeterInput"
                className={styles.label}>
                Millimeter:
              </label>
              <input
                className={styles.input}
                id="millimeterInput"
                type='text'
                placeholder='Enter number of millimeter here..'
                ref={millimeterInputRef}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="priceInput"
                className={styles.label}>
                Price:
              </label>
              <input
                className={styles.input}
                id="priceInput"
                type='text'
                placeholder='Enter millimeter price here..'
                ref={priceInputRef}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label
                htmlFor="procedureInput"
                className={styles.label}>
                Procedure Amount:
              </label>
              <input
                className={styles.input}
                id="procedureInput"
                type='text'
                placeholder='Enter your millimeter used..'
                ref={ProcedureAmountInputRef}
              />
            </div>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={handleConvertermillimeterToMicroMeterBtn}>
              Calculate
            </button>
          </div>
          <div>
            <p
              className={styles.result}>
              {procedurePrice ? `${ProcedureAmountInputRef.current.value} Millimeter = ${procedurePrice} EGP` : "Millimeter"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
