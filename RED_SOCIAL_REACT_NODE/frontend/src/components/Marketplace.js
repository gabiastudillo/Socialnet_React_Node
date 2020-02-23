import React, { Component } from 'react'
import MarketplaceSidePanel from './MarketplaceSidePanel'
import MarketplaceItem from './MarketplaceItem'

export default class Marketplace extends Component {
    render() {
        return (
            <div className="container pt-3 mt-5 mb-2">
                <main className="row w-100">
                    <div className="col-md-2 col-lg-3 col-sm-12 col-xs-12 " >
                        <section style={{ position: "fixed" }}>
                            <MarketplaceSidePanel/>
                        </section>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12 col-xs-12">
                        <div className="row">

                            <div className="col-4" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>
                            <div className="col-4" >
                                <MarketplaceItem />
                            </div>


                        </div>
                    </div>
                </main>
            </div>


        )
    }
}
