function setBasicTheme (){
    const getTheme = localStorage.getItem('Theme')

    if (!getTheme) {
        localStorage.setItem('Theme', Theme.LIGHT)
        body.classList.add('light-theme')
    }else {
        body.classList.add('getTheme')
    }

    if(getTheme === Theme.LIGHT){
        switchBtn.checked = false;
    }else {
        switchBtn.checked = true;
    }
}

setBasicTheme()

function changeTheme (event){
    if(isOn){
        localStorage.setItem('Theme', Theme.DARK)
        body.classList.replace('light-theme', 'dark-theme')
    }else {
        body.classList.replace('dark-theme', 'light-theme')
        localStorage.setItem('Theme', Theme.LIGHT)
    }
}