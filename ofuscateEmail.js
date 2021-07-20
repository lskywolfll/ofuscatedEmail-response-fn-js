const oldEmail = "suasasdfadsfa@gmail.com";

function ofuscateEmailContent(listChars, limit, type) {
    let txt = "";

    if (type === "init") {
        for (let index = 0; index < limit; index++) {
            const character = listChars[index];

            if (index < 1 && limit == 2) {
                txt += character
            }
            else if (index < 1 && limit == 3) {
                txt += character
            }
            else if (index < 2 && limit == 4) {
                txt += character
            }
            else if (index < 3 && limit > 4) {
                txt += character
            } else {
                txt += "*"
            }
        }
    }

    if (type === "finish") {

        const listAddres = listChars.split(".");
        const initAddres = listAddres[0];
        const limitInit = initAddres.length;

        for (let index = 0; index < limitInit; index++) {
            const character = listChars[index];

            if (index < 1 && limitInit == 2) {
                txt += character
            }
            else if (index < 1 && limitInit == 3) {
                txt += character
            }
            else if (index < 2 && limitInit == 4) {
                txt += character
            } else if (index < 2 && limitInit > 4) {
                txt += character
            } else {
                txt += "*"
            }
        }

        txt += ".";
        txt += listAddres[1];
    }

    return txt;

}

function ofuscateEmail(emailContent) {
    const username = emailContent.split("@")[0];
    const serverEmail = emailContent.split("@")[1];
    let txtInit = ofuscateEmailContent(username, username.length, "init");
    let txtFinish = ofuscateEmailContent(serverEmail, serverEmail.length, "finish");
    const txt = `${txtInit}@${txtFinish}`;

    return txt;
}

console.log(ofuscateEmail(oldEmail))