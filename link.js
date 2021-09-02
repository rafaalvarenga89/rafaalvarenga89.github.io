
function link(link) {

switch(link) {

case 'trybe':
    link = 'https://www.betrybe.com/';
    break
    
case 'sbc':
    link = 'https://pt.wikipedia.org/wiki/S%C3%A3o_Bernardo_do_Campo';
    break

case 'sjc':
    link = 'https://pt.wikipedia.org/wiki/S%C3%A3o_Jos%C3%A9_dos_Campos';
    break

default:
    link ='undefined';

}

return link
}


document.querySelector('.trybe').href = link('trybe');
document.querySelector('.sbc').href = link('sbc');
document.querySelector('.sjc').href = link('sjc');



