'use client';
import React, { Component } from "react";
import style from './banner.module.css'

interface BannerProps {
    headerText: string
}
class Banner extends Component<BannerProps> {
    render() {
        return (
            <header className="row mb-4">
                <div className="col-5">
                    <img
                        src="/images/GloboLogo.png"
                        alt="Main Logo"
                        className={style.logo} />
                </div>
                <div className={'col-7 mt-5  ' + style.subtitle}>{this.props.headerText}</div>
            </header>
        );
    }
}

export default Banner;  