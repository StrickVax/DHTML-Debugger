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
    if (event)
        event.currentTarget.className += ' active';
}

window.onload = function () {
    openTab(null, 'HTML');
    document.getElementById('startup-tab').className += ' active';

    // Execute Button
    document.getElementById('execute-button').onclick = function () {
        var html = document.getElementById('html-input').value;
        var css = document.getElementById('css-input').value;

        // HTML code
        try {
            var consoleOutput = document.getElementById('console-output').contentWindow.document;
            consoleOutput.open();
            consoleOutput.write('<style>' + css + '</style>' + html);

        } catch (e) {
            alert("An error has occured");
        }

    };

    var htmlEditor = CodeMirror(document.getElementById("html-input"), {
        mode: "htmlmixed",
        lineNumbers: true
    });

    document.getElementById('execute-button').onclick = function () {
        var consoleOutput = document.getElementById('console-output').contentWindow.document;
        consoleOutput.open();
        consoleOutput.write(htmlEditor.getValue());
    }

    document.getElementById('theme-toggle').onclick = function () {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        let newIcon = newTheme === 'dark' ? 'moon.svg' : 'sun.svg';

        document.documentElement.setAttribute('data-theme', newTheme);
        document.getElementById("theme-icon").setAttribute('src', newIcon);
    }

};
