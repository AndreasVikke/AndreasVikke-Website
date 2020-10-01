import React from 'react';
import WebPFallback from './modules/webp';
import ScriptTag from 'react-script-tag';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

export default function OnePage() {
    return (
        <div>
            <Profile />
            <Portfolio />
            <Hobbies />
            <GetInTouch />
            <Github />
        </div>
    )
}

const Profile = () => {
    return (
        <section id="profile">
            <div className="container">
                <WebPFallback className="picture" src="/images/av-profile.webp" fallback="/images/av-profile.png" alt="Andreas Vikke" />
                <div>
                    <h2>Hi I'm Andreas Vikke</h2>
                    <p>Over the last ten odd years I’ve had the pleasure of working with some great companies, working side by side to design and develop new apps and improve upon existing products. See for yourself!
                        <br />C#, Python, Java, HTML, CSS, React</p>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h2>Portfolio</h2>
            </div>
        </section>
    )
}

const Hobbies = () => {
    return (
        <section id="hobbies">
            <div className="container">
                <h2>What i Love Doing</h2>
                <p>Its hard to stay ahead of the game. I take every tasks seriously and do things flawlessly.</p>
                <div class="row hobbies-list">
                    <div class="col-sm">
                        <FontAwesomeIcon icon={faDatabase} size="4x" />
                        <h3>Backend / REST API</h3>
                        <p class="small-text">C#/Java REST API with clean documentation and database normalization</p>
                    </div>
                    <div class="col-sm">
                        <FontAwesomeIcon icon={faDesktop} size="4x" />
                        <h3>Web / User Interface</h3>
                        <p class="small-text">Responsive, interactive and clean websites and apps. Building and creating brands that are digital.</p>
                    </div>
                    <div class="col-sm">
                        <FontAwesomeIcon icon={faPython} size="4x" />
                        <h3>Automation / Optimization</h3>
                        <p class="small-text">Home automation's, life optimization's. Python scripts that improves the daily life.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const GetInTouch = () => {
    return (
        <section id="getintouch">
            <div className="container">
                <h1>Start your journey right now! Let me create your unique new website</h1>
            </div>
        </section>
    )
}

const Github = () => {
    return (
        <section id="github">
            <div className="container">
                <h2>Github Profile</h2>
                <div>
                    <div class="github-card" data-github="AndreasVikke" data-width="400" data-height="317" data-theme="default"></div>
                    <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/github-cards/latest/widget.js" />
                </div>
            </div>
        </section>
    )
}

