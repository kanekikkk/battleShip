import {fitOrNot, blackMark, redMark, humanCount, shipDestroyed} from "./map.js";

export let botCount = 0;

export default function randomise(parentNode, shipCount, size, ship){

    // 0 = vertical    1 = Horizontal; 
    // x, y, size, nodeClicked, parent
    let verticalOrHorizontal;

    while(shipCount.innerHTML != '0x'){

        let x = Math.floor(Math.random()*9);
        let y = Math.floor(Math.random()*10);

        if(x > 0 && y > 0){

            verticalOrHorizontal = Math.floor(Math.random()*2);
            
            if(verticalOrHorizontal === 1){

                let check = false;

                if(!check){
        
                    ship.classList.add('zero');
                    check = fitOrNot(ship, x, parentNode, x, y, size, 'vert');
                    ship.classList.remove('zero');

                }
                if(check && size >= 1){

                    ship.classList.add('one');
                    check = fitOrNot(ship, x, parentNode, x, y, size, 'vert');
                    ship.classList.remove('one');

                }
                if(check && size >= 2){

                    ship.classList.add('two');
                    check = fitOrNot(ship, x, parentNode, x, y, size, 'vert');
                    ship.classList.remove('two');

                }
                if(check && size >= 3){

                    ship.classList.add('three');
                    check = fitOrNot(ship, x, parentNode, x, y, size, 'vert');
                    ship.classList.remove('three');

                }

            }else{

                let check = false;

                if(!check){

                    ship.classList.add('zero');
                    check = fitOrNot(ship, y, parentNode, x, y, size, 'horz');
                    ship.classList.remove('zero');

                }
                if(check && size >= 1){

                    ship.classList.add('one');
                    check = fitOrNot(ship, y, parentNode, x, y, size, 'horz');
                    ship.classList.remove('one');

                }
                if(check && size >= 2){

                    ship.classList.add('two');
                    check = fitOrNot(ship, y, parentNode, x, y, size, 'horz');
                    ship.classList.remove('two');

                }
                if(check && size >= 3){

                    ship.classList.add('three');
                    check = fitOrNot(ship, y, parentNode, x, y, size, 'horz');
                    ship.classList.remove('three');

                }

            }
        }

    }

}

let stack = [];

export function botPlay(){

    let check = true;
    while(check && humanCount != 20){

        let child = document.querySelector('#mapForAddingShip').childNodes;

        if(stack.length > 0){

            let a = stack.pop();
            let y = a.y, x = a.x;
            if(child[y+1+x*11].classList.length > 3 && a.node === child[y+1+x*11].classList[4] && !child[y+1+x*11].classList.contains('flex')){

                ++botCount;
                shipDestroyed(botCount, 'Computer Won');
                redMark(child[y+1+x*11]);
                if(a.direction === '-x' && x-1 >= 0){

                    stack.push(
                
                        {
                            position: y+1 + (x - 1)*11,
                            node: child[y+1+x*11].classList[4],
                            x : x-1,
                            y : y,
                            direction: '-x'
                        }
            
                    );
            
                }
                if(a.direction === '+x' && x+1 <= 9){
            
                    stack.push(
                
                        {
                            position: y+1 + (x + 1)*11,
                            node: child[y+1+x*11].classList[4],
                            x : x+1,
                            y : y,
                            direction: '+x'
                        }
            
                    );
            
                }
                if(a.direction === '-y' && y - 1 >= 0){
            
                    stack.push(
                
                        {
                            position: y + (x)*11,
                            node: child[y+1+x*11].classList[4],
                            x : x,
                            y : y - 1,
                            direction: '-y'
                        }
            
                    );
            
                }
                if(a.direction === '+y' && y + 1 <= 10){
            
                    stack.push(
                
                        {
                            position: y + 2 + (x)*11,
                            node: child[y+1+x*11].classList[4],
                            x : x,
                            y : y+1,
                            direction: '+y'
                        }
            
                    );
            
                }
                check = false;

            }else if(child[y+1+x*11].classList.length < 3){

                blackMark(child[y+1+x*11]);
                check = false;

            }

        }else{
    
            let x = Math.floor(Math.random()*11);
            let y = Math.floor(Math.random()*10);
    
            if(x > 0 && y >= 0){
    
                if(!child[y+1+x*11].classList.contains('flex')){
    
                    if(child[y+1+x*11].classList.length > 3){
            
                        redMark(child[y+1+x*11]);
                        botCount++;
                        shipDestroyed(botCount, 'Computer Won');
                        findShip(child, x, y); 
    
                    }else if(child[y+1+x*11].classList.length < 3){
    
                        blackMark(child[y+1+x*11]);
            
                    }

                    check = false;
    
                }
    
            }
    
        }

    }

    setTimeout(function(){

        document.querySelector('#mapForAddingShip').classList.add('pseudo', 'pseudoColor');
        document.querySelector('.mapForAddingShipContainer .players').classList.add('pseudo', 'pseudoColor');
    
        document.querySelector('#mapPlayer2').classList.remove('pseudo','pseudoColor');
        document.querySelector('.right .players').classList.remove('pseudoColor');
    
        document.querySelector('.opposition').classList.add('hide');
        document.querySelector('.your').classList.remove('hide');

    }, 500);
}

function findShip(child, x, y){

    if(x-1 >= 0){

        stack.push(
    
            {
                position: y+1 + (x - 1)*11,
                node: child[y+1+x*11].classList[4],
                x : x-1,
                y : y,
                direction: '-x'
            }

        );

    }
    if(x+1 < 9){

        stack.push(
    
            {
                position: y+1 + (x + 1)*11,
                node: child[y+1+x*11].classList[4],
                x : x+1,
                y : y,
                direction: '+x'
            }

        );

    }
    if(y - 1 >= 0){

        stack.push(
    
            {
                position: y + (x)*11,
                node: child[y+1+x*11].classList[4],
                x : x,
                y : y - 1,
                direction: '-y'
            }

        );

    }
    if(y + 1 <= 10){

        stack.push(
    
            {
                position: y + 2 + (x)*11,
                node: child[y+1+x*11].classList[4],
                x : x,
                y : y+1,
                direction: '+y'
            }

        );

    }

}