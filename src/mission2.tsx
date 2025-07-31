import '../src/css/ress.css';
import '../src/css/mission.css';

//画像指定
import { Link,useNavigate } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';
import personIcon from '../public/img/person-icon.svg';
import eyeIcon from '../public/img/eye-icon.svg';
import thumbnailPink from '../public/img/thumbnail-pink.svg';
import arrowBlack from '../public/img/arrow-black.svg';
import keyIcon from '../public/img/key-icon.svg';
import mouthIcon from '../public/img/mouth-icon.svg';
import thumbnailYellow from '../public/img/thumbnail-yellow.svg';
import thumbnailRed from '../public/img/thumbnail-red.svg';


function MISSION2(){

    const navigate = useNavigate();

    const btnClick = ()=>{
        navigate('/mission');
    }



    return(
        <>
        <div className='contentWrap'>
            <div className='content'>
            <h1><Link to="/"><img src={logo} alt="ロゴ" /></Link></h1>

            <div className='myInformationWrap'>
                <div className='myIconWrap'>
                    <img src={personIcon} alt="マイアイコン" className='myIcon' />
                </div>
                <div className='myInformationTx'>
                    <div className='font-sm'>
                    <p>山下　澪　(15)</p>
                    <p>あなたが今学んでいるパーツ</p>
                    </div>
                    <div className='levelWrap'>
                    <p className='level'>レベル2</p>
                    <p className='parts'>アイメイク</p>
                    </div>
                </div>
            </div>
            </div>

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

            <button className='mode' onClick={btnClick}>レベルアップモード</button>

        <div className='eyeWrap'>
            <div className='eyeIconWrap'>
                <img src={eyeIcon} alt="目アイコン" />
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailPink} alt="ピンクサムネイル" />
                    <p><span>1</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>ベースメイクの極意</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailPink} alt="ピンクサムネイル" />
                    <p><span>2</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>  
                <p className='movieTitle'>ぼかしと重ねで作る立体アイ</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailPink} alt="ピンクサムネイル" />
                    <p><span>3</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>  
                <p className='movieTitle'>自然なグラデーションに挑戦</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>

        <div className='mouthWrap'>
            <div className='mouthIconWrap'>
                <img src={mouthIcon} alt="口アイコン" />
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailYellow} alt="黄色サムネイル" />
                    <p><span>1</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>リップメイクの極意</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailYellow} alt="黄色サムネイル" />
                    <p><span>2</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>仕込む保湿で差が付く唇に</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailYellow} alt="黄色サムネイル" />
                    <p><span>3</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>プロ級リップの塗り方を学ぼう</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>

        <button className='moreBtn'>もっと見る</button>

        <h2>インフルエンサー・企業紹介動画</h2>
        <div className='introductionWrap'>
            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>メイク<br />紹介</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>プロ級リップの塗り方を学ぼう</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>メイク<br />講座</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>垢抜けメイク術</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>メイク<br />紹介</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>韓国アイドル風メイク</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>

        <div className='introductionWrap'>
            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>メイク<br />紹介</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>トレンドカラーを使った春メイク</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>コスメ<br />検証</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>日焼け止め3種類ガチ比較</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailRed} alt="赤サムネイル" />
                    <p className='special'>コスメ<br />紹介</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>新作カラーを使ってメイクアップ</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>




        <div className='scrollToTop' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Link to="/mission2"><img src={arrowWhite} alt="矢印白" /></Link>
        </div>

        <footer>
            <small>&copy;Makevie</small>
        </footer>



        </div>


        </>
    )
}



export default MISSION2