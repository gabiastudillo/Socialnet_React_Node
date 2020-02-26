import React, { Component } from 'react'

import Publication from './Publication'
import SidePanel from './SidePanel'
import Conectados from './Conectados'
import CreatePublication from './CreatePublication'
import VerHistorias from './VerHistorias'

export default class Principal extends Component {
    render() {
        return (
            <div className="container px-2 pt-3 mt-lg-0 mt-4">               
                <main className="row m-lg-4">
                    <div className="col-md-2 col-lg-3 col-sm-12">
                        <section className="ml-0" style={{ position: "fixed" }}>
                            <SidePanel />
                        </section>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-7 pt-2 noticias">
                        <section style={{ position: "relative" }}>
                            <CreatePublication />
                            <VerHistorias />
                            <Publication />
                            <Publication />
                        </section>
                    </div>
                    <div className="col offset-md-1 offset-lg-2 pt-2" >
                        <section style={{ position: "fixed" }}>
                            <Conectados/>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
