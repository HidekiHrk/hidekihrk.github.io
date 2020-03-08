function renderProfile(){
    let pageTitle = document.querySelector('head').querySelector('title');
    let propertyTitle = document.querySelector('head').querySelector('#propertyTitle');
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
            propertyTitle.content = pageTitle.innerText;
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