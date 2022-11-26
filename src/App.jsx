import React, { Component } from 'react'
import "./App.css"

class Wine extends Component {
    state = {
        ad: "",
        soyad: "",
        unvan: "",
        isValid: true,
        className: "visible"
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
    };
    fillInput = (e) => {
        this.setState({ [e.target.className]: e.target.value })
        if (this.state.ad.length > 5 && this.state.soyad.length > 5 && this.state.unvan.length > 5) {
            this.setState({ isValid: false })
            this.setState({ className: "invisible" })
        } else {
            this.setState({ isValid: true })
            this.setState({ className: "visible" })
        }
    }
    render() {

        return (
            <>
                <div className="app">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="ad"> Ad:<input className='ad' type="text" onChange={this.fillInput} /></label>
                        <br />
                        <label htmlFor="soyad">Soyad: <input className='soyad' type="text" onChange={this.fillInput} /></label>
                        <br />
                        <label htmlFor="unvan">Unvan:<input className='unvan' type="text" onChange={this.fillInput} /></label>
                        <br />
                        <p className={this.state.className}>Inputlar 5 elementden cox olmalidir!!!</p>
                        <button type="submit" disabled={this.state.isValid}> Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Wine