import { useLocation, Link } from "react-router-dom";
import '../src/css/result.css';



function RESULT() {
    // 結果データを定義
    const results = {
        A: { 
            title: "エレガントタイプ",
            desc: `大人っぽく上品で、目鼻立ちがはっきりしており、存在感のある顔立ちです。
似合うメイクは、落ち着いたカラーで統一感を出すことがポイント。ツヤ感のあるベースメイクを取り入れ、ブラウン系のアイシャドウとワインレッドのリップで、洗練された印象を演出できます。
おすすめのブランドは、ディオールやシャネルなど、上質で上品なアイテムが揃うブランドです。`,
            image:"/img/elegantImg.jpg"
        },
        B: {
            title: "キュートタイプ",
            desc: `丸顔で柔らかな雰囲気があり、愛らしい印象を与える顔立ちです。
似合うメイクは、ピンク系でまとめたふんわりとしたスタイルがポイント。涙袋やチークで可愛らしさを強調すると、より魅力的に仕上がります。
おすすめのブランドは、キャンメイクやエチュードなど、かわいらしいアイテムが揃うブランドです。`,
            image:"/img/cuteImg.jpg"
        },
        C: {
            title:"クールタイプ",
            desc: `シャープな目元や直線的な顔立ちで、知的かつスタイリッシュな印象を与えるタイプです。
似合うメイクは、モノトーンやダークカラーを使った洗練されたスタイル。マット肌とアイライナーを取り入れることで、より引き締まった印象を演出できます。
おすすめのブランドは、M・A・CやNARSなど、クールでスタイリッシュなアイテムが揃うブランドです。`,
            image:"/img/coolImg.jpg"
        },
        D: {
            title:"ナチュラルタイプ",
            desc: `親しみやすい顔立ちで、柔らかく清潔感のある雰囲気を持つタイプです。
似合うメイクは、素肌感を大切にしたナチュラルなスタイル。ベージュやブラウンを使ってシンプルに仕上げると、より自然で好印象に。
おすすめのブランドは、セザンヌやイニスフリーなど、ナチュラルで使いやすいアイテムが揃うブランドです。`,
            image:"/img/naturalImg.jpg"
        },
    } as const;

    // results のキーを型にする
    type ResultKey = keyof typeof results;

    // location.state から type を受け取る
    const location = useLocation();
    const state = location.state as { type?: ResultKey } | null;

    // state が無いときはデフォルトで "A"
    const type: ResultKey = state?.type ?? "A";

    // 表示する結果
    const result = results[type];

console.log(location.state)

    return (
        <div className="resultWrap">
            <h2>診断結果</h2>
            <h3>{result.title}</h3>
            <img src={result.image} alt={result.title} />
            <p>{result.desc}</p>
            <Link to="/diagnosis">もう一度診断する</Link>
        </div>
    );
}

export default RESULT;
