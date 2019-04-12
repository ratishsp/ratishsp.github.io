var tab = ""
var word = ""
var total = {}
var ambi = {}
var order = {}
var correct = {}
var incorrect = {}
var mixed = {}


function word_select(name) {
    console.log(name)
    $("#" + name).addClass("sel_word");
    if (word != "") {
        $("#" + word).removeClass("sel_word");
        if (correct[word]) {
            for (key in correct[word]) {
                $("#" + correct[word][key][0]).removeClass("corr_tab");
                $("#" + correct[word][key][1]).removeClass("ambi_row");
            }
        }
        else if (incorrect[word]) {
            for (key in incorrect[word]) {
                $("#" + incorrect[word][key][0]).removeClass("incorr_tab");
                $("#" + incorrect[word][key][1]).removeClass("ambi_row");
            }
        }
        else if (mixed[word]) {
            for (key in mixed[word]) {
                $("#" + mixed[word][key][0]).removeClass("mix_tab");
                $("#" + mixed[word][key][1]).removeClass("ambi_row");
            }
        }
    }

    word = name;
    if (correct[word]) {
        for (key in correct[word]) {
            $("#" + correct[word][key][0]).addClass("corr_tab");
            $("#" + correct[word][key][1]).addClass("ambi_row");
        }
    }
    else if (incorrect[word]) {
        for (key in incorrect[word]) {
            $("#" + incorrect[word][key][0]).addClass("incorr_tab");
            $("#" + incorrect[word][key][1]).addClass("ambi_row");
        }
    }
    else if (mixed[word]) {
        for (key in mixed[word]) {
            $("#" + mixed[word][key][0]).addClass("mix_tab");
            $("#" + mixed[word][key][1]).addClass("ambi_row");
        }
    }

}


function init(corr, incorr, mix, tot, ord) {
    total = corr;

    correct = corr;
    for (key in correct) {
        $("#" + key).addClass("corr_word");
    }
    incorrect = incorr;
    for (key in incorrect) {
        $("#" + key).addClass("incorr_word");
    }
    mixed = mix;
    for (key in mixed){
        $("#" + key).addClass("mix_word");
    }
    ambi = corr;

    order = ord;

    old = order[""]
    word_select(old)
}
