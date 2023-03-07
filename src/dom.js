import {mapfunction} from  './map.js';
import randomise from './randomize.js';

export default function mainDom(){

    let content = document.querySelector('#content');

    let turnShower = document.createElement('div');
    turnShower.classList.add('turnShower', 'hide');
    content.appendChild(turnShower);

    let h2 = document.createElement('h2');
    h2.innerHTML = 'Your Turn';
    h2.classList.add('your');
    turnShower.appendChild(h2);

    h2 = document.createElement('h2');
    h2.innerHTML = 'Opponent Turn';
    h2.classList.add('opposition', 'hide');
    turnShower.appendChild(h2);

    let mapMain = document.createElement('div');
    mapMain.setAttribute('id', 'map');
    mapMain.classList.add('flex');
    content.appendChild(mapMain);

    // map for adding ship

    let mapForAddingShip = document.createElement('div');
    mapForAddingShip.classList.add('mapForAddingShipContainer');
    mapMain.appendChild(mapForAddingShip);

    let shipMap = document.createElement('div');
    shipMap.setAttribute('id', 'mapForAddingShip');
    mapForAddingShip.appendChild(shipMap);
    shipMap.classList.add('grid');
    mapfunction(shipMap);
    
    let player = document.createElement('h2');
    player.classList.add('players', 'hide');
    player.innerHTML = 'Your Board';
    mapForAddingShip.appendChild(player);

    let err = document.createElement('h2');
    err.classList.add('err');
    err.innerHTML = '';
    mapForAddingShip.appendChild(err);

    // ship type
    let typesOfShip = document.createElement('div');
    typesOfShip.classList.add('typesOfShip');
    mapMain.appendChild(typesOfShip);

    let h1 = document.createElement('h1');
    h1.classList.add('ShipTypeName');
    h1.innerHTML = 'Arrange Your Ship';
    typesOfShip.appendChild(h1);


    // horizental

    let horizental = document.createElement('div');
    horizental.classList.add('horizental', 'horz');
    typesOfShip.appendChild(horizental);

    let shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer', 'flex');
    horizental.appendChild(shipTypeContainer);
    
    let h3 = document.createElement('h2');
    h3.innerHTML = '1x';
    h3.classList.add('sizeFourShipCount');
    shipTypeContainer.appendChild(h3);

    let div = document.createElement('div');
    div.classList.add('sizeFourShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(4, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer', 'flex');
    horizental.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '2x';
    h3.classList.add('sizeThreeShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeThreeShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(3, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer', 'flex');
    horizental.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '3x';
    h3.classList.add('sizeTwoShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeTwoShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(2, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer', 'flex');
    horizental.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '4x';
    h3.classList.add('sizeOneShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeOneShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(1, div);

    // vertical

    let vertical = document.createElement('div');
    vertical.classList.add('vertical', 'flex',  'vert');
    typesOfShip.appendChild(vertical);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer');
    vertical.appendChild(shipTypeContainer);
    
    h3 = document.createElement('h2');
    h3.innerHTML = '1x';
    h3.classList.add('sizeFourShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeFourShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(4, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer');
    vertical.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '2x';
    h3.classList.add('sizeThreeShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeThreeShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(3, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer');
    vertical.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '3x';
    h3.classList.add('sizeTwoShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeTwoShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(2, div);

    shipTypeContainer = document.createElement('div');
    shipTypeContainer.classList.add('shipTypeContainer');
    vertical.appendChild(shipTypeContainer);

    h3 = document.createElement('h2');
    h3.innerHTML = '4x';
    h3.classList.add('sizeOneShipCount');
    shipTypeContainer.appendChild(h3);

    div = document.createElement('div');
    div.classList.add('sizeOneShip',"dragable");
    shipTypeContainer.appendChild(div);
    div.classList.add('grid');
    ship(1, div);

    // buttons
    div = document.createElement('div');
    div.classList.add('buttons', 'flex');
    typesOfShip.appendChild(div);

    let button = document.createElement('button');
    button.classList.add('start');
    button.innerHTML = 'Start';
    div.appendChild(button);
    button.addEventListener('click', function(){

        let a1 = document.querySelector('.sizeOneShipCount').innerHTML;
        let a2 = document.querySelector('.sizeTwoShipCount').innerHTML;
        let a3 = document.querySelector('.sizeThreeShipCount').innerHTML;
        let a4 = document.querySelector('.sizeFourShipCount').innerHTML;
        
        if(a1 === '0x' && a2 === '0x' && a3 === '0x' && a4 === '0x'){

            document.querySelector('.turnShower').classList.remove('hide');
            document.querySelector('.right').classList.remove('hide');
            document.querySelector('.typesOfShip').classList.add('hide');
            document.querySelector('.mapForAddingShipContainer .players').classList.remove('hide');
            document.querySelector('.mapForAddingShipContainer .players').classList.add('pseudoColor');
            document.querySelector('#mapForAddingShip').classList.add('pseudo', 'pseudoColor', 'started');
            document.querySelector('#mapPlayer2').classList.add( 'started');

        }else{

            err.innerHTML = 'Add all Ship.....';
            setTimeout(()=>err.innerHTML = '', 2000);

        }

    })

    button = document.createElement('button');
    button.classList.add('reset');
    button.innerHTML = 'Reset';
    div.appendChild(button);
    button.addEventListener('click',function(){

        window.location.reload();

    });

    button = document.createElement('button');
    button.classList.add('randomise');
    button.innerHTML = 'Randomise';

    button.addEventListener('click', function(){

        if(JSON.parse(localStorage.getItem('load')) === true){

            localStorage.setItem('load',false);
            window.location.reload();

        }else{

            document.querySelectorAll('.sizeFourShipCount').forEach(value=>{
    
                value.innerHTML = '1x';
        
            });
            document.querySelectorAll('.sizeThreeShipCount').forEach(value=>{
        
                value.innerHTML = '2x';
        
            }); 
            document.querySelectorAll('.sizeTwoShipCount').forEach(value=>{
        
                value.innerHTML = '3x';
        
            });
            document.querySelectorAll('.sizeOneShipCount').forEach(value=>{
        
                value.innerHTML = '4x';
                
            });
            random(document.querySelector('#mapForAddingShip'));
            localStorage.setItem('load',true);

        }

    })
    div.appendChild(button);

    drag();

    // right
    let right = document.createElement('div');
    right.classList.add('right', 'hide');
    mapMain.appendChild(right);

    let map = document.createElement('div');
    map.setAttribute('id', 'mapPlayer2');
    right.appendChild(map);
    map.classList.add('grid');
    mapfunction(map);

    h2 = document.createElement('h2');
    h2.classList.add('players');
    h2.innerHTML = 'Opponent Board';
    right.appendChild(h2);

}

function random(map){

    randomise(map, document.querySelector('.sizeOneShipCount'), 0,document.querySelector('.sizeOneShip'));
    randomise(map, document.querySelector('.sizeTwoShipCount'), 1, document.querySelector('.sizeTwoShip'));
    randomise(map, document.querySelector('.sizeThreeShipCount'), 2, document.querySelector('.sizeThreeShip'));
    randomise(map, document.querySelector('.sizeFourShipCount'), 3, document.querySelector('.sizeFourShip'));

}
function drag(){

    let f = document.querySelectorAll('.dragable');

    for(let i = 0; i < f.length; i++){

        f[i].setAttribute('draggable', 'true');
        f[i].addEventListener("dragstart", function(e){

            if(f[i].parentNode.firstChild.innerHTML === '0x'){

                e.preventDefault();

            }else{

                console.log(f[i]);
                f[i].classList.add('dragWhite','activated');

            }

        });
        f[i].addEventListener("dragend", function(){

            f[i].classList.remove('dragWhite','activated');
            f[i].classList.remove(f[i].classList[3]);

        });

    }

}

document.querySelector('.menu').addEventListener('click', function(){

    document.querySelector('#menuContent').classList.add('hover');
    document.querySelector('#menuContent').classList.remove('hide');

});

document.querySelector('#menuContent .logo').addEventListener('click', function(){

    document.querySelector('#menuContent').classList.remove('hover');
    document.querySelector('#menuContent').classList.add('hide');

})

function ship(n, div){

    for(let i = 0; i < n; i++){

        shipType(div);

    }

}


function shipType(map){
    
    let mapBlock = document.createElement('div');
    mapBlock.classList.add('shipBlock');
    map.appendChild(mapBlock);
    mapBlock.addEventListener('mousedown', function(){

        const parent = this.parentNode;

        let child = parent.childNodes;

        for(let j = 0; j < child.length; j++){

            if(this === child[j]){

                if(j === 0){

                    parent.classList.add('zero');
    
                }else if(j === 1){
    
                    parent.classList.add('one');
    
                }else if(j === 2){
    
                    parent.classList.add('two');
    
                }else if(j === 3){
    
                    parent.classList.add('three');
    
                }

            }

        }

    });

    mapBlock.addEventListener('mouseup', function(){

        this.parentNode.classList.remove(this.parentNode.classList[3]);

    });

}

if(JSON.parse(localStorage.getItem('load')) === false){

    let a =  new Promise((resolve) => {
    
        setTimeout(() => {
            localStorage.setItem('load', true);
            random(document.querySelector('#mapPlayer2'));
            document.querySelectorAll('.sizeFourShipCount').forEach(value=>{
    
                value.innerHTML = '1x';
        
            });
            document.querySelectorAll('.sizeThreeShipCount').forEach(value=>{
        
                value.innerHTML = '2x';
        
            }); 
            document.querySelectorAll('.sizeTwoShipCount').forEach(value=>{
        
                value.innerHTML = '3x';
        
            });
            document.querySelectorAll('.sizeOneShipCount').forEach(value=>{
        
                value.innerHTML = '4x';
                
            });
            random(document.querySelector('#mapForAddingShip'));
          }, 20);
    
    });

}

document.querySelector('.new').addEventListener('click', function(){

    window.location.reload();
    
});
document.querySelector('.resume').addEventListener('click', function(){

    document.querySelector('#menuContent').classList.remove('hover');
    document.querySelector('#menuContent').classList.add('hide');
    
});