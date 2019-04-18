function mascara(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("mascaraEx()", 1)
}
function mascaraEx() {
    obj.value = masc(obj.value)
}
function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}
function mCel(celular) {
    celular = celular.replace(/\D/g, "")
    celular = celular.replace(/^(\d)/, "($1")
    celular = celular.replace(/(.{3})(\d)/, "$1) $2")
    if (celular.length == 9) {
        celular = celular.replace(/(.{1})$/, "-$1")
    } else if (celular.length == 10) {
        celular = celular.replace(/(.{2})$/, "-$1")
    } else if (celular.length == 11) {
        celular = celular.replace(/(.{3})$/, "-$1")
    } else if (celular.length == 12) {
        celular = celular.replace(/(.{4})$/, "-$1")
    } else if (celular.length > 12) {
        celular = celular.replace(/(.{4})$/, "-$1")
    }
    return celular;
}
