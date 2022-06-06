function Delete(id) {
    alert(id);
}

function Confirm(id) {
    alert(id);
}

function Display(Class) {
    document.getElementsByClassName((Class == 'firstForm' ? 'secondForm' : 'firstForm'))[0].style.display = 'none';
    document.getElementsByClassName(Class)[0].style.display = '';
}

if(window.location.hash == '#firstForm' || window.location.hash == '#secondForm') Display(window.location.hash.replace('#', ''));