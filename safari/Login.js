const email = window.document.querySelector('#email');
const password = window.document.querySelector('#password');
const boton = window.document.querySelector('#btn');


boton.addEventListener('click',mostrarDatos)

function mostrarDatos(){
    let emailValue = email.value;
    let passwordValue = password.value;

     
    email.focus();


    if(emailValue == '' && passwordValue == ''){
        
        alert('Ingrese correo y contraseña');
        email.focus();


    }else{
        if(emailValue != 'ejemplo@gmail.com'){
            
            alert('Ingrese correo o contraseña validos');
            email.value = '';
            password.value = '';
            email.focus();

        }else{
            if(passwordValue ==''){
                alert('ingrese contraseña');
                password.focus();
            }else{
                if(passwordValue !='123456'){
                    alert('ingrese contraseña valida');
                    password.value = '';
                    password.focus();
                }else{
                    window.location.href= "../layaout/index.html";
                    alert('Bienvenido a tu perfil');
                   
                }
            }
        }

    }
       

}






