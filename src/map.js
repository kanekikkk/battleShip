import { botPlay, botCount} from "./randomize.js";

export function mapfunction(map){

    for(let i = 0; i < 11; i++){

        numbs(map, i);

        for(let j = 0; j < 10; j++){

            if(i === 0){

                vari(map, j);

            }else{

                if(map.id === 'mapForAddingShip'){
            
                    shipBuildingMap(map, i, j);
                
                }
                else{
                
                    domMap(map);
            
                }

            }
        
        }
        
    }

}

function domMap(map){
    
    let mapBlock = document.createElement('div');
    mapBlock.classList.add('mapBlock', 'shipBuidingMapBlock');
    map.appendChild(mapBlock);
    mapBlock.addEventListener('click', function(){

        if(!this.classList.contains('flex') && botCount != 20){

            document.querySelector('#mapPlayer2').classList.add('pseudo', 'pseudoColor');
            document.querySelector('.right .players').classList.add('pseudo', 'pseudoColor');
    
            document.querySelector('#mapForAddingShip').classList.remove('pseudoColor');
            document.querySelector('.mapForAddingShipContainer .players').classList.remove('pseudoColor');
    
            document.querySelector('.your').classList.add('hide');
            document.querySelector('.opposition').classList.remove('hide');

            if(mapBlock.classList.length > 2){

                redMark(this);
                ++humanCount;
                shipDestroyed(humanCount, 'Human Won');
    
            }else{
    
                blackMark(this);
    
            }
            botPlay();

        }

    });

}
function shipBuildingMap(map, x, y){

    let mapBlock = document.createElement('div');
    mapBlock.classList.add('mapBlock', 'shipBuidingMapBlock');
    map.appendChild(mapBlock);
    mapBlock.addEventListener('dragover', function(e){

        e.preventDefault();

    });
    mapBlock.addEventListener('drop', function(){

        if(false){


        }else{

            let ship = document.querySelector('.activated');

            let checkHorizentalOrVertical = ship.parentNode.parentNode.classList;

            let shipName = ship.classList;

            if(shipName[0] === 'sizeFourShip'){

                if(checkHorizentalOrVertical[0] === 'vertical'){

                    fitOrNot(ship, x, mapBlock.parentNode, x, y, 3, 'vert');

                }else{

                    fitOrNot(ship, y, mapBlock.parentNode, x, y, 3, 'horz');

                }

            }else if(shipName[0] === 'sizeThreeShip'){

                if(checkHorizentalOrVertical[0] === 'vertical'){

                    fitOrNot(ship, x, mapBlock.parentNode, x, y, 2, 'vert');

                }else{

                    fitOrNot(ship, y, mapBlock.parentNode, x, y, 2, 'horz');

                }

            }else if(shipName[0] === 'sizeTwoShip'){

                if(checkHorizentalOrVertical[0] === 'vertical'){

                    fitOrNot(ship, x, mapBlock.parentNode, x, y, 1, 'vert');

                }else{

                    fitOrNot(ship, y, mapBlock.parentNode, x, y, 1, 'horz');

                }

            }else{

                if(checkHorizentalOrVertical[0] === 'vertical'){

                    fitOrNot(ship, x, mapBlock.parentNode, x, y, 0, 'vert');                

                }else{

                    fitOrNot(ship, y, mapBlock.parentNode, x, y, 0, 'horz');

                }

            }

            shipName.remove(shipName[3]);


            }

    })

}

function horizental(childd, x, y, size, nodeClicked, shipName, mainDirection){

    for(let i = 0; i <= size - nodeClicked; i++){

        let child = childd[y+1+i + x*11];

        child.setAttribute('draggable', 'true');
        child.addEventListener("dragstart", function(){

            child.classList.add('dragWhite','activated');

        });
        child.addEventListener("dragend", function(){

            child.classList.remove('dragWhite','activated');

        });

        child.classList.add('gray','a'+i, shipName);

    }
    for(let i = 1; i <= size -(size - nodeClicked); i++){

        let child = childd[y+1-i + (x*11)];

        child.setAttribute('draggable', 'true');
        child.addEventListener("dragstart", function(){

            child.classList.add('dragWhite','activated');

        });
        child.addEventListener("dragend", function(){

            child.classList.remove('dragWhite','activated');

        });
        child.classList.add('gray','a'+i, shipName, mainDirection);

    }

}

