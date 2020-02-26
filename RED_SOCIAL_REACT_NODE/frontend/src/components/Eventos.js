import React, { Component } from 'react'
import EventosSidePanel from './EventosSidePanel'

export default class Eventos extends Component {
    render() {
        return (
            <div className="container pt-3 mt-5 mb-2">
                <main className="row w-100">
                    <div className="col-md-2 col-lg-3 col-sm-12 col-xs-12 " >
                        <section style={{ position: "fixed" }}>
                            <EventosSidePanel />
                        </section>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12 col-xs-12">
                        <section className="row" style={{ position: "relative" }}>


                        </section>
                    </div>
                </main>
            </div>

        )
    }
}
