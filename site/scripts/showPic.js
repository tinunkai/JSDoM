function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);

    if (!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }

    return false;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    alert(body_element.childNodes.length);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
