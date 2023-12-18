


// 時給表示するやつ
let money;
document.getElementById("money").oninput = function () {
  money = document.getElementById("money").value;
  document.getElementById("money_js").value = money;
};
// 時間設定するやつ




// Aシフト
let minutesDifferenceA
function timeA() {
  const time1 = document.getElementById("time1").value;
  const time2 = document.getElementById("time2").value;

  const startTime = new Date("2000-01-01 " + time1);
  const endTime = new Date("2000-01-01 " + time2);

  // 時間の差をミリ秒で取得
  const timeDifference = endTime - startTime;

  // ミリ秒を分に変換
   minutesDifferenceA = timeDifference / (1000 * 60);

  
   document.getElementsByClassName(".shiftA").value = minutesDifferenceA
  // 各セレクトボックスのラスがshiftAである要素に値を設定
  document.querySelectorAll(".shiftA").forEach(function (element) {
    element.innerText = `Aシフト${minutesDifferenceA} 分`;
    element.value = minutesDifferenceA;

  });

}
// Bシフト
let minutesDifferenceB;
function timeB() {
  const time3 = document.getElementById("time3").value;
  const time4 = document.getElementById("time4").value;

  const startTime = new Date("2000-01-01 " + time3);
  const endTime = new Date("2000-01-01 " + time4);

  // 時間の差をミリ秒で取得
  const timeDifference = endTime - startTime;

  // ミリ秒を分に変換
  minutesDifferenceB = timeDifference / (1000 * 60);

  // 各セレクトボックスのクラスがshiftAである要素に値を設定
  document.querySelectorAll(".shiftB").forEach(function (element) {
    element.innerText = `Bシフト${minutesDifferenceB} 分`;
  element.value = minutesDifferenceB

  });
}

// Cシフト
let minutesDifferenceC
function timeC() {
  const time5 = document.getElementById("time5").value;
  const time6 = document.getElementById("time6").value;

  const startTime = new Date("2000-01-01 " + time5);
  const endTime = new Date("2000-01-01 " + time6);

  // 時間の差をミリ秒で取得
  const timeDifference = endTime - startTime;

  // ミリ秒を分に変換
 minutesDifferenceC = timeDifference / (1000 * 60);

  // 各セレクトボックスのクラスがshiftAである要素に値を設定
  document.querySelectorAll(".shiftC").forEach(function (element) {
    element.innerText = `Cシフト${minutesDifferenceC} 分`;
element.value = minutesDifferenceC
  });
}



// 合計時間出すやつ
let totalTime = 0;
function updateTotalTime() {

  // 各セレクトボックスの値を取得し、合計時間を計算
  for (let i = 1; i <= 31; i++) {
    const shiftValue = document.getElementById('day' + i).value;
    totalTime += Number(shiftValue)
  }
 // 合計時間を表示
  totalTime_hour = Math.floor((totalTime / 60)*100)/100;
  document.getElementById('time_sum').value = totalTime_hour;
  
  console.log(totalTime_hour)
}
// 合計時間出すやつ




// リセットするやつ
function reset() {
  totalTime = 0;
  document.getElementById('time_sum').value = totalTime;
}
// リセットするやつ




// 給料出すやつ
function funk_money() {
  let kyuuryou =  Math.floor(Number(money / 60) * Number(totalTime));
 
  document.getElementById('kyuuryou').value = `¥ ${kyuuryou.toLocaleString()}`;
}
// 給料出すやつ




// jquery
$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});