function vertical(childd, x, y, size, nodeClicked, shipName, mainDirection){

    for(let i = 0; i <= size - nodeClicked; i++){

        let child = childd[y+1 + ((x+i)*11)];

        child.setAttribute('draggable', 'true');
        child.addEventListener("dragstart", function(){

            child.classList.add('dragWhite','activated');

        });
        child.addEventListener("dragend", function(){

            child.classList.remove('dragWhite','activated');

        });

        child.classList.add('gray','a'+i, shipName);

    }
    for(let i = 1; i <= size -(size - nodeClicked); i++){

        let child = childd[y+1 + ((x-i)*11)];

        child.setAttribute('draggable', 'true');
        child.addEventListener("dragstart", function(){

            child.classList.add('dragWhite','activated');

        });
        child.addEventListener("dragend", function(){

            child.classList.remove('dragWhite','activated');

        });
        child.classList.add('gray','a'+i, shipName, mainDirection);

    }

}
function checkNeighbourVertical(x, y, size, nodeClicked, parent){

    let child = parent.childNodes;
    for(let i = 0; i <= size - nodeClicked; i++){


        if(child[y+1 + ((x+i)*11)] === undefined || child[y+1 + ((x+i)*11)].classList.contains('gray')){

            return true;

        }

    }
    for(let i = 1; i <= size -(size - nodeClicked); i++){

        if(child[y+1 + ((x-i)*11)].classList.contains('gray')){

            return true;
        
        }

    }

}
function checkNeighbourHorizontal(x, y, size, nodeClicked, parent){

    let child = parent.childNodes;
    for(let i = 0; i <= size - nodeClicked; i++){

        if(child[y+1+i + x*11].classList[2] === 'gray'){

            return true;

        }

    }
    for(let i = 1; i <= size -(size - nodeClicked); i++){

        if(child[y+1-i + (x*11)].classList[2] === 'gray'){

            return true;
        
        }

    }

}
function shipCount(ship){

    let node = ship.parentNode.firstChild.classList[0];

    document.querySelectorAll('.'+node).forEach(output => {
    
        let a = output.innerHTML;
        a = a.split('');
        parseInt(a[0]);
        a[0] = a[0] - 1;
        a = a.join('');
        output.innerHTML = a;
    
    });

}
export function fitOrNot(ship, direction, parent, x, y, size, mainDirection){

    if(ship.classList[3] === 'one'){

        if(((direction + (size - 1) > 9 || direction - (size - (size - 1)) < 0) && mainDirection === 'horz') || ((direction + (size - 1) > 11 || direction - (size - (size - 1)) <= 0) && mainDirection === 'vert')){

            return true;

        }else{
    
                if(mainDirection === 'horz'){
    
                    let check = false;
                    check = checkNeighbourHorizontal(x, y, size, 1, parent);

                    if(!check){

                        shipCount(ship);
                        horizental(parent.childNodes, x, y, size, 1, ship.classList[0], mainDirection);

                    }else{

                        return true;

                    }
    
                }else{
    
                    let check = false;
                    check = checkNeighbourVertical(x, y, size, 1, parent);

                    if(!check){

                        shipCount(ship);
                        vertical(parent.childNodes, x, y, size, 1, ship.classList[0], mainDirection);

                    }else{

                        return true;

                    }
    
                }

        }

    }else if(ship.classList[3] === 'zero'){

        if((direction + (size) > 9 && mainDirection === 'horz') || (direction + (size) > 11 && mainDirection === 'vert')){

            return true;

        }else{

                if(mainDirection === 'horz'){

                    let check = false;
                    check = checkNeighbourHorizontal(x, y, size, 0, parent);

                    if(!check){

                        shipCount(ship);
                        horizental(parent.childNodes, x, y, size, 0, ship.classList[0], mainDirection);
                    }else{

                        return true;

                    }

                }else{

                    let check = false;
                    check = checkNeighbourVertical(x, y, size, 0, parent);

                    if(!check){

                        shipCount(ship);
                        vertical(parent.childNodes, x, y, size, 0, ship.classList[0], mainDirection);
                    }else{

                        return true;

                    }

                }


        }
        
    }else if(ship.classList[3] === 'two'){

        if(((direction + (size - 2) > 9 || direction - (size - (size - 2)) <= 0) && mainDirection === 'horz') || ((direction + (size - 2) > 11 || direction - (size - (size - 2)) <= 0) && mainDirection === 'vert')){

            return true;

        }else{

            if(mainDirection === 'horz'){
                let check = false;
                check = checkNeighbourHorizontal(x, y, size, 2, parent);

                if(!check){
                    shipCount(ship);
                    horizental(parent.childNodes, x, y, size, 2, ship.classList[0], mainDirection);
                }else{

                    return true;

                }

            }else{

                let check = false;
                check = checkNeighbourVertical(x, y, size, 2, parent);

                if(!check){

                    shipCount(ship);
                    vertical(parent.childNodes, x, y, size, 2, ship.classList[0], mainDirection);
                }else{

                    return true;

                }

            }

        }
        
    }else{
    
        if((direction - size <= 0 && mainDirection === 'horz')||(direction - size <= 0 && mainDirection === 'vert')){

            return true;

        }else{

                if(mainDirection === 'horz'){

                    let check = false;
                    check = checkNeighbourHorizontal(x, y, size, 3, parent);
    
                    if(!check){
                        shipCount(ship);
                        horizental(parent.childNodes, x, y, size, 3, ship.classList[0], mainDirection);
                    }else{

                        return true;

                    }

                }else{

                    let check = false;
                    check = checkNeighbourVertical(x, y, size, 3, parent);
    
                    if(!check){
    
                        shipCount(ship);
                        vertical(parent.childNodes, x, y, size, 3, ship.classList[0], mainDirection);
                    }else{

                        return true;

                    }

                }

        }

    }
}

function numbs(map, i){

    let div = document.createElement('div');
    div.classList.add('mapNums', 'flex', 'random');
    map.appendChild(div);

    let h3 = document.createElement('h3');
    if(i === 0){

        h3.innerHTML = '';

    }else{

        h3.innerHTML = i;

    }
    div.appendChild(h3);


}
function vari(map, i){

    let div = document.createElement('div');
    div.classList.add('mapVar', 'temp', 'random');
    map.appendChild(div);

    let h3 = document.createElement('h3');
    h3.innerHTML = String.fromCharCode(65 + i);
    div.appendChild(h3);

}

export function blackMark(dom){

    dom.classList.add('flex');
    
    let div = document.createElement('div');
    div.classList.add('blackMark');
    dom.appendChild(div);

}

export function redMark(dom){

    dom.classList.add('flex');
    
    let div = document.createElement('div');
    div.classList.add('redMark');
    dom.appendChild(div);

}

export let humanCount = 0;
export function shipDestroyed(count, won){

    if(count === 20){

        document.querySelector('.gameOver').classList.remove('hide');
        document.querySelector('.gameOver h1').innerHTML = won;

    }

}