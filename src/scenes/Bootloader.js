class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Bootloader");
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image(["gradient","nube1","nube2","nube3","nube4","nube5","nube6","titulo","play","letras"]);  //Arreglo de imagenes
        this.load.audio("musica","ambientacion.mp3");
        this.load.spritesheet('estrella', 'estrella.png',
        {
            frameWidth: 45,
            frameHeight: 45,

        });
    }
    create() {
        this.gradient = this.add.image(760, 367, "gradient").setTint(0x584073);//atributo
        this.nube1=this.add.image(200,90,"nube1").setTint(0x151D3C);
        this.nube2=this.add.image(650,150,"nube2").setTint(0x151D3C);
        this.nube3=this.add.image(980,210,"nube3").setTint(0x151D3C);
        this.nube4=this.add.image(1380,170,"nube4").setTint(0x151D3C);
        this.nube5=this.add.image(1100,100,"nube5").setTint(0x151D3C);
        this.nube6=this.add.image(380,230,"nube6").setTint(0x151D3C);
        this.nube7=this.add.image(880,30,"nube6").setTint(0x151D3C);
        this.titulo=this.add.image(760,367,"titulo");
        this.play=this.add.image(760,480,"play").setScale(.7).setInteractive();
       //this.letras=this.add.image(760,480,"letras").setScale(.7).setDepth(1).setInteractive();
      
        this.timeline = this.tweens.createTimeline(); 
        this.musica= this.sound.add("musica");
        this.musica.setLoop(true);
        this.musica.play();
        this.timeline = this.tweens.createTimeline();
        this.timeline2 = this.tweens.createTimeline();
        this.timeline3 = this.tweens.createTimeline();
        this.timeline4 = this.tweens.createTimeline();
        this.timeline5 = this.tweens.createTimeline();     
        this.timeline6 = this.tweens.createTimeline();   
        this.timeline7 = this.tweens.createTimeline();    
        this.timeline.add({             
            targets: [this.nube1],             
            x: -100  ,
        duration:10000,
        
                 onComplete: () => {                
                 this.nube1.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube1],  
                     duration:43000,           
                     x:-100        
                     })         
            }

        });      

        this.timeline2.add({             
            targets: [this.nube2],             
            x: -100  ,
            duration:40000,
        
                 onComplete: () => {                
                 this.nube2.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube2],  
                     duration:58000,           
                     x:-100        
                     })         
            }

        });      

        this.timeline3.add({             
            targets: [this.nube3],             
            x: -100  ,
            duration:48000,
        
                 onComplete: () => {                
                 this.nube3.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube3],  
                     duration:68000,           
                     x:-100        
                     })         
            }

        });      

        this.timeline4.add({             
            targets: [this.nube4],             
            x: -70  ,
            duration:59000,
        
                 onComplete: () => {                
                 this.nube4.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube4],  
                     duration:78000,           
                     x:-100        
                     })         
            }

        });      

        this.timeline5.add({             
            targets: [this.nube5],             
            x: -100  ,
            duration:40000,
        
                 onComplete: () => {                
                 this.nube5.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube5],  
                     duration:68000,           
                     x:-100        
                     })         
            }

        });      
        this.timeline6.add({             
            targets: [this.nube6],             
            x: -50  ,
            duration:18000,
        
                 onComplete: () => {                
                 this.nube6.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube6],  
                     duration:48000,           
                     x:-100        
                     })         
            }

        });      

        this.timeline7.add({             
            targets: [this.nube7],             
            x: -50  ,
            duration:18000,
        
                 onComplete: () => {                
                 this.nube7.setX(1600);  
                 this.tweens = this.add.tween({             
                     targets: [this.nube7],  
                     duration:48000,           
                     x:-100        
                     })         
            }

        });      
      
        this.timeline.play(); 
        this.timeline2.play();   
        this.timeline3.play();    
        this.timeline4.play();    
        this.timeline5.play();    
        this.timeline6.play();  
        this.timeline7.play();  
        
        const eventos = Phaser.Input.Events;
      this.play.on(eventos.POINTER_OVER, function(){
            this.setScale(0.5);
            this.setTint('0xB5B4AE');
            
        });
    
           
          
        this.play.on(eventos.POINTER_OUT, function(){
            this.setScale(.7);
            this.clearTint();
            
        });
       
       
      
 

       
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;