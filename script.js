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
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            if(fsex[0].checked){
                genero = 'Masculino'
                if(idade < 12){
                    //criança
                    img.setAttribute('src', 'criança.png')
                }
                else if(idade < 18){
                    //jovem
                    img.setAttribute('src' , 'jovem.png')
                }
                else if(idade < 50){
                    //adulto
                    img.setAttribute('src' , 'adulto.png')
                }
                else{
                    //idoso
                    img.setAttribute('src' , 'idoso.png')
                }
            }
            else{
                genero = 'Feminino'
                if(idade < 12){
                    //criança
                    img.setAttribute('src', 'criança-F.png')
                }
                else if(idade < 18){
                    //jovem
                    img.setAttribute('src' , 'jovem-F.png')
                }
                else if(idade < 50){
                    //adulto
                    img.setAttribute('src' , 'adulto-F.png')
                }
                else{
                    //idoso
                    img.setAttribute('src' , 'idoso-F.png')
                }
            }
            res.innerHTML =(`Idade calculada é ${idade} e o genero é ${genero}.`)
            res.appendChild(img)
            
        }

    }
