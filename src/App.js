import React from "react";
import Header from "./components/Header/header";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tinggi: "",
            berat: "",
            final: "",
            button: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleButton(e) {
        if (
            this.state.tinggi &&
            this.state.tinggi !== "" &&
            this.state.berat &&
            this.state.berat !== ""
        ) {
            this.setState({
                final: Number(this.state.berat) / Number(this.state.tinggi) ** 2
            });
        } else {
            return alert("Isi form dengan benar");
        }

        console.log(this.state.final);
    }

    render() {
        return (
            <div className="sm:w-full md:w-3/6 lg:w-3/5 m-auto">
                <Header />
                <div className="mx-5 my-5">
                    <h1>FORM</h1>
                </div>
                <div className="mx-4 mb-5">
                    <Input
                        name="tinggi"
                        type="number"
                        value={this.state.tinggi}
                        onChange={this.handleInput}
                        placeholder="Tinggi badan (meter)"
                    />
                </div>
                <div className="mx-4 mb-5">
                    <Input
                        name="berat"
                        type="number"
                        value={this.state.berat}
                        onChange={this.handleInput}
                        placeholder="Berat badan"
                    />
                </div>
                <Button onClick={this.handleButton} title="HITUNG!" />
                <div>
                    HASIL BMI : {this.state.final.toString().substring(0, 4)}
                </div>
            </div>
        );
    }
}

export default App;
