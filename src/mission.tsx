//css
import '../src/css/ress.css';
import '../src/css/mission.css';

//画像指定
import { Link, useNavigate } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';
import personIcon from '../public/img/person-icon.svg';
import eyeIcon from '../public/img/eye-icon.svg';
import thumbnailPink from '../public/img/thumbnail-pink.svg';
import arrowBlack from '../public/img/arrow-black.svg';
import keyIcon from '../public/img/key-icon.svg';
import mouthIcon from '../public/img/mouth-icon.svg';
import thumbnailYellow from '../public/img/thumbnail-yellow.svg';
import eyebrowIcon from '../public/img/eyebrow-icon.svg';
import thumbnailGreen from '../public/img/thumbnail-green.svg';
import thumbnailDarkpink from '../public/img/thumbnail-darkpink.svg';
import noseIcon from '../public/img/nose-icon.svg';


function MISSION(){
    const navigate = useNavigate();

    const btnClick = ()=>{
        navigate('/mission2');
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

            <button className='mode' onClick={btnClick}>ベーシックモード</button>

        <div className='eyeWrap'>
            <div className='eyeIconWrap'>
                <img src={eyeIcon} alt="目アイコン" />
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail'>
                    <img src={thumbnailPink} alt="ピンクサムネイル" />
                    <p><span>1</span>日目</p>
                </div>
                <p className='movieTitle'>アイメイク前に知っておきたいこと</p>
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
                <p className='movieTitle'>基本的なアイメイクを練習</p>
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
                <p className='movieTitle'>グラデーションで大人アイに挑戦</p>
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
                <p className='movieTitle'>リップメイク前に知っておきたいこと</p>
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
                <p className='movieTitle'>保湿について学ぼう</p>
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
                <p className='movieTitle'>基本的な塗り方をマスター</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>

        <div className='eyebrowWrap'>
            <div className='eyebrowIconWrap'>
                <img src={eyebrowIcon} alt="眉アイコン" />
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailGreen} alt="緑サムネイル" />
                    <p><span>1</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>眉メイク前に知っておきたいこと</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailGreen} alt="緑サムネイル" />
                    <p><span>2</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>ナチュラルな眉の整え方を練習</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailGreen} alt="緑サムネイル" />
                    <p><span>3</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>パウダーでの書き方をマスター</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>


        <div className='noseWrap'>
            <div className='noseIconWrap'>
                <img src={noseIcon} alt="鼻アイコン" />
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailDarkpink} alt="濃いピンクサムネイル" />
                    <p><span>1</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>ノーズメイク前に知っておきたいこと</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailDarkpink} alt="濃いピンクサムネイル" />
                    <p><span>2</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>自然なノーズシャドウの入れ方</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>

            <div className='thumbnailWrap'>
                <div className='thumbnail disabled'>
                    <img src={thumbnailDarkpink} alt="濃いピンクサムネイル" />
                    <p><span>3</span>日目</p>
                    <img src={keyIcon} alt="鍵アイコン" className='keyIcon'/>
                </div>
                <p className='movieTitle'>ハイライトで立体感アップに</p>
                <div className='timeWrap'>
                    <p>15分</p>
                    <img src={arrowBlack} alt="矢印黒" />
                </div>
            </div>
        </div>


                    <div className='scrollToTop' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Link to="/mission"><img src={arrowWhite} alt="矢印白" /></Link>
                    </div>

                    <footer>
                        <small>&copy;Makevie</small>
                    </footer>
        </div>
        </>
    )
}

export default MISSION