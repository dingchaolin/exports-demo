exports = {
    func1 : function(){
        console.log( "func1");
    }
}

console.log( "exports=========", exports );

console.log(　"module.exprts======", module.exports );


module.exports = exports;
