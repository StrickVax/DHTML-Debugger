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
        var html = document.getElementById('html-input').value;

        // HTML code
        try {
            document.getElementById('console-output').innerHTML = html;
        } catch (e) {
            if (e) {
                alert("An error has occured");
            }
        }
    };
};
