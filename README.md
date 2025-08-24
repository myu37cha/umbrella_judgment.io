# umbrella_judgment
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>わんこの傘判定アプリ</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>🐶 わんこの傘判定アプリ</h1>

  <div class="forecast">
    <div class="box" id="morningBox">
      <h2>午前の天気</h2>
      <img src="ponchan_morning.png" alt="ぽんちゃん午前" class="ponchan">
      <div class="speech-bubble" id="morningSpeech">判定中だワン…</div>
      <div class="note" id="morningNote"></div>
    </div>

    <div class="box" id="afternoonBox">
      <h2>午後の天気</h2>
      <img src="ponchan_afternoon.png" alt="ぽんちゃん午後" class="ponchan">
      <div class="speech-bubble" id="afternoonSpeech">判定中だワン…</div>
      <div class="note" id="afternoonNote"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
