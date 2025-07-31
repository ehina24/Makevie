//css
import '../src/css/ress.css';
import '../src/css/virtual.css';

//画像指定
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';


function VIRTUAL(){
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

            <div className='makeupWrap'>
                <h2>Virtual Makeup</h2>

                <ul>
                    <li><Link to="/virtual2">顔診断の結果を試す</Link></li>
                    <li><Link to="/virtual2">欲しいコスメを試す</Link></li>
                </ul>
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

export default VIRTUAL