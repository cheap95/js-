const quiz = [
    {
      question: '世界本塁打記録を持つ人物は誰だ？',
      answers: [
        '野村克也',
        'ベーブ・ルース',
        '王貞治',
        'バリー・ボンズ',
        '長嶋茂雄',
      ],
      correct: '王貞治'
    }, {
      question: 'NPB（日本プロ野球）の通算安打数１位は誰？',
      answers: [
        'イチロー',
        '王貞治',
        '松井秀喜',
        '松井稼頭央',
        '張本勲',
      ],
      correct: '張本勲'
      }, {
        question: 'NPB日本プロ野球）の通算打率１位は誰？',
      answers: [
        '青木宣親',
        '張本勲',
        '小笠原道大',
        '内川聖一',
        '秋山翔吾',
      ],
      correct: '青木宣親'
      },{
        question: 'NPB日本プロ野球）の通算三振数１位は誰？',
      answers: [
        '清原和博',
        '中村剛也',
        '中村紀洋',
        '池山隆寛',
        '高橋由伸',
      ],
      correct: '清原和博'
      },{
        question: 'NPB日本プロ野球）の通算試合出場数１位は誰？',
      answers: [
        '阿部慎之助',
        '金本知憲',
        '谷繁元信',
        '福留孝介',
        '坂本勇人',
      ],
      correct: '谷繁元信'
      },{
        question: 'NPB日本プロ野球）の通算登板数１位は誰？',
      answers: [
        '藤川球児',
        '五十嵐亮太',
        '下柳剛',
        '金田正一',
        '岩瀬仁紀',
      ],
      correct: '岩瀬仁紀'
      },{
        question: 'NPB日本プロ野球）の通算ホールド数１位は誰？',
      answers: [
        '山口鉄也',
        '宮西尚生',
        '増井浩俊',
        '三上朋也',
        '森唯斗',
      ],
      correct: '宮西尚生'
      },{
        question: 'NPB日本プロ野球）の通算暴投数（キャッチャー泣かせ）１位は誰？',
      answers: [
        '石井一久',
        '新垣渚',
        '村田兆治',
        '藤浪晋太郎',
        '澤村拓一',
      ],
      correct: '村田兆治'
      }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button')
let buttonLength = $button.length
const buttonIndex = $button.length

//クイズ問題文選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

//クイズの回答の表示
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert ('正解!');
    score++;
  } else {
    window.alert ('残念!');
  }
  quizIndex++;

  if(quizIndex < quiz.length){
    //問題がまだあればこちらを実行
    setupQuiz();　//クイズ表示を実行
  } else{
    //問題がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' +　score　+ '/' + quizLength + 'です！');
  }
};
let handlerIndex = 0;
  while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e)
    });
    handlerIndex++;
  }