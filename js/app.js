document.addEventListener('DOMContentLoaded', () => {
    'use strict';
   

//////////////////////////////////////////////////////////////////////////

//////  Task 1  //////////////
   
const data = {
    users: [
        {
            id: 1,
            name:'Dastan'
        },
        {
            id: 2,
            name:'Sabyr'
        },
        {
            id: 3,
            name:'Nurlan'
        }
    ],
    messages: [
        {
            id: 1,
            text: 'Hello',
            userId: 2,
            receiverId : 3
        },
        {
            id: 2,
            text: 'My name is Dastan',
            userId: 1,
            receiverId : 3
        },
        {
            id: 3,
            text: 'I`m Nurlan',
            userId: 3,
            receiverId : 1
        },
        {
            id: 4,
            text: 'How are you',
            userId: 2,
            receiverId : 1
        },
        {
            id: 5,
            text: 'Fine',
            userId: 1,
            receiverId : 2
        },
    ]  
        };
    
        
        

function normalizeReceivedData(receiverData) {
    let newObj;
    const arr = [], obj = {}, objFrom = {} , objTo = {} ,
    users = receiverData.users,
    messages = receiverData.messages,
    userIndex = users.map(user => user.id),
    userName = users.map(user => user.name),
    messageText = messages.map(user => user.text) ,
    userFromId = messages.map(user => user.userId) ,
    userToId = messages.map(user => user.receiverId) ;
   
    for (let i = 0; i < messages.length; i++) {
        
        for (let j = 0; j < users.length; j++) {
            
            if(userIndex[j] === userFromId[i]){
                obj.messageText = messageText[i];
                obj.userFromName = userName[j];
            }
            if(userIndex[j] === userToId[i]) {
                objTo.messageText = messageText[i];
                objTo.userFromName = userName[j];
            }  
             
        }
        for (let k = 0; k < objTo.messageText.length; k++) {
            if(obj.messageText == objTo.messageText){
               obj.userToName = objTo.userFromName;
            }
            
        }
        
        
        newObj = Object.assign({}, obj);
        arr.push(newObj);
    }
    return arr;
    
    
    
    
};
document.writeln('Task 1: ',`<br>`);

const dom = normalizeReceivedData(data);

dom.forEach(elem => {
    document.writeln('MessageText: ',elem.messageText,'  |  ','UserFromName: ', elem.userFromName , '  |  ','UserToName: ', elem.userToName ,`<br>`)
});

document.writeln(`<br><hr>`);


//////////////////////////////////////////////////////////////////////////

//////  Task 2  //////////////
    

function equalShiftsAmount(input) {
    let str = input;
    let input1 = input;
    let str1;
    let str2;
    let k = 0;
    for (let i = 0; i < str.length; i++) {
        str1 = str.slice(str.length-1,str.length);
        str2 = str.slice(0,str.length-1);
        str = str1 + str2;
        if (str === input1) {
            k++;
        }
        
        input = str;
        };
        return k;
}
const input = 'ekoeko';

document.writeln('Task 2: ',`<br>`,'Input: ',input,`<br>`,'Output: ',equalShiftsAmount(input),`<br><hr>`);


///////////////////////////////////////////////////////////////////////////

//////  Task 3  //////////////


 
 function ListNode(val) {
     this.val = val;
    this.next = null;
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function sumLinkedList(l1, l2) {
    let node = null;
    const carry = arguments[2];
    
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;
        const val = carry ? val1 + val2 + 1 : val1 + val2;
        node = new ListNode(val % 10);
        
        node.next = sumLinkedList(next1, next2, val >= 10);  
     
    } else if (carry) {
        node = new ListNode(1);
        node.next = null;
    }
    
    return node;
    
};

let l1 ,l2, result;

l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(4);
l2 = new ListNode(5);
    l2.next = new ListNode(5);
    l2.next.next = new ListNode(6);
    
document.write('Task 3: ',`<br>`,'Input: ',l1.val,' => ',l1.next.val,' => ',l1.next.next.val,' + ',
                l2.val,' => ',l2.next.val,' => ',l2.next.next.val,`<br>`,'Output: ');

result = sumLinkedList(l1, l2);
    while(result != null) {
     document.writeln('=> ',result.val);
      result = result.next;
    }

});
