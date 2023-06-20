import React, { useState, useReducer } from "react";
import { Button, CheckPerila, Phone, Environment, EnvType, AdditionalColors, CheckStairs, FiledWidth, FiledHeight, Modal, Reducer } from "./components";
import "./calculate.styles.css";

const initialState = {
  environment: "Вагонка",
  envType: "Лестница закрытого типа с забежными ступенями",
  perila: "",
  stairs: "",
  width: "200 мм",
  height: "1 200 мм",
  phone: "",
};

const Calculator = () => {
  const [modalActive, setModalActive] = useState(false);
  const [price, setPrice] = useState(0)
  const [state, dispatch] = useReducer(Reducer, initialState);

  function handleInput(e, type) {
    dispatch({
      type,
      nextName: e.target.value,
    });
  }

  const noReset = (e) => {
    e.preventDefault();
    if (
      state.perila &&
      state.stairs &&
      state.width &&
      state.height &&
      state.phone
    ) {
      let sum = 0
      if (state.environment === 'Кирпич')
        sum += 200
      else
        sum += 150
      if (state.envType === 'Лестница закрытого типа с забежными ступенями')
        sum += 300
      else
        sum += 450
      if (state.perila === 'Да')
        sum += 100
      if (state.stairs === 'Да')
        sum += 100
      setPrice(sum);
      setModalActive(true);
    }
  };

  return (
    <div className="calculator">
      <div className="container">
        <div className="calculator__title">
          <h2 className="title-calculator">Рассчитать стоимость лестницы</h2>
          <h2 className="title-backgraund">за 1 минуту</h2>
        </div>
        <div className="groups-calculator">
          <img src="/assets/catalog-stairs.png" alt="Сходи" />
          <div>
            <div className="calculator__line">
              <hr className="line-calculator" />
            </div>
            <form>
              <div className="calculator-price">
                <Environment
                  value={state.environment}
                  name='changed_Environment'
                  onChange={handleInput}
                />
                <EnvType
                  value={state.envType}
                  name='changed_EnvType'
                  onChange={handleInput}
                />
                <AdditionalColors />
                <CheckPerila
                  value={state.perila}
                  name='changed_perila'
                  onChange={handleInput}
                />
                <CheckStairs
                  value={state.stairs}
                  name='changed_stairs'
                  onChange={handleInput}
                />
                <FiledWidth
                  value={state.width}
                  name='changed_width'
                  onChange={handleInput}
                />
                <FiledHeight
                  value={state.height}
                  name='changed_height'
                  onChange={handleInput}
                />
                <div className="button-component">
                  <Phone
                    value={state.phone}
                    name='changed_phone'
                    onChange={handleInput}
                  />
                  <Button
                    onClick={noReset}
                  />
                </div>
                <Modal
                  value={price}
                  active={modalActive}
                  setActive={setModalActive}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
