function op(opcao, x, y){
    
    function soma(x,y) {
        return x+y;
    }

    function subtrai(x,y){
        return x-y
    }

    if (opcao == 1) {
        soma(x,y)
    } else {
        subtrai(x,y)
    }
    
}

print(op(1, 10, 12))