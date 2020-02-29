import React, { Component } from 'react'

import Publication from './Publication'
import SidePanel from './SidePanel'
import Conectados from './Conectados'
import CreatePublication from './CreatePublication'
import VerHistorias from './VerHistorias'
import PublicationVideo from './PublicationVideo'

export default class Principal extends Component {
    state = {
        dias: ["Día", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        meses: ["Mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        años: ['Año', "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970"],
        dia_seleccionado: '',
        mes_seleccionado: '',
        año_seleccionado: '',
        sexo_seleccionado: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div className="container px-lg-3 px-md-2 px-1">               
                <main className="row m-0 p-0 pt-lg-0 pt-md-0  mt-lg-0 mt-md-0 pt-5 mt-5">
                    <div className="col-md-2 col-lg-3 col-sm-12 mt-md-5 pt-md-3 mt-1">
                        <section className="px-3" style={{ position: "relative" }}>
                            <SidePanel />
                        </section>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-7 pt-lg-4 pt-md-4 mt-lg-4 mt-md-4 px-0 mx-0 noticias px-lg-4 mx-lg-0">
                        <section style={{ position: "relative" }}> 
                            <CreatePublication />
                            <VerHistorias/>                     
                            <Publication 
                                userImage="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                                user="Gabriela Astudillo"
                                etiqueta1="Darwin Pilaloa"
                                etiqueta2="Silvia Cabrera"
                                fechaPublicacion="1 h"
                                textPublicacion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
                                imagenPublicacion="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg"
                                />
                                <PublicationVideo 
                                userImage="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                                user="Silvia Cabrera"
                                etiqueta1=""
                                etiqueta2=""
                                fechaPublicacion="16 min"
                                textPublicacion=""
                                videoPublicacion="`https://youtu.be/kgkc8V7s-EI`"
                                />

                        </section>
                    </div>
                    <div className="col offset-md-1 offset-lg-2 mt-4 pt-4 pl-lg-5" >
                        <section style={{ position: "fixed" }}>
                            <Conectados/>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
