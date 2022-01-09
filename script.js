var ul = document.getElementById('List');
// console.log(ul.childNodes);
// console.log(ul.firstChild);


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

var editButton = document.getElementById('edit');
editButton.addEventListener('click',editItem)

var resetButtomon = document.getElementById('reset');
resetButtomon.addEventListener('click',resetlist)

function addItem() {
    var input = document.getElementById('input')  ;
    var item = input.value;
    // ul= document.getElementById('List');
    var textnode = document.createTextNode(item)
    
    
        if (item ===""){
            // return false;
            var p=document.createElement('h6');
            var state=document.createTextNode('Enter your todo');
            p.appendChild(state);
            document.querySelector('h1').appendChild(p);
            
        } else{

            var label =document.createElement('label')
            var li= document.createElement('li');
            var checkbox=document.createElement('input')
            checkbox.setAttribute('id','check')
            checkbox.type= 'checkbox'
            label.appendChild(textnode);
            li.appendChild(checkbox);
            li.appendChild(label);
            
            console.log(li);
            
            ul.insertBefore(li, ul.childNodes[0]);

            setTimeout(() => {
                li.className= 'visual';
            }, 2);
            
            
            input.value=' ';


        }
    }
function resetlist() {
    li=ul.children;
    var i=0;
    while (li[i]) {
    ul.removeChild(li[i])
    }   
}    
function removeItem() {
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
       while (li[index]&&li[index].children[0].checked) {
            ul.removeChild(li[index])
          
        }      
    }  
}

function editItem(e) {
    li=ul.children;
    var newTask= prompt('add task');
    for (let index = 0; index < li.length; index++) {
       if (li[index]&&li[index].children[0].checked) {console.log(li[index].textContent)
            li[index].textContent=newTask;
            console.log(li[index].textContent)
        }      
    }  
}
