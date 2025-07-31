//import { About } from './About';
import '../src/css/ress.css';
import '../src/css/top.css';

//画像指定
import logo from '../public/img/logo.svg';
import personIcon from '../public/img/person-icon.svg';
import mainImg from '../public/img/main-img.svg';
import eyeIcon from '../public/img/eye-icon.svg';
import eyebrowIcon from '../public/img/eyebrow-icon.svg';
import noseIcon from '../public/img/nose-icon.svg';
import eyelashesIcon from '../public/img/eyelashes-icon.svg';
import faceIcon from '../public/img/face-icon.svg';
import mouthIcon from '../public/img/mouth-icon.svg';
import thumbnailPink from '../public/img/thumbnail-pink.svg';
import thumbnailYellow from '../public/img/thumbnail-yellow.svg';
import arrowBlack from '../public/img/arrow-black.svg';
import arrowWhite from '../public/img/arrow.svg';
import keyIcon from '../public/img/key-icon.svg';
import virtualMakeupImg from '../public/img/virtual-makeup-img.svg'
import questionImg from '../public/img/question-img.svg';
import resultImg from '../public/img/result-img.svg';
import virtualImg from '../public/img/virtual-img.svg';
import { Link } from 'react-router-dom';

function TOP() {
  return (
    <>
      <div className='contentWrap'>

        <div className='content'>
          <h1><Link to="/"><img src={logo} alt="ロゴ" /></Link></h1>

          <div className='myInformationWrap'>
            <div className='myInformation'><Link to="/mypage">
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
            </Link></div>
                <div className='shopLinkWrap'>
                  <a href="" className='shopLink'>ショップ</a>
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

        <div className='mainImgWrap'>
          <img src={mainImg} alt="メインイメージ" />
          <h2>"かわいい"を <br />自分の手で育てる</h2>
        </div>


        <h3>one week mission <br />一週間ミッション</h3>

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
              <div className='blur'></div>
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
              <div className='blur'></div>
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

        <div className='otherWrap'>
          <p>他にも・・</p>
          <img src={eyebrowIcon} alt="眉毛アイコン" />
          <img src={noseIcon} alt="鼻アイコン" />
          <img src={eyelashesIcon} alt="まつ毛アイコン" />
          <img src={faceIcon} alt="顔アイコン" />
        </div>

        <div className='informationWrap'>
          <h3>cosmetic information <br />コスメ情報</h3>
          <div className='lipWrap'>
            <p className='category orange'>リップ</p>
            <p className='categoryTx'>キャンメイクからピンクブラウンのティントが登場！</p>
          </div>

          <div className='eyeshadowWrap'>
            <p className='category yellow'>アイ</p>
            <p className='categoryTx'>ちふれからブラウンのアイシャドウが発売</p>
          </div>
          <Link to="/information"><button>すべての情報をみる</button></Link>
        </div>

        <div className='virtualWrap'>
          <h3>virtual makeup <br />バーチャルメイク</h3>
          <img src={virtualMakeupImg} alt="バーチャルメイク画面イメージ" />
          <Link to="/virtual"><button>試してみる</button></Link>
        </div>

        <div className='diagnosisWrap'>
          <h3>face diagnosis <br />顔診断</h3>
          <h4 className='subTitle'>HOW TO USE</h4>

          <div className='stepWrap'>
            <div className='step'>
              <h4>STEP1</h4>
              <img src={questionImg} alt="質問" />
              <p>質問に答える</p>
            </div>

            <div className='step'>
              <h4>STEP2</h4>
              <img src={resultImg} alt="結果" />
              <p>結果を確認</p>
            </div>

            <div className='step'>
              <h4>STEP3</h4>
              <img src={virtualImg} alt="バーチャル" />
              <p>バーチャルメイク<br />で試そう</p>
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

export default TOP
