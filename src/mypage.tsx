import '../src/css/ress.css';
import '../src/css/mypage.css';

//画像指定
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';
import personIcon from '../public/img/person-icon.svg';
import noteIcon from '../public/img/note-icon.svg';
import cosmeIcon from '../public/img/cosme-icon.svg';
import heartIcon from '../public/img/heart-icon.svg';
import eyeIcon from '../public/img/eye-icon.svg';
import thumbnaiTwodays from '../public/img/thumbnail-twodays.svg';
import graph from '../public/img/graph.svg';



function MYPAGE(){
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

        <div className='mypageWrap'>
            <div className='top'>
                <div className='myIconWrap'>
                    <img src={personIcon} alt="マイアイコン" className='myIcon big'  />
                </div>

                <div className='profileWrap'>
                    <p><span>山下　澪</span>(15)</p>

                    <div className='profileItemWrap'>
                        <div className='upperPart'>
                            <div className='profileItem'>
                                <img src={noteIcon} alt="ノートアイコン" />
                                <p>メイク日記</p>
                            </div>

                            <div className='profileItem'>
                                <img src={cosmeIcon} alt="コスメアイコン" />
                                <p>コスメ・用具辞典</p>
                            </div>
                        </div>
                        <div className='profileItem'>
                            <img src={heartIcon} alt="ハートアイコン" />
                            <p>いいねしたコスメ</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>一週間ミッションの達成度</h2>
            <div className='oneweekMission'>
                <img src={graph} alt="グラフ" className='graph'/>
                <div className='oneweekMissionContent'>
                    <p className='learnParts'>今学んでいるパーツ</p>
                    <div className='partsWrap'>
                        <p className='level'>レベル2</p>
                        <p className='makeup'>アイメイク</p>
                        <img src={eyeIcon} alt="目アイコン" />
                    </div>
                    <div className='movieWrap'>
                        <p className='nextMovie'>次の動画は・・・</p>
                        <img src={thumbnaiTwodays} alt="２日目サムネイル" />
                    </div>
                </div>
            </div>
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

export default MYPAGE