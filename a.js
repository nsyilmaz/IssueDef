var data={
    desc:"Issue Definitions",
    issues:[]
};

var xss = {
    id:"xss",
    name: "xss",
    defs:{
        tr:{
            background:"bg-tr",
            recommendation:"rec-tr"
        },
        en:{
            background:"bg-en",
            recommendation:"rec-en"
        }
    }
}

var sqli = {
    id:"sqli",
    name: "SQL Injection",
    defs:{
        tr:{
            background:"Uygulama üzerindeki formlarda girdi kontrolü yapılmadığı, form girdilerinin doğrudan sql sorgusu içerisine alındığı ve sql injection zafiyetine sebep olduğu görülmüştür. Kötü niyetli kişiler Sql injection zafiyetini kullanarak sistem üzerinde sorgu çalıştırabilir, kontrolsüz biçimde verilere ulaşıp manipüle edebilir ve hatta sistemi ele geçirebilir.",
            recommendation:"Uygulama back-end üzerinde girdi kontrolü yapılması, sql sorgularında paremeterized query ile prepared statement kullanılması önerilmektedir."
        },
        en:{
            background:"bg-en",
            recommendation:"rec-en"
        }
    }
}

data.issues.push(sqli);
data.issues.push(xss);


function addTitle(issue){

    const title = document.createElement("h3");
    const t_text = document.createTextNode(issue.name);
    title.appendChild(t_text);

    const main = document.getElementById("main");
    main.appendChild(title);
}



function addIssue(issue){


    const desc = document.createElement("h5");
    const d_text = document.createTextNode("Bulgu Aciklamasi");
    desc.appendChild(d_text);

    const d_div = document.createElement("div");
    d_div.classList.add("tooltip", "w3-mobile");

        const t_tip = document.createElement("span");
        t_tip.classList.add("tooltiptext");
        t_tip.setAttribute("id", "myTooltip");
        const t_tip_text = document.createTextNode("Copy to clipboard");
        t_tip.appendChild(t_tip_text);

        const data = document.createElement("span");
        data.setAttribute("onmouseout", "outFunc()");
        data.setAttribute("id", "xss");
        data.classList.add("w3-border", "w3-light-grey", "w3-left", "w3-mobile", "issue");
        const issue_text = document.createTextNode(issue.defs.tr.background);
        data.appendChild(issue_text);

    d_div.appendChild(t_tip);
    d_div.appendChild(data);

    const main = document.getElementById("main");
    main.appendChild(desc);
    main.appendChild(d_div);
}

function addRecommend(issue){


    const rec = document.createElement("h5");
    const r_text = document.createTextNode("Cozum Onerisi");
    rec.appendChild(r_text); 

    const d_div = document.createElement("div");
    d_div.classList.add("tooltip", "w3-mobile");

        const t_tip = document.createElement("span");
        t_tip.classList.add("tooltiptext");
        t_tip.setAttribute("id", "myTooltip");
        const t_tip_text = document.createTextNode("Copy to clipboard");
        t_tip.appendChild(t_tip_text);

        const data = document.createElement("span");
        data.setAttribute("onmouseout", "outFunc()");
        data.setAttribute("id", "xss");
        data.classList.add("w3-border", "w3-light-grey", "w3-left", "w3-mobile", "issue");
        const issue_text = document.createTextNode(issue.defs.tr.recommendation);
        data.appendChild(issue_text);

    d_div.appendChild(t_tip);
    d_div.appendChild(data);

    const main = document.getElementById("main");
    main.appendChild(rec);
    main.appendChild(d_div);
}


function addDelimiter(){

    const hr = document.createElement("hr");

    const main = document.getElementById("main");
    main.appendChild(hr);
}

function hede(issue){

    addTitle(issue);

    addIssue(issue);

    addRecommend(issue);

    addDelimiter();



}

hede(data.issues[0]);
hede(data.issues[1]);
