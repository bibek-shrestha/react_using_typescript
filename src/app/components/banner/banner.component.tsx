'use client';
import React, { Component } from "react";
import style from './banner.module.css'
import HouseContext from "@/app/context/house-context";
import navigation from "@/app/helpers/navigation";

interface BannerComponentProps {
    headerText: string
}
class BannerComponent extends Component<BannerComponentProps> {
    render() {
        return (
            <HouseContext.Consumer>
                {({ navigate }) => (
                    <header className="row mb-4" onClick={() => navigate(navigation.home)}>
                        <div className="col-5">
                            <img
                                src="/images/GloboLogo.png"
                                alt="Main Logo"
                                className={style.logo} />
                        </div>
                        <div className={'col-7 mt-5  ' + style.subtitle}>{this.props.headerText}</div>
                    </header>
                )}
            </HouseContext.Consumer>
        );
    }
}

export default BannerComponent;  