
import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/quiz";
import Time from "./components/time";
import Start from "./components/start";


function App() {

  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [userName, setUserName] = useState(null);

  // DATA
  const quizData = [
    {
      id: 1,
      question: "日本人の主食と言えばなんでしょうか?",
      answers: [
        {
          text: "豆",
          correct: false,
        },
        {
          text: "米",
          correct: true,
        },
        {
          text: "パン",
          correct: false,
        },
        {
          text: "魚",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "日本の国花はどれでしょう?",
      answers: [
        {
          text: "桜",
          correct: true,
        },
        {
          text: "たんぽぽ",
          correct: false,
        },
        {
          text: "菫",
          correct: false,
        },
        {
          text: "梅",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "日本一高い山の名前はなんでしょうか?",
      answers: [
        {
          text: "御嶽山",
          correct: false,
        },
        {
          text: "エベレスト山",
          correct: false,
        },
        {
          text: "鷲羽岳",
          correct: false,
        },
        {
          text: "富士山",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "生の魚を食べる料理をなんというでしょう?",
      answers: [
        {
          text: "さしみ",
          correct: true,
        },
        {
          text: "そば",
          correct: false,
        },
        {
          text: " 天ぷら",
          correct: false,
        },
        {
          text: "おにぎり",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "ひな人形はいつ飾るでしょうか?",
      answers: [
        {
          text: "端午の節句",
          correct: false,
        },
        {
          text: "桃の節句",
          correct: true,
        },
        {
          text: "七夕",
          correct: false,
        },
        {
          text: "お正月",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "英語の「nice to meet you」は日本語に訳すと、なんでしょうか",
      answers: [
        {
          text: "はじめまして",
          correct: true,
        },
        {
          text: "おはようございます",
          correct: false,
        },
        {
          text: "おやすみなさい",
          correct: false,
        },
        {
          text: "すみません",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "1月1日から3日の間に食べる日本の料理の事をなんという?",
      answers: [
        {
          text: "お雑煮",
          correct: false,
        },
        {
          text: "おせち料理",
          correct: true,
        },
        {
          text: "精進料理",
          correct: false,
        },
        {
          text: "お弁当",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "節分で食べる有名な食べ物はどれでしょう?",
      answers: [
        {
          text: "お寿司",
          correct: false,
        },
        {
          text: "恵方巻",
          correct: true,
        },
        {
          text: "うどん",
          correct: false,
        },
        {
          text: "ラーメン",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "白と黒の石を使ったゲームはなんでしょうか?",
      answers: [
        {
          text: "将棋",
          correct: false,
        },
        {
          text: "けん玉",
          correct: false,
        },
        {
          text: "花札",
          correct: false,
        },
        {
          text: "囲碁",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "日本の国鳥はなんでしょうか?",
      answers: [
        {
          text: "タカ",
          correct: false,
        },
        {
          text: "ニワトリ",
          correct: false,
        },
        {
          text: "キジ",
          correct: true,
        },
        {
          text: "オウム",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "成人式は何歳になったことを祝うものでしょうか?",
      answers: [
        {
          text: "15歳",
          correct: false,
        },
        {
          text: "20歳",
          correct: true,
        },
        {
          text: "18歳",
          correct: false,
        },
        {
          text: "65歳",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "日本の入学式はいつ行われるでしょうか?",
      answers: [
        {
          text: "1月",
          correct: false,
        },
        {
          text: "3月",
          correct: false,
        },
        {
          text: "4月",
          correct: true,
        },
        {
          text: "9月",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "東京から大阪へ新幹線で移動するとき、窓の外に見えるのは何?",
      answers: [
        {
          text: "浅草の雷門",
          correct: false,
        },
        {
          text: "厳島神社の海中鳥居",
          correct: false,
        },
        {
          text: "姫路城",
          correct: false,
        },
        {
          text: "富士山",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "日本一多い苗字はどれでしょうか?",
      answers: [
        {
          text: "鈴木",
          correct: false,
        },
        {
          text: "佐藤",
          correct: true,
        },
        {
          text: "高橋",
          correct: false,
        },
        {
          text: "田中",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "日本一高いジェットコースターがある遊園地はどこでしょうか?",
      answers: [
        {
          text: "ディズニーランド",
          correct: false,
        },
        {
          text: "東京ジョイポリス",
          correct: false,
        },
        {
          text: "富士急ハイランド",
          correct: false,
        },
        {
          text: "ナガシマスパーランド",
          correct: true,
        },
      ],
    },
  ];

  const moneyTower = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 125000" },
    { id: 13, amount: "$ 250000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse();

  

  useEffect(()=>{
    questionNum > 1 &&
    setEarned(moneyTower.find((m) => m.id === questionNum-1).amount);
  },[moneyTower ,questionNum]);

  return (
    <div className="app">
      {userName ? (
        <>
        <div className="main">
      {stop ? (<h1 className="endTxt">{userName} earned: {earned}</h1>) :(
        <>
        <p className="userName">Hello {userName}</p>
        <div className="top">
          <div className="time"><Time setStop = {setStop} questionNum = {questionNum}/></div>
        </div>
        <div className="bottom">
          <Quiz quizData={quizData} 
                setStop={setStop} 
                questionNum = {questionNum}
                setQuestionNum={setQuestionNum} 
          />
        </div>
        </>
      )};

      </div>
      <div className="tower">
        <ul className="moneyList">
          {moneyTower.map((m) => (
            <li className={questionNum === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="number">{m.id}</span>
              <span className="amount">{m.amount}</span>
            </li>))}
        </ul>
      </div>
        </>
      ): <Start setUserName = {setUserName}/>}
      
    </div>
  );
}

export default App;
