    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var entradaano = document.getElementById('txtano')
        var res = document.getElementById('resultado')
        
        if (entradaano.value.length == 0 || entradaano.value > ano){
            window.alert('**ERRO** Verifique os dados')
        }
        else{
            var fsex = document.getElementsByName('res_sex')
            var idade = ano - Number(entradaano.value)
            //res.innerHTML = (`Idade calculada: ${idade}`)
            var genero = ''
            if(fsex[0].checked){
                genero = 'Masculino'
            }
            else{
                genero = 'Feminino'
            }
            res.innerHTML =(`Idade calculada é ${idade} e o genero é ${genero}.`)
            
        }

    }
