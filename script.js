// Tab logic
function openTab(event, tabName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

window.onload = function () {
    document.getElementById('execute-button').onclick = function () {
        var code = document.getElementById('code-input').value;

        try {
            eval(code);
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert("f");
            }
        }
    };
};
