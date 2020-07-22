import css from "styled-jsx/css";

export default css.formStyles`
.formWrapper {
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  display: flex;
}
.rangeValue {
  margin: 10px;
}

// Range input styles
input[type="range"] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ef5000;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #ad3e07;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.6px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #ef5000;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ef5000;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #ef5000;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type="range"]::-ms-fill-upper {
  background: #ef5000;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type="range"]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #ef5000;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #ef5000;
}

//button styles
button {
  margin: 0 48px 12px;
  padding: 8px 18px 7px;
  border: 1px solid black;
  border-radius: 32px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
}

button:hover {
  background-color:#13d0e9;
  border-color: #13d0e9;
}
button:active {
	position:relative;
	top:1px;
}
`;
