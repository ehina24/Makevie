//css
import '../src/css/ress.css';
import '../src/css/virtual.css';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import logo from '../public/img/logo.svg';
import arrowWhite from '../public/img/arrow.svg';

function VIRTUAL2() {
    const [mode, setMode] = useState<'select' | 'camera' | 'result'>('select');
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [detections, setDetections] = useState<faceapi.FaceLandmarks68 | null>(null);
    const webcamRef = useRef<Webcam>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
    const loadModels = async () => {
    const MODEL_URL = '/models';
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
        ]);
    };
    loadModels();
    }, []);

    useEffect(() => {
        const detectFace = async () => {
        if (!capturedImage || !imageRef.current) {
        setDetections(null);
        return;
        }
        const detection = await faceapi
        .detectSingleFace(imageRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks(true);
        if (detection?.landmarks) {
        setDetections(detection.landmarks);
        } else {
        setDetections(null);
        }
    };
    detectFace();
    }, [capturedImage]);

    const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (typeof imageSrc === 'string') {
        setCapturedImage(imageSrc);
        setMode('result');
    }
    }, []);

    const getMouthCoords = () => {
    if (!detections) return null;
    const mouth = detections.getMouth();
    const xs = mouth.map(p => p.x);
    const ys = mouth.map(p => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    return {
        x: (minX + maxX) / 2,
        y: (minY + maxY) / 2,
        width: maxX - minX,
        height: maxY - minY,
    };
    };

    const getLeftCheekCoords = () => {
    if (!detections) return null;
    const nose = detections.getNose();
    const jaw = detections.getJawOutline();
    return {
        x: (nose[0].x + jaw[3].x) / 2,
        y: (nose[0].y + jaw[3].y) / 2,
    };
    };

    const getRightCheekCoords = () => {
    if (!detections) return null;
    const nose = detections.getNose();
    const jaw = detections.getJawOutline();
    return {
        x: (nose[6].x + jaw[13].x) / 2,
        y: (nose[6].y + jaw[13].y) / 2,
    };
    };

    return (
    <>
        <div className='contentWrap'>
            <h1>
            <Link to='/'>
                <img src={logo} alt='ロゴ' />
            </Link>
            </h1>

            <div className='navWrap'>
            <nav>
                <ul>
                <li className='navTitle'>
                    <Link to='/mission'>
                    one week mission <br />
                    <small>一週間ミッション</small>
                    </Link>
                </li>
                <li className='navTitle'>
                    <Link to='/information'>
                    cosmetic information <br />
                    <small>コスメ情報</small>
                    </Link>
                </li>
                <li className='navTitle'>
                    <Link to='/virtual'>
                    virtual makeup <br />
                    <small>バーチャルメイク</small>
                    </Link>
                </li>
                <li className='navTitle'>
                    <Link to='/diagnosis'>
                    face diagnosis <br />
                    <small>顔診断</small>
                    </Link>
                </li>
                <li className='navTitle'>
                    <Link to='/mypage'>
                    my page <br />
                    <small>マイページ</small>
                    </Link>
                </li>
                </ul>
            </nav>
            </div>

            <div className='container'>
            <Link to='/virtual'>
                <img src={arrowWhite} alt='矢印白' className='backArrow' />
            </Link>
            <div className='makeupWrap'>
                {mode === 'select' && (
                <>
                    <h2>Virtual Makeup</h2>

                    <ul>
                    <li>
                        <button onClick={() => setMode('camera')}>写真を撮る</button>
                    </li>
                    <li>
                        <button>撮った写真を使う</button>
                    </li>
                    <li>
                        <button>モデル画像を使う</button>
                    </li>
                    </ul>
                </>
                )}

                {mode === 'camera' && (
                <>
                    <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    videoConstraints={{ facingMode: 'user' }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                    />
                    <div
                    style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                        display: 'flex',
                        gap: '16px',
                    }}
                    >
                    <button onClick={capture}>撮影</button>
                    <button onClick={() => setMode('select')}>戻る</button>
                    </div>
                </>
                )}

                {mode === 'result' && capturedImage && (
                <div
                    style={{
                    position: 'relative',
                    maxWidth: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    }}
                >
                    <img
                    ref={imageRef}
                    src={capturedImage}
                    alt='撮影画像'
                    style={{ display: 'none', maxWidth: '100%' }}
                    />
                    <img
                    src={capturedImage}
                    alt='撮影画像'
                    style={{ maxWidth: '100%', display: 'block' }}
                    />

                    {detections && (() => {
                    const mouth = getMouthCoords();
                    if (!mouth) return null;
                    return (
                        <div
                        style={{
                            position: 'absolute',
                            left: mouth.x,
                            top: mouth.y,
                            width: mouth.width * 1.3,
                            height: mouth.height * 0.8,
                            backgroundColor: 'rgba(255, 0, 0, 0.9)',
                            borderRadius: '60% / 50%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                        }}
                        />
                    );
                    })()}

                    {detections && (() => {
                    const leftCheek = getLeftCheekCoords();
                    if (!leftCheek) return null;
                    return (
                        <div
                        style={{
                            position: 'absolute',
                            left: leftCheek.x,
                            top: leftCheek.y,
                            width: 70,
                            height: 70,
                            backgroundColor: 'rgba(255, 192, 203, 0.8)',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                        }}
                        />
                    );
                    })()}

                    {detections && (() => {
                    const rightCheek = getRightCheekCoords();
                    if (!rightCheek) return null;
                    return (
                        <div
                        style={{
                            position: 'absolute',
                            left: rightCheek.x,
                            top: rightCheek.y,
                            width: 70,
                            height: 70,
                            backgroundColor: 'rgba(255, 192, 203, 0.8)',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                        }}
                        />
                    );
                    })()}

                    <div
                    style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                        display: 'flex',
                        gap: '16px',
                    }}
                    >
                    <button onClick={() => setMode('camera')}>もう一度撮影</button>
                    <button onClick={() => setMode('select')}>最初に戻る</button>
                    </div>
                </div>
                )}
            </div>

            <div
                className='scrollToTop'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <Link to='/virtual2'>
                <img src={arrowWhite} alt='矢印白' />
                </Link>
            </div>
            </div>

            <footer>
            <small>&copy;Makevie</small>
            </footer>
        </div>
    </>
    );
}

export default VIRTUAL2;
