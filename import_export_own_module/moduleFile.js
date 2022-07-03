const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}

const name = 'tejendra';

// so we give this file export name as name ,which need to be related to this file var or func
// only export thing can run on main file

// module.exports = name;
// module.exports = add;
// module.exports = sub;

module.exports = {add,sub,name};