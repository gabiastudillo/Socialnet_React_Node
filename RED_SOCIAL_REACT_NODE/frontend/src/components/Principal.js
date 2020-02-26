import React, { Component } from 'react'

import Publication from './Publication'
import SidePanel from './SidePanel'
import Conectados from './Conectados'
import CreatePublication from './CreatePublication'
import VerHistorias from './VerHistorias'

export default class Principal extends Component {
    render() {
        return (
            <div className="container px-0 pt-3 mt-lg-0 mt-4">               
                <main className="row">
                    <div className="col-md-2 col-lg-3 col-sm-12">
                        <section className="ml-3" style={{ position: "fixed" }}>
                            <SidePanel />
                        </section>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-7 pt-lg-4 mt-2 noticias px-lg-5 mx-lg-0">
                        <section style={{ position: "relative" }}>
                            <CreatePublication />
                            <VerHistorias />
                            <Publication />
                            <Publication />
                        </section>
                    </div>
                    <div className="col offset-md-1 offset-lg-2 mt-4 pt-2 pl-lg-5" >
                        <section style={{ position: "fixed" }}>
                            <Conectados/>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
