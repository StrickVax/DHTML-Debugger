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

    // Tab logic
    

}