function renderProfile(){
    let pageTitle = document.querySelector('head').querySelector('title');
    let favicon = document.querySelector('link#favicon');
    let avatar = document.querySelector('img#avatar');
    let name = document.querySelector('a#name');
    let infoQueries = ['followers', 'following', 'public_repos', 'public_gists', 'location']
        .map(q => document.querySelector(`#${q}`));
    let userApiReq = new XMLHttpRequest();
    userApiReq.onreadystatechange = function(ev) {
        let tg = ev.target;
        if(tg.readyState === 4 && tg.status === 200){
            let response = JSON.parse(tg.response);
            // console.log(response);
            pageTitle.innerText = `${response.login}: Home`;
            favicon.href = response.avatar_url;
            avatar.src = response.avatar_url;
            name.innerHTML = response.name;
            name.href = response.html_url;
            infoQueries.forEach(q => {
                q.innerHTML = response[q.id];
            });
        }
    };
    userApiReq.open('get', 'https://api.github.com/users/HidekiHrk', false);
    userApiReq.send();
}

$(() => {
    renderProfile();

});