let params = {};

const loaded = () => {
    getUrlParams();
    getDetailUser(params.id);
}

const getUrlParams = () => {
    let url = document.URL;
    let urlParts = url.split("?");
    let id = urlParts[1];
    let kv = id.split("=");
    params[kv[0]] = +kv[1];
    return params;
}

const getDetailUser = async (id) => {
    const user = await getUserById(id);
    render(user);
}

const render = (user) => {
    setDetailProperty("pId", user.id);
    setDetailProperty("pFirstname", user.firstname);
    setDetailProperty("pLastname", user.lastname);
    setDetailProperty("pUsername", user.username);
    setDetailProperty("pPassword", user.password);
    setDetailProperty("pPhone", user.phone);
    setDetailProperty("pEmail", user.email);
    setDetailChecked("pReviewer", user.isReviewer);
    setDetailChecked("pAdmin", user.isAdmin);
}

const setDetailProperty = (idAttr, val) => {
    document.getElementById(idAttr).value = val;
}

const setDetailChecked = (idAttr, bool) => {
    document.getElementById(idAttr).checked = bool;
}

const save = async () => {
    let user = getUserFromUI();
    let status = await putUser(user.id, user);
    if(status === 204)
        document.location.href = "user-list.html";

}

const getUserFromUI = () => {
    let user = {
        id: getValFromUI("pId"),
        id: getValFromUI("pFirstname"),
        id: getValFromUI("pLastname"),
        id: getValFromUI("pUsername"),
        id: getValFromUI("pPassword"),
        id: getValFromUI("pPhone"),
        id: getValFromUI("pEmail"),
        id: getValFromUI("pReviewer"),
        id: getValFromUI("pAdmin")
    }
    console.debut("getUserFromUI", user);
    return user;
}

