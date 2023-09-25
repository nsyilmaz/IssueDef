var data={
    desc:"Issue Definitions",
    issues:[]
};



var sqli = {
    id:"sqli",
    name: "SQL Injection",
    defs:{
        tr:{
            background:"Uygulama üzerindeki aşağıda belirtilen form girdi alanlarında girdi kontrolü yapılmadığı, form girdilerinin doğrudan sql sorgusu içerisine alındığı ve sql injection zafiyetine sebep olduğu görülmüştür. Kötü niyetli kişiler Sql injection zafiyetini kullanarak sistem üzerinde sorgu çalıştırabilir, kontrolsüz biçimde verilere ulaşıp manipüle edebilir ve hatta sistemi ele geçirebilir.",
            recommendation:"Uygulama back-end üzerinde girdi kontrolü yapılması, sql sorgularında paremeterized query ile prepared statement kullanılması önerilmektedir.",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        },
        en:{
            background:"bg-en",
            recommendation:"rec-en",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        }
    }
}

var sxss = {
    id:"sxss",
    name: "Stored XSS",
    defs:{
        tr:{
            background:"Uygulama üzerindeki aşağıda belirtilen form girdi alanlarında girdi kontrolü yapılmadığı, form girdilerinin doğrudan işlendiği ve veritabanına yazıldığı ve Stored XSS zafiyetine sebep olduğu görülmüştür. Kötü niyetli kişiler Stored XSS zafiyetini kullanarak başka kullanıcılara ait oturum bilgilerini ele geçirebilirler.",
            recommendation:"Uygulama back-end üzerinde girdi kontrolü yapılması, output encoding (html encode) uygulanması önerilmektedir.",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        },
        en:{
            background:"bg-en",
            recommendation:"rec-en",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        }
    }
}

var rxss = {
    id:"rxss",
    name: "Reflected XSS",
    defs:{
        tr:{
            background:"Uygulama üzerindeki aşağıda belirtilen form girdi alanlarında girdi kontrolü yapılmadığı, form girdilerinin doğrudan işlendiği ve aynı şekilde kullanıcı arayüzüne iletildiği ve Reflected XSS zafiyetine sebep olduğu görülmüştür. Kötü niyetli kişiler Reflected XSS zafiyetini kullanarak başka kullanıcılara ait oturum bilgilerini ele geçirebilirler.",
            recommendation:"Uygulama back-end üzerinde girdi kontrolü yapılması, veriler kullanıcı arayüzüne iletilmeden önce output encoding (html encode) uygulanması önerilmektedir.",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        },
        en:{
            background:"bg-en",
            recommendation:"rec-en",
            ref:"Ref: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
        }
    }
}



data.issues.push(sqli);
data.issues.push(sxss);
data.issues.push(rxss);


function addContainer(issue){

    const c_div = document.createElement("div");
    c_div.setAttribute("id", issue.id);

    const main = document.getElementById("main");
    main.appendChild(c_div);
}


function addTitle(issue){

    const title = document.createElement("h3");
    const t_text = document.createTextNode(issue.name);
    title.appendChild(t_text);

    const main = document.getElementById(issue.id);
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
        t_tip.setAttribute("id", issue.id+"_t1");
        const t_tip_text = document.createTextNode("Copy to clipboard");
        t_tip.appendChild(t_tip_text);

        const data = document.createElement("span");
        data.setAttribute("onmouseout", "outFunc(this)");
        data.setAttribute("id", "t1");
        data.classList.add("w3-border", "w3-light-grey", "w3-left", "w3-mobile", "issue");
        const issue_text = document.createTextNode(issue.defs.tr.background);
        data.appendChild(issue_text);

    d_div.appendChild(t_tip);
    d_div.appendChild(data);

    const main = document.getElementById(issue.id);
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
        t_tip.setAttribute("id", issue.id+"_t2");
        const t_tip_text = document.createTextNode("Copy to clipboard");
        t_tip.appendChild(t_tip_text);

        const data = document.createElement("span");
        data.setAttribute("onmouseout", "outFunc(this)");
        data.setAttribute("id", "t2");
        data.classList.add("w3-border", "w3-light-grey", "w3-left", "w3-mobile", "issue");
        const issue_text = document.createTextNode(issue.defs.tr.recommendation);
        data.appendChild(issue_text);
        data.innerHTML +="<br><br>"+issue.defs.tr.ref;

    d_div.appendChild(t_tip);
    d_div.appendChild(data);

    const main = document.getElementById(issue.id);
    main.appendChild(rec);
    main.appendChild(d_div);
}


function addDelimiter(){

    const hr = document.createElement("hr");

    const main = document.getElementById("main");
    main.appendChild(hr);
}

function hede(issue){

    addContainer(issue);

    addTitle(issue);

    addIssue(issue);

    addRecommend(issue);

    addDelimiter();



}

data.issues.forEach(function (item, index) {
  hede(data.issues[index]);
});

