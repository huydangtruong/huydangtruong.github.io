function SaveToLocal(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
}

function GetStoredData(name) {
    return JSON.parse(localStorage.getItem(name))
}


function PrintToTag(id, value) {
    document.getElementById(id).innerHTML = value
}
function SetAttribute(id, tag, value) {
    document.getElementById(id).setAttribute(tag, value)
}


function CheckValidEmail(x) {
    if (x.includes("@") == false || x.includes(".") == false) {
        swal("Email không hợp lệ", "Vui lòng nhập đúng định dạng email", "warning")
        return false
    }
    return true
}


function AddIcon(text) {
    icon = {
        ":))": "001.png",
        ":D": "002.png",
        "(y)": "003.png",
        ":o": "004.png",
        ":/": "005.png",
        ":(": "006.png",
        "<3": "007.png",
        "\*/": "008.png",
        "B|": "009.png"
    };

    var text2 = text

    for (i = 0; i < 9; i++) {
        var iconstr = Object.keys(icon)[i]
        var iconimg = icon[iconstr]

        htmlstr = '<img src="' + "IMG/icon/" + iconimg + '" height="24" width="24" />'
        text2 = text2.replace(iconstr, htmlstr);
    }

    return text2
}

function myMap(a,b) {
    var mapProp = {
        center: new google.maps.LatLng(a, b),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function MedalBox(imgname){
    var tag = "<img src='" + imgname +"' style='width:40px;height:40px' />"
    return tag
}

function CountDay(startDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var parts = startDate.split('/')
    const diffDays = Math.round(Math.abs((new Date() - new Date(parts[2],parts[1] -1,parts[0])) / oneDay)) - 1;

    return diffDays
}

function GetTagColor(tagid) {
    icon = {
        "tg001": "#EB593A",
        "tg002": "#3A49EB",
        "tg003": "#EBAA3A",
        "tg004": "#EB3A78",
        "tg005": "#3A57EB",
        "tg006": "#A93AEB",
        "tg007": "#EB3A48",
        "tg008": "#3AEB94",
        "tg009": "#39C83C",
        "tg010": "#33CC33",
        "tg011": "#C89A39",
        "tg012": "#3E1B69",
    };
    return icon[tagid]
}

function GetTagName(tagname) {
    icon = {
        "tg001": "Sức khoẻ",
        "tg002": "Ngoại ngữ",
        "tg003": "Ăn uống",
        "tg004": "Sách",
        "tg005": "Nghệ thuật",
        "tg006": "Trải nghiệm",
        "tg007": "Tình yêu",
        "tg008": "Gia đình",
        "tg009": "Bạn bè",
        "tg010": "Môi trường",
        "tg011": "Công nghệ",
        "tg012": "Thiên văn",
    };
    return icon[tagname]
}

function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today
}

function getRandomIMG() {

    img = ["a01.png", "a02.png", "a03.png", "a04.png", "a05.png", "a61.png", "a07.png"]

    return "IMG/wallpost/"+img[Math.floor(Math.random() * 7)]
}

function GoToProfile(iduser, UserList) {
    CurrentUserId = GetStoredData("currentUser").iduser

    if (iduser == CurrentUserId) {
        SaveToLocal("userMode", "0")
    }
    for (indx = 0; indx < Object.keys(UserList).length; indx++) {
        if (iduser == UserList[indx].iduser) {
            SaveToLocal("targetUser", UserList[indx])
        }
    }
    window.open("Profile.html", "_self")
}

function ListUserImg(TargetUsers, UserList) {
    htmlcontent = ""
    for (qq = 0; qq < TargetUsers.length; qq++) {
        if (qq == 4) { break }
        for (jj = 0; jj < Object.keys(UserList).length; jj++) {
            if (TargetUsers[qq] == UserList[jj].iduser) {
                htmlcontent += "<img src='" + UserList[jj].avatar + "' class='ListAvatar' style='z-index:"+(4-qq)+"'/>"
                break
            }
        }
    }
    htmlcontent += "<img src='IMG/system/more.png' class='ListAvatar'/>"
    return htmlcontent
}