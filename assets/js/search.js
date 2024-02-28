


export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    let stack = [...document.body.children];

    while(stack.length){
        let currNode = stack.pop();
      
        if(currNode.id === id){
            return currNode.innerHTML
        }

        if(currNode.children){
            stack.push(...currNode.children);
        }
      
    }
    return null
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    let quoue = [...document.body.children];

    while (quoue.length) {
        let currNode = quoue.shift();

        if (currNode.tagName === tag) {
            return currNode.innerHTML
        }

        if (currNode.children) {
            quoue.push(...currNode.children);
        }

    }
    return null

    // Your code here
}

export function findFirstElementOfClass(cls) {
    let quoue = [...document.body.children];

    while (quoue.length) {
        let currNode = quoue.shift();

        if (currNode.classList.contains(cls)) {
            return currNode.innerHTML
        }

        if (currNode.children) {
            quoue.push(...currNode.children);
        }

    }
    return null
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    let stack = [...document.body.children];
    let identicalTags = []
    while (stack.length) {
        let currNode = stack.pop();

        if (currNode.tagName === tag) {
            identicalTags.push(tag)
        }

        if (currNode.children) {
            stack.push(...currNode.children);
        }

    }
    return identicalTags.length
    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    // Return an array of elements that have a tag name of `tag`
    let stack = [...document.body.children];
    let identicalclasses = []
    while (stack.length) {
        let currNode = stack.pop();
 
        if (currNode.classList.contains(cls)) {
            identicalclasses.push(cls)
        }
        
        if (currNode.children) {
            stack.push(...currNode.children);
        }

    }
    return identicalclasses.length
    // Your code here
}