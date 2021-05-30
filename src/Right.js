import { BsThreeDots, BsSearch } from 'react-icons/bs';

export default function Right() {
    return (
        <aside className="right">
            <div className="right-inside">
                <div className="search">
                    <button><BsSearch /></button>
                    <input type="text" placeholder="Search Twitter"/>
                </div>
                <section className="one middle">
                    <h3>What's happening</h3>
                    <li><a href="">
                            <div className="head">COVID-19 . LIVE</div>
                            <p className="title">COVID-19 in India</p>
                        </a></li>
                    <li><a href="">
                            <div className="head">Treanding in India</div>
                            <p className="title">#BurjKhalifa<span className="option"><BsThreeDots/></span>
                            </p>
                            <div className="tweets">3,560 Tweets</div>
                        </a></li>
                    <li><a href="">
                            <div className="head">World news . Last night</div>
                            <p className="title">French police shoot and kill a man following a fatal knife attack near
                                Paris</p>
                            <div className="trend">Trending with #Parisbeheading, #ProphetMuhammad</div>
                        </a></li>
                    <li><a href="">
                            <div className="head">Treanding in India</div>
                            <p className="title">#SpotTheAmazonAd<span className="option"><BsThreeDots /></span></p>
                            <p className="tweets">96.8K Tweets</p>
                        </a></li>
                    <li><a href="">
                            <div className="head">Bloomberg Opinion . Last night</div>
                            <p className="title">French billionaires just had a very lucrative deacde</p>
                        </a></li>
                    <li><a className="show" href="">Show more</a></li>
                </section>

                <section className="one bottom">
                    <h3>Who to follow</h3>
                    <li><a href="">
                            <div className="id-detail">
                                <div className="profile">
                                    <img src="./img/ravin.png" height="30px" weight="30px" alt=""/>
                                </div>
                                <div className="detail">
                                    <div className="name">Ravin 💻🚀</div>
                                    <div className="userid">@ravinwashere</div>
                                </div>
                                <button>Follow</button>
                            </div>
                        </a></li>

                    <li><a href="">
                            <div className="id-detail">
                                <div className="profile">
                                    <img src="./img/kevin.png" height="30px" weight="30px" alt=""/>
                                </div>
                                <div className="detail">
                                    <div className="name">Kevin powell</div>
                                    <div className="userid">@KevinJPowell</div>
                                </div>
                                <button>Follow</button>
                            </div>
                        </a></li>

                    <li><a href="">
                            <div className="id-detail">
                                <div className="profile">
                                    <img src="./img/free.png" height="30px" weight="30px" alt=""/>
                                </div>
                                <div className="detail">
                                    <div className="name">freeCodeCamp.org</div>
                                    <div className="userid">@freeCodeCamp</div>
                                </div>
                                <button>Follow</button>
                            </div>
                        </a></li>
                    <li><a className="show" href="">Show more</a></li>
                </section>

                <div className="terms">
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                    <a href="">Ads info</a>
                    <a href="">More ...</a>
                    <p>&copy 2021 Twitter, Inc.</p>
                </div>
            </div>
        </aside>       
    )
}
