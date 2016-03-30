// javascript:(function(){registered=window.confirm('チュウニズムスコアツールへスコアを登録します。ログイン状態でないならキャンセルして下さい(ログインページに遷移します)');if(!registered){location.href="http://www.ginjake.net/score_update/users/login";}else{script=document.createElement('script');script.src="https://rawgit.com/cielavenir/713658ee499470b38067/raw/chunithm.js";document.documentElement.appendChild(script);}})()

// https://chunithm-net.com/ChuniNet/GetUserMusicApi
// ruby -rjson -e 'p JSON.parse(ARGF.read)["musicNameMap"].keys.map(&:to_i)'
// https://chunithm-net.com/ChuniNet/GetWorldsEndMusicApi
// ruby -rjson -e 'p JSON.parse(ARGF.read)["weMusicList"].map{|e|e["musicId"]}'

var music_list = [0, 3, 5, 6, 9, 10, 12, 14, 17, 18, 21, 23, 27, 28, 33, 38, 39, 42, 43, 41, 46, 47, 45, 51, 49, 48, 54, 53, 52, 59, 58, 57, 56, 63, 62, 60, 68, 69, 70, 71, 64, 65, 67, 76, 78, 79, 72, 73, 74, 75, 85, 84, 87, 86, 80, 83, 82, 92, 95, 94, 89, 88, 91, 90, 103, 100, 101, 98, 99, 96, 97, 110, 111, 108, 109, 107, 104, 105, 118, 117, 116, 115, 114, 113, 112, 120, 136, 138, 141, 140, 143, 142, 129, 128, 130, 133, 132, 135, 134, 152, 154, 155, 156, 157, 158, 159, 144, 145, 146, 147, 148, 149, 150, 151, 171, 170, 169, 168, 173, 163, 161, 160, 167, 166, 165, 185, 178, 179, 176, 180, 181, 205, 204, 207, 206, 200, 203, 202, 197, 199, 214, 215, 209, 235, 233, 232, 231, 226, 255, 247, 244, 243, 8024, 8009, 8001, 8017, 8006, 8000, 8002, 8007, 8012, 8016, 8018, 8022, 8031, 8030];

//below: copyright (C) @sirojake.

!function ($) {
  var apiName = "GetUserMusicDetailApi",
    url = REQUEST_URL + apiName,
    MusicObject = {},
    musicId = 0,
    key = 0;

  function sampleForm(value) {
    var form = document.createElement("form"),
      input = document.createElement("input");

    document.body.appendChild(form);
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "json");
    input.setAttribute("value", value);
    form.appendChild(input);
    form.setAttribute("action", "http://www.ginjake.net/score_update/users/upload?_SESSION_START");
    form.setAttribute("method", "post");
    form.submit();
  }

  !function music_get(id) {
    //とりあえずベタ打ち。
    if (id == music_list.length) {
      sampleForm(JSON.stringify(MusicObject));
      console.log(MusicObject);
      return;
    }
  var apiName = "GetUserMusicDetailApi";
url = REQUEST_URL + apiName;
    var userId = getCookie()["userId"],
      reqObj = {
        userId: parseInt(userId),
        musicId: parseInt(music_list[id])
      };


    $.ajax(url, {
      type: "post",
      data: JSON.stringify(reqObj),
      dataType: "json",
      scriptCharset: "UTF-8",
      timeout: 5000
    }).done(function (data) {

		
		 console.log(id)
		  setCookie("userId", data.userId);
		  for (k = 0, len = data.length; k < len; k++) {
			list = data.userMusicList;
			console.log('id: ' + id);


			MusicObject[key] = list[k];

			MusicObject[key]["musicIdLevel"] = "" + list[k].musicId + list[k].level;

			key++;
		  }
		
    }).fail(function () {
      console.warn(id + " ERROR");
      --musicId;
    }).always(function () {
music_get(++musicId);

    });
  }(musicId);

}(jQuery);