      

        let example1 = ['dato1', 5, true];
        let example2 = example1;

        let myObject = {
            nombre: 'Aderson',
            apellido: 'Rangel',
            direccion: {
                calle: 'Bucarica',
                numero: '23'
            }
        };

        let myObject2 = myObject;

        let myObject3 = Object.assign({}, myObject2);
        myObject3.edad = 35;

        const nombreCompleto = `${example1[0]} ${example1[0]}`;

        example2.push(11);

        example2.forEach((element) => {
            console.log(element);
        });


        console.log(example1);
        console.log(example2);
        console.log(myObject);
        console.log(nombreCompleto);
        console.log(myObject.direccion.numero);
        console.log(myObject.hasOwnProperty('nombre')); //Importante

        console.log(myObject2);
        console.log(myObject3);

        <!-- Si utilizamos tres operadores ademas del valor estamos probando el typo de las variables -->
        let example11 = 5 === 5;
        let example12 = 5 == '5';
        let example13 = 6 != '6';
        let example14 = 7 !== '7';
        
        console.log(example11);
        console.log(example12);
        console.log(example13);
        console.log(example14);

        example11 = example11 + 1;
        console.log(example11);

        example11++;
        console.log(example11);

        example11 = 5;

        if (example11 === 5)
        {
            console.log('Runs');

        } else if ( true ) 
        {
            console.log('else if')

        } else 
        {
           console.log('else');      
        }

        console.log(10 === 10 && 5 < 4);
        console.log(10 === 10 || 5 < 4);
        console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);

        let condicion = 'A';

        switch(condicion)
        {
            case 'D':
                console.log('codición de D');
                break;
            case 'A':
                console.log('Codicion A');
                break;
            default:
                console.log('condicon default');
        }

        console.log('Impresión de un ciclo');
        let suma = 0;
        for(let i = 0; i < 10; i++)
        {
            console.log (i);
            suma += i;
        }
        console.log('Total de la suma: ' +  suma);

        suma = 0;

        while(suma < 20)
        {
            suma++;
        }

        console.log('El total de la suma es: ' + suma);


        function add() {
            console.log('Add()');
        }

        add();

