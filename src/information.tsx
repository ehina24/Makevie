import '../src/css/ress.css';
import '../src/css/information.css';

//画像指定
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';
import newsImg1 from '../public/img/news-img1.svg';
import newsImg2 from '../public/img/news-img2.svg';



function INFORMATION(){
    return(
        <>
        <div className='contentWrap'>
            <h1><Link to="/"><img src={logo} alt="ロゴ" /></Link></h1>

            <div className='navWrap'>
                <nav>
                    <ul>
                        <li className='navTitle'><Link to="/mission">one week mission <br /><small>一週間ミッション</small></Link></li>
                        <li className='navTitle'><Link to="/information">cosmetic information <br /><small>コスメ情報</small></Link></li>
                        <li className='navTitle'><Link to="/virtual">virtual makeup <br /><small>バーチャルメイク</small></Link></li>
                        <li className='navTitle'><Link to="/diagnosis">face diagnosis <br /><small>顔診断</small></Link></li>
                        <li className='navTitle'><Link to="/mypage">my page <br /><small>マイページ</small></Link></li>
                    </ul>
                </nav>
            </div>

            <div className='infoWrap'>
                    <h2>cosmetic information <br />コスメ情報</h2>

                    <div className='narrowDownBtn'>
                        <button className='narrowDown'>絞り込み</button>
                    </div>

                    <h3>NEW</h3>
                <div className='topWrap'>
                    <div>
                        <img src={newsImg1} alt="情報1" />
                        <div className='category'>
                            <p className='date'>2025.5.21</p>
                            <p className='cosmetics lip'>リップ</p>
                        </div>
                        <p className='title'>キャンメイクから新色リップスティックが登場！</p>
                    </div>

                    <div>
                        <img src={newsImg2} alt="情報2" />
                        <div className='category'>
                            <p className='date'>2025.5.19</p>
                            <p className='cosmetics eyeshadow'>アイ</p>
                        </div>
                        <p className='title'>ちふれからブラウンのアイシャドウが登場！</p>
                    </div>
                </div>

                <div className='middleWrap'>
                    <div>
                        <img src={newsImg1} alt="情報1" />
                        <div className='category'>
                            <p className='date'>2025.5.10</p>
                            <p className='cosmetics lip'>リップ</p>
                        </div>
                        <p className='title'>キャンメイクから新色リップスティックが登場！</p>
                    </div>

                    <div>
                        <img src={newsImg1} alt="情報1" />
                        <div className='category'>
                            <p className='date'>2025.5.10</p>
                            <p className='cosmetics lip'>リップ</p>
                        </div>
                        <p className='title'>キャンメイクから新色リップスティックが登場！</p>
                    </div>

                    <div>
                        <img src={newsImg1} alt="情報1" />
                        <div className='category'>
                            <p className='date'>2025.5.10</p>
                            <p className='cosmetics lip'>リップ</p>
                        </div>
                        <p className='title'>キャンメイクから新色リップスティックが登場！</p>
                    </div>
                </div>

                <div className='bottomWrap'>
                    <div>
                        <img src={newsImg2} alt="情報2" />
                        <div className='category'>
                            <p className='date'>2025.4.21</p>
                            <p className='cosmetics eyeshadow'>アイ</p>
                        </div>
                        <p className='title'>ちふれからブラウンのアイシャドウが登場！</p>
                    </div>

                    <div>
                        <img src={newsImg2} alt="情報2" />
                        <div className='category'>
                            <p className='date'>2025.4.21</p>
                            <p className='cosmetics eyeshadow'>アイ</p>
                        </div>
                        <p className='title'>ちふれからブラウンのアイシャドウが登場！</p>
                    </div>

                    <div>
                        <img src={newsImg2} alt="情報2" />
                        <div className='category'>
                            <p className='date'>2025.4.21</p>
                            <p className='cosmetics eyeshadow'>アイ</p>
                        </div>
                        <p className='title'>ちふれからブラウンのアイシャドウが登場！</p>
                    </div>
                </div>

                <button className='narrowDown see'>これ以降の情報をみる</button>
            </div>




            <div className='scrollToTop' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={arrowWhite} alt="矢印白" />
            </div>

            <footer>
                <small>&copy;Makevie</small>
            </footer>



        </div>

        
        </>
    )
}

export default INFORMATION