import React, { useEffect, useState } from 'react';
import "./covid.css"

const Covid = () => {

    const [theme, setTheme] = useState("main-body");
    const toggleTheme = () => {
        if (theme === "main-body") {
            setTheme("dark-theme")
        } else {
            setTheme("main-body")
        }
    }
    useEffect(() => {
        document.body.className = theme;

    }, [theme])

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[9]
            );
            setData(actualData.statewise[9])
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);


    return (

        <div className='container'>


            <div className='header'>Covid-19 Tracker</div>
            <section>
                <ul>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>OUR</span> COUNTRY</p>
                                <p className='card-total card-small'>INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>TOTAL</span> RECOVERED</p>
                                <p className='card-total card-small'>{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>TOTAL</span> CONFIRMED</p>
                                <p className='card-total card-small'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>TOTAL</span> DEATHS</p>
                                <p className='card-total card-small'>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>TOTAL</span> ACTIVE</p>
                                <p className='card-total card-small'>{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className="card-main">
                            <div className="card-inner">
                                <p className='card-name'><span>LAST</span> UPDATED</p>
                                <p className='card-total card-small'>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div>
                <button
                    className='btn'
                    onClick={() => toggleTheme()}>
                    LIGHT / DARK

                </button>
            </div>

        </div>
    )
}

export default Covid