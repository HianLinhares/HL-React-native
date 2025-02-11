export default function generatePass(){
    let passoword: string = ''
    let caracteres: string = 'Aa@*12378liub988H7G626VD'
    let numberpassoword = 8
    for (let i = 0; i < numberpassoword; i++) {
        passoword += caracteres.charAt(Math.floor(Math.random()*caracteres.length))
    }
    return passoword
}