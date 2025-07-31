import '../src/css/ress.css';
import '../src/css/diagnosis.css';

//画像指定
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';


function DIAGNOSIS(){

    type QuestionId = 'q1' | 'q2' | 'q3' | 'q4' | 'q5';
    type OptionValue = 'A' | 'B';

    type SelectedOptionsState = {
        [key in QuestionId]?: OptionValue;
    };

    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsState>({});

    const handleOptionClick = (questionId: QuestionId, option: OptionValue) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [questionId]: option
        }));
    };    return(
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

            <div className='diagnosisWrap'>
                <h2>face diagnosis<br />顔診断</h2>

                <div className='question'>
                    <h3>Q1.肌の印象はどちらに近い？</h3>
                    <div className='btnWrap'>
                        <button className={selectedOptions.q1 === 'A' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q1', 'A')}>A.明るめ・透明感がある(ブルベ系)</button>
                        <button className={selectedOptions.q1 === 'B' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q1', 'B')}>B.健康的・ナチュラルなトーン(イエベ系)</button>
                    </div>
                </div>

                <div className='question'>
                    <h3>Q2.目元の形は？</h3>
                    <div className='btnWrap'>
                        <button className={selectedOptions.q2 === 'A' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q2', 'A')}>A.丸くてパッチリした目</button>
                        <button className={selectedOptions.q2 === 'B' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q2', 'B')}>B.切れ長・シャープな目</button>
                    </div>
                </div>

                <div className='question'>
                    <h3>Q3.ファッションの好みは？</h3>
                    <div className='btnWrap'>
                        <button className={selectedOptions.q3 === 'A' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q3', 'A')}>A.可愛くてフェミニン</button>
                        <button className={selectedOptions.q3 === 'B' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q3', 'B')}>B.シンプルで大人っぽい</button>
                    </div>
                </div>

                <div className='question'>
                    <h3>Q4.なりたい印象は？</h3>
                    <div className='btnWrap'>
                        <button className={selectedOptions.q4 === 'A' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q4', 'A')}>A.ふんわり・親しみやすい</button>
                        <button className={selectedOptions.q4 === 'B' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q4', 'B')}>B.上品・落ち着いた</button>
                    </div>
                </div>

                <div className='question'>
                    <h3>Q5.好きなリップカラーは？</h3>
                    <div className='btnWrap'>
                        <button className={selectedOptions.q5 === 'A' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q5', 'A')}>A.ピンク・コーラルなど優しい色</button>
                        <button className={selectedOptions.q5 === 'B' ? 'selected-option' : ''}
                            onClick={() => handleOptionClick('q5', 'B')}>B.レッド・ベーシュなど大人っぽい色</button>
                    </div>
                </div>

                <button className='resultBtn'>結果を確認する</button>
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

export default DIAGNOSIS