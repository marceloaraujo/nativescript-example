var frameModule = require("ui/frame");

var page;
var email;
var pass;

exports.pageLoaded = function(args) {
    page = args.object;
};

exports.logIn = function() {
    console.log("LogIn");

    email = page.getViewById("email");
    pass = page.getViewById("pass");

    if(email.text == "" ||
       pass.text == "") {
        alert("Digite um usuário/senha.");
        return;
    }

    /**
     * clearHistory: tira a tela anterior da pilha..
     * será útil para aquelas telas que vc não quer que o app volte
     * ex: tela de login
     */
    var navigationOptions= {
        moduleName: "principal/principal",
        clearHistory: true,
        context: {
            email: email.text,
            pass: pass.text
        }
    };

    var topMost = frameModule.topmost();
    topMost.navigate(navigationOptions);
}