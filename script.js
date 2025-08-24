// 仮の天気データ（API連携で置き換え可能）
const weatherData = {
  morning: { rain: 50, uv: 5 },
  afternoon: { rain: 10, uv: 8 }
};

function ponchanJudgement(time, data) {
  const speechEl = document.getElementById(`${time}Speech`);
  const noteEl = document.getElementById(`${time}Note`);

  if (data.rain >= 30) {
    speechEl.textContent = "お外びしょびしょだよ〜☔ 傘忘れないでねっ";
    noteEl.textContent = `降水確率：${data.rain}%`;
  } else if (data.uv >= 6) {
    speechEl.textContent = "おひさまギラギラ！日傘あると安心だワン🌞";
    noteEl.textContent = `UV指数：${data.uv}`;
  } else {
    speechEl.textContent = "今日はおさんぽ日和だよ〜🐾 うれしいな♪";
    noteEl.textContent = `快適な天気です`;
  }
}

ponchanJudgement("morning", weatherData.morning);
ponchanJudgement("afternoon", weatherData.afternoon);
