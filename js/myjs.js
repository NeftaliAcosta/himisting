$(document).ready(function(){
(function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, 
            i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })
        (window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-75593110-1', 'auto');
        ga('send', 'pageview');

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
	    }
	});

});/*Fin Document ready*/


var infotec = {
    info1: {
        titulo: '<b>Climatización exterior</b>',
        texto: '<p>En <b>HI-MISTING</b> sabemos que disfrutas estar al aire libre, pasar un bello día de campo en familia, una comida con tus amigos o ese evento social tan esperado. Sabemos que para ti lo más importante es estar cómodo y tranquilo para poder disfrutar de momentos inolvidables, por ello, nos preocupamos por brindar confort a ti y a tus seres queridos.</p><p>Nuestros equipos son ideales para espacios abiertos como: jardines, parques de atracciones, campos de golf, hoteles, restaurantes, terrazas, eventos deportivos, musicales al aire libre, entre otros…</p>',
        img: 'img/climatizacion.png',
        
    },
	
	info2: {
        titulo: '<b>Barrera para insectos</b>',
        texto: '<p>Los sistemas de evaporización <b>HI-MISTING</b> brindan grandes beneficios además de refrescar espacios exteriores. Uno de ellos es que ayudan a crear una barrera para impedir el paso a  los insectos voladores.</p> <p>Los insectos voladores (moscos, mosquitos entre otros) normalmente son atraídos por el olor de las personas y de la comida. Y es precisamente por medio del calor que los insectos detectan donde picar.</p> <p>Con nuestros sistemas de evaporización <b>HI-MISTING</b> se evita que el olor de las personas o de la comida sea detectado.</p>',
        img: 'img/outdoor.jpg',
        
    },
	info3: {
        titulo: '<b>Agricultura e invernaderos</b>',
        texto: '<p>Nuestros sistemas son la respuesta para mantener el clima perfecto en su invernadero. Las plantas regulan su temperatura por medio de la evaporación del agua a través de sus hojas. La regulación y mantenimiento adecuado de la temperatura en un invernadero ayuda a las plantas a alcanzar un crecimiento óptimo.</p><p>Los sistemas <b>HI-MISTING</b> proporcionan precisión en el control de la temperatura a través de la refrigeración por evaporación. Esto permite una distribución más uniforme de su temperatura (debido a que el aire se enfría lo largo de todo el invernadero), lo cual es benéfico para el óptimo crecimiento de sus plantas.</p>',
        img: 'img/invernaderos.png', 
        
    },
	info4: {
        titulo: '<b>Uso industrial</b>',
        texto: '<p>La flexibilidad de los sistemas <b>HI-MISTING</b>, permiten su uso en cualquier forma deseada, con inversiones mucho más pequeñas, en comparación con las técnicas convencionales de humidificación.</p><p>Muchas industrias requieren control del nivel de humedad en las zonas de trabajo. El aire humidificado contiene menos polvo y menos electricidad estática.</p> <p>Esto mejora la calidad de los productos en las industrias de la impresión, textiles, madera, tabaco, elaboración de la cerveza, entre otros.</p>',
        img: 'img/industria.png', 
        
    },
	info5: {
        titulo: '<b>Olor y control de polvo</b>',
        texto: '</p>Nuestros sistemas <bHI-MISTING</b> son ideales para eliminar el olor asociado con las instalaciones de tratamiento de residuos sólidos, la descomposición microbiana de los residuos animales y compuestos volátiles nocivos.</p><p>La calidad de los componentes y el sistema de diseño de <b>HI-MISTING</b> permiten un sistema de suministro eficiente y económico comparado con los productos químicos de eliminación de olores.</p><p>Además de este gran beneficio, nuestros sistemas también ayudan a controlar el polvo en el ambiente. Cuando el agua a presión se atomiza en ambientes con polvo, las partículas de polvo seco en el ambiente se absorben por las gotas de agua haciéndolas más pesadas, por lo tanto, tienden a caer y a dejar el ambiente libre de polvo.</p>',
        img: 'img/olores.png', 
        
    },
};



var productos = {
			producto1:{
				modelo:'<b>Producto:</b> Misting-MK1',
				sku:'Misting-MK1',
				subtitulo:'Misting Alta presión sin Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc.. Cualquier lugar donde haya ventilación natural suficiente y techo.',
				nca:3,
				ca1:'<b>Capacidad:</b> 1 l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 20 mts',
				ncoa:1,
				nco:7,
				co1:'1 Bomba alta presión',
				co2:'25m de manguera nylon alta presión',
				co3:'1 filtro de agua 5 micras',
				co4:'20 boquillas de 0.15mm',
				co5:'19 porta boquillas',
				co6:'1 tapon/portaboquilla de manguera',
				co7:'10 clamps para manguera.',
				img: 'img/cat1.jpg',
				
			},
			
			producto2:{
				modelo:'<b>Producto:</b> Misting-MK2',
				sku:'Misting-MK2',
				subtitulo:'Misting Alta presión sin Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc.. Cualquier lugar donde haya ventilación natural suficiente y techo.',
				nca:3,
				ca1:'<b>Capacidad:</b> 2 l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 40 mts',
				ncoa:1,
				nco:8,
				co1:'1 Bomba alta presión',
				co2:'50m de manguera nylon alta presión',
				co3:'1 filtro de agua 5 micras',
				co4:'40 boquillas de 0.15mm',
				co5:'39 porta boquillas',
				co6:'3 tapon de manguera',
				co7:'2 conexiones "T"',
				co8:'20 clamps para manguera.',
				img: 'img/cat1.jpg',
				
			},
			producto3:{
				modelo:'<b>Producto:</b> Misting-MK4',
				sku:'Misting-MK4',
				subtitulo:'Misting Alta presión sin Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc.. Cualquier lugar donde haya ventilación natural suficiente y techo.',
				nca:3,
				ca1:'<b>Capacidad:</b> 3 l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 60 mts',
				ncoa:1,
				nco:7,
				co1:'1 Bomba alta presión',
				co2:'10	0m de manguera nylon alta presión',
				co3:'1 filtro de agua 5 micras',
				co4:'55 boquillas de 0.15mm',
				co5:'54 porta boquillas',
				co6:'3 tapon/portaboquilla de manguera',
				co7:'30 clamps para manguera.',
				img: 'img/cat1.jpg',
				
			},
			producto4:{
				modelo:'<b>Producto:</b> Misting-MF1',
				sku:'Misting-MF1',
				subtitulo:'Misting Alta presión con Ventilación',
				app:'Patios, restaurantes, terrazas, almacenes, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 24 mts2',
				ncoa:1,
				nco:8,
				co1:'1 Bomba alta presión',
				co2:'1 abanico 18“ para exteriores',
				co3:'2m de manguera entrada a Bomba',
				co4:'1 filtro de agua 5 micras',
				co5:'5m de manguera nylon alta presión',
				co6:'5m de manguera nylon alta presión',
				co7:'1 Aro (Ac.Inox) p/ 4 portaboquillas',
				co8:'10 clamps para manguera.',
				img: 'img/img_p_4.jpg',
				
			},
			producto5:{
				modelo:'<b>Producto:</b> Misting-MF2',
				sku:'Misting-MF2',
				subtitulo:'Misting Alta presión con Ventilación',
				app:'Patios, restaurantes, terrazas, almacenes, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 48 mts2',
				ncoa:1,
				nco:9,
				co1:'1 Bomba alta presión',
				co2:'2 abanico 18“ para exteriores',
				co3:'2m de manguera entrada a Bomba',
				co4:'1 filtro de agua 5 micras',
				co5:'10m de manguera nylon alta presión',
				co6:'8 boquillas de 0.15mm',
				co7:'2 Aro (Ac.Inox) p/ 4 portaboquillas',
				co8:'20 clamps para manguera.',
				co9:'1 Conector “T” para manguera.',
				img: 'img/img_p_5.jpg',
				
			},
			producto6:{
				modelo:'<b>Producto:</b> Misting-MF4',
				sku:'Misting-MF4',
				subtitulo:'Misting Alta presión con Ventilación',
				app:'Patios, restaurantes, terrazas, almacenes, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 48 mts2',
				ncoa:1,
				nco:9,
				co1:'1 Bomba alta presión',
				co2:'4 abanico 18“ para exteriores',
				co3:'2m de manguera entrada a Bomba',
				co4:'1 filtro de agua 5 micras',
				co5:'20m de manguera nylon alta presión',
				co6:'16 boquillas de 0.15mm',
				co7:'4 Aro (Ac.Inox) p/ 4 portaboquillas',
				co8:'40 clamps para manguera.',
				co9:'4 Conector “T” para manguera.',
				img: 'img/img_p_6.jpg',
				
			},
			producto7:{
				modelo:'<b>Producto:</b> Misting-MS1',
				sku:'Misting-MS1',
				subtitulo:'Misting Alta presión con Preparación para Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 24 mts2',
				ncoa:1,
				nco:6,
				co1:'1 Bomba alta presión',
				co2:'2m manguera entrada a Bomba',
				co3:'1 filtro de agua 5 micras',
				co4:'4 boquillas de 0.15mm',
				co5:'1 Aro(Ac. inox) p/4 porta-boquillas',
				co6:'10 clamps para manguera.',
				img: 'img/img_conp_conv.jpg',
				
			},
			producto8:{
				modelo:'<b>Producto:</b> Misting-MS2',
				sku:'Misting-MS2',
				subtitulo:'Misting Alta presión con Preparación para Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 44 mts2',
				ncoa:1,
				nco:8,
				co1:'1 Bomba alta presión',
				co2:'2m manguera entrada a Bomba',
				co3:'1 filtro de agua 5 micras',
				co4:'10m de manguera nylon alta presión',
				co5:'8 boquillas de 0.15mm',
				co6:'2 Aro(Ac. inox) p/4 porta-boquillas',
				co7:'20 clamps para manguera.',
				co8:'1 conector "T" para manguera.',
				img: 'img/img_conp_conv.jpg',
				
			},
			producto9:{
				modelo:'<b>Producto:</b> Misting-MS3',
				sku:'Misting-MS3',
				subtitulo:'Misting Alta presión con Preparación para Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 72 mts2',
				ncoa:1,
				nco:8,
				co1:'1 Bomba alta presión',
				co2:'2m manguera entrada a Bomba',
				co3:'1 filtro de agua 5 micras',
				co4:'15m de manguera nylon alta presión',
				co5:'12 boquillas de 0.15mm',
				co6:'3 Aro(Ac. inox) p/4 porta-boquillas',
				co7:'30 clamps para manguera.',
				co8:'3 conector "T" para manguera.',
				img: 'img/img_conp_conv.jpg',
				
			},
			producto10:{
				modelo:'<b>Producto:</b> Misting-MS4',
				sku:'Misting-MS4',
				subtitulo:'Misting Alta presión con Preparación para Ventilación',
				app:'Patios, restaurantes, terrazas, campos, etc. Cualquier lugar donde haya ventilación natural suficiente.',
				nca:3,
				ca1:'<b>Capacidad:</b> l/m',
				ca2:'<b>Presión salida agua:</b> 900 psi',
				ca3:'<b>Cobertura perimetral de enfrimaiento:</b> 96 mts2',
				ncoa:1,
				nco:8,
				co1:'1 Bomba alta presión',
				co2:'2m manguera entrada a Bomba',
				co3:'1 filtro de agua 5 micras',
				co4:'20m de manguera nylon alta presión',
				co5:'16 boquillas de 0.15mm',
				co6:'4 Aro(Ac. inox) p/4 porta-boquillas',
				co7:'40 clamps para manguera.',
				co8:'4 conector "T" para manguera.',
				img: 'img/img_conp_conv.jpg',
				
			},
		producto11	:{
				modelo:'<b>Producto:</b> Misting-MB1',
				sku:'Misting-MB1',
				subtitulo:'Bomba Alta presión 1 l/m',
				app:'Misitng system de alta presión.',
				nca:7,
				ca1:'<b>Capacidad:</b> l l/m',
				ca2:'<b>Potencia:</b> 300 Watts',
				ca3:'<b>Presión de Salida de Agua:</b>  900 psi',
				ca4: '<b>Voltaje:</b>110/220V',
				ca5:'Acero Inoxidable',
				ca6:'<b>Certificaciones:</b> CE',
				ca7:'<b>Garantía:</b> 1 año2',
				ncoa:1,
				nco:3,
				co1:'1 Bomba alta presión',
				co2:'1 Valvula de escape automática',
				co3:'1 Regulador de Presión',
				img: 'img/img_p_11.jpg',
				
			},
			producto12	:{
				modelo:'<b>Producto:</b> Misting-MB2',
				sku:'Misting-MB2',
				subtitulo:'Bomba Alta presión 2 l/m',
				app:'Misitng system de alta presión.',
				nca:7,
				ca1:'<b>Capacidad:</b> 2 l/m',
				ca2:'<b>Potencia:</b> 750 Watts',
				ca3:'<b>Presión de Salida de Agua:</b>  900 psi',
				ca4: '<b>Voltaje:</b>110/220V',
				ca5:'Acero Inoxidable',
				ca6:'<b>Certificaciones:</b> CE',
				ca7:'<b>Garantía:</b> 1 año2',
				ncoa:1,
				nco:3,
				co1:'1 Bomba alta presión',
				co2:'1 Valvula de escape automática',
				co3:'1 Regulador de Presión',
				img: 'img/img_p_11.jpg',
				
			},
			producto13	:{
				modelo:'<b>Producto:</b> Misting-MB3',
				sku:'Misting-MB2',
				subtitulo:'Bomba Alta presión 3 l/m',
				app:'Misitng system de alta presión.',
				nca:7,
				ca1:'<b>Capacidad:</b> 3 l/m',
				ca2:'<b>Potencia:</b> 750 Watts',
				ca3:'<b>Presión de Salida de Agua:</b>  900 psi',
				ca4: '<b>Voltaje:</b>110/220V',
				ca5:'Acero Inoxidable',
				ca6:'<b>Certificaciones:</b> CE',
				ca7:'<b>Garantía:</b> 1 año2',
				ncoa:1,
				nco:3,
				co1:'1 Bomba alta presión',
				co2:'1 Valvula de escape automática',
				co3:'1 Regulador de Presión',
				img: 'img/img_p_11.jpg',
				
			},
		 producto14	:{
				modelo:'<b>Producto:</b> Misting-MO1',
				sku:'Misting-MO1',
				subtitulo:'Boquilla de 0.1mm',
				app:'Misitng system de alta presión',
				nca:4,
				ca1:'<b>Diametro:</b> 0.1mm',
				ca2:'<bFlujo:</b> 0.03 l/m',
				ca3:'<b>Material:</b> Metálico con area orificio Acero Inoxidable',
				ca4: '<b>Presion trabajo normal:</b> 1000 psi2',
				ncoa:0,
				nco:0,
				img: 'img/bombahimisting.png',
				
			},
			 producto15	:{
				modelo:'<b>Producto:</b> Misting-MO2',
				sku:'Misting-MO2',
				subtitulo:'Boquilla de 0.15mm',
				app:'Misitng system de alta presión',
				nca:4,
				ca1:'<b>Diametro:</b> 0.15mm',
				ca2:'<bFlujo:</b> 0.05 l/m',
				ca3:'<b>Material:</b> Metálico con area orificio Acero Inoxidable',
				ca4: '<b>Presion trabajo normal:</b> 1000 psi2',
				ncoa:0,
				nco:0,
				img: 'img/bombahimisting.png',
				
			},
			producto16	:{
				modelo:'<b>Producto:</b> Misting-MO3',
				sku:'Misting-MO3',
				subtitulo:'Boquilla de 0.2mm',
				app:'Misitng system de alta presión',
				nca:4,
				ca1:'<b>Diametro:</b> 0.2mm',
				ca2:'<bFlujo:</b> 0.07 l/m',
				ca3:'<b>Material:</b> Metálico con area orificio Acero Inoxidable',
				ca4: '<b>Presion trabajo normal:</b> 1000 psi2',
				ncoa:0,
				nco:0,
				img: 'img/bombahimisting.png',
				
			},
			producto17	:{
				modelo:'<b>Producto:</b> Misting-MO4',
				sku:'Misting-MO4',
				subtitulo:'Boquilla de 0.3mm',
				app:'Misitng system de alta presión',
				nca:4,
				ca1:'<b>Diametro:</b> 0.3mm',
				ca2:'<bFlujo:</b> 0.15 l/m',
				ca3:'<b>Material:</b> Metálico con area orificio Acero Inoxidable',
				ca4: '<b>Presion trabajo normal:</b> 1000 psi2',
				ncoa:0,
				nco:0,
				img: 'img/bombahimisting.png',
				
			},
			producto18	:{
				modelo:'<b>Producto:</b> Misting-MP1',
				sku:'Misting-MP1',
				subtitulo:'Porta boquilla unión sin orificio',
				app:'Misitng system de alta presión.',
				nca:3,
				ca1:'Metálico',
				ca2:'<bFlujo:</b> 0.15 l/m',
				ca3:'Conector rápido Slip Lock para manguera de 3/8” para conectar 2 mangueras.',
				ncoa:0,
				nco:0,
				img: 'img/bo_1.jpg',
				
			},
			producto19:{
				modelo:'<b>Producto:</b> Misting-MP2',
				sku:'Misting-MP2',
				subtitulo:'Porta boquilla con orificio',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido Slip Lock para manguera de 3/8” para conectar 2 mangueras.',
				ncoa:0,
				nco:0,
				img: 'img/bo_2.jpg',
				
			},
			producto20:{
				modelo:'<b>Producto:</b> Misting-MP3',
				sku:'Misting-MP3',
				subtitulo:'Porta boquilla con doble orificio',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido Slip Lock para manguera de 3/8” para conectar 2 mangueras.',
				ncoa:0,
				nco:0,
				img: 'img/bo_3.jpg',
				
			},
			producto21:{
				modelo:'<b>Producto:</b> Misting-MP4',
				sku:'Misting-MP4',
				subtitulo:'Conecto porta boquilla en "T"',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido Slip Lock para manguera de 3/8” para conectar 2 mangueras.',
				ncoa:0,
				nco:0,
				img: 'img/bo_4.jpg',
				
			},
			producto22:{
				modelo:'<b>Producto:</b> Misting-MP5',
				sku:'Misting-MP5',
				subtitulo:'Porta boquilla en cruz',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido en cruz Slip Lock para manguera de 3/8” para conexiones de manguera a 90o y -90o.',
				ncoa:0,
				nco:0,
				img: 'img/bo_5.jpg',
				
			},
			producto23:{
				modelo:'<b>Producto:</b> Misting-MP6',
				sku:'Misting-MP6',
				subtitulo:'Conector macho para manguera 3/8”',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector macho rápido tipo Slip Lock para manguera 3/8 utilizado para conectar la salida de la bomba a la manguera de alta presión.',
				ncoa:0,
				nco:0,
				img: 'img/bo_6.jpg',
				
			},
			producto24:{
				modelo:'<b>Producto:</b> Misting-MP7',
				sku:'Misting-MP7',
				subtitulo:'Tapón sin orificio para manguera 3/8”',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido Slip Lock para manguera de 3/8” ',
				ncoa:0,
				nco:0,
				img: 'img/bo_7.jpg',
				
			},
			producto25:{
				modelo:'<b>Producto:</b> Misting-MP8',
				sku:'Misting-MP8',
				subtitulo:'Tapón con orificio para manguera 3/8”',
				app:'Misitng system de alta presión.',
				nca:2,
				ca1:'Metálico',
				ca2:'Conector rápido Slip Lock para manguera de 3/8” con orificio para boquilla.',
				ncoa:0,
				nco:0,
				img: 'img/bo_8.jpg',
				
			},

			/*Accesorios no tiene informacion*/
			producto29:{
				modelo:'<b>Producto:</b> Ventilador 360 de techo',
				sku:'V-OF20',
				subtitulo:'Modelo: V-OF20',
				app:'Ventilador de techo Oscilatorio tipo industrial, con amplio flujo de aire, recomendable para: Restaurantes, Cocinas Industriales o cualquier lugar con la necesidad de tener un ambiente 100% ventilado.',
				nca:7,
				ca1:'Rejilla Reforzada',
				ca2:'Aspa Color Negro Mate',
				ca3:'Aspa metálica 20"',
				ca4:'Control de pared',
				ca5:'Velocidad ajustable',
				ca6:'Oscilatorio',
				ca7:'Garantía 1 año',
				ncoa:0,
				nco:1,
				et:1,
				etn:4,
				e1:'127V~60Hz – 170W',
				e2:'RPM: 1500',
				e3:'Flujo de Aire: 170m3/min.',
				e4:'Ruido Max: 75 dB (A) +-5',
				img: 'img/ve1.png',
				
			},
			producto30:{
				modelo:'<b>Producto:</b> Ventilador de pared',
				sku:'V-WF20',
				subtitulo:'Modelo: V-WF20',
				app:'Ventilador de techo Oscilatorio tipo industrial, con amplio flujo de aire, recomendable para: Restaurantes, Cocinas Industriales o cualquier lugar con la necesidad de tener un ambiente 100% ventilado.',
				nca:7,
				ca1:'Rejilla Reforzada',
				ca2:'Aspa Color Negro Mate',
				ca3:'Aspa metálica 20"',
				ca4:'3 Velocidades',
				ca5:'Ángulo ajustable',
				ca6:'Oscilatorio',
				ca7:'Garantía 1 año',
				ncoa:0,
				nco:1,
				et:1,
				etn:4,
				e1:'127V~60Hz – 150W',
				e2:'RPM: 1,550',
				e3:'Flujo de Aire: 170m3/min.',
				e4:'Ruido Max: 75 dB (A) +-5',
				img: 'img/ve2.png',
				
			},
			producto31:{
				modelo:'<b>Producto:</b> Ventilador de pedestal',
				sku:'V-SFB20N',
				subtitulo:'Modelo: V-SFB20N',
				app:'Ventilador de techo Oscilatorio tipo industrial, con amplio flujo de aire, recomendable para: Restaurantes, Cocinas Industriales o cualquier lugar con la necesidad de tener un ambiente 100% ventilado.',
				nca:7,
				ca1:'Rejilla Reforzada',
				ca2:'Aspa Color Negro Mate',
				ca3:'Aspa metálica 30"',
				ca4:'3 Velocidades',
				ca5:'Ángulo ajustable',
				ca6:'Oscilatorio',
				ca7:'Garantía 1 año',
				ncoa:0,
				nco:1,
				et:1,
				etn:4,
				e1:'127V~60Hz – 390W',
				e2:'RPM: 1600',
				e3:'Flujo de Aire: 395m3/min.',
				e4:'Ruido Max: 80 dB (A) +-5',
				img: 'img/ve3.png',
				
			},
			producto32:{
				modelo:'<b>Producto:</b> Ventilador de piso',
				sku:'V-HV20',
				subtitulo:'Modelo: V-HV20',
				app:'Ventilador de techo Oscilatorio tipo industrial, con amplio flujo de aire, recomendable para: Restaurantes, Cocinas Industriales o cualquier lugar con la necesidad de tener un ambiente 100% ventilado.',
				nca:6,
				ca1:'Rejilla Reforzada',
				ca2:'Aspa Color Negro Mate',
				ca3:'Aspa metálica 20"',
				ca4:'3 Velocidades',
				ca5:'Ángulo ajustable',
				ca6:'Garantía 1 año',
				ncoa:0,
				nco:1,
				et:1,
				etn:4,
				e1:'127V~60Hz – 160W',
				e2:'RPM: 1550',
				e3:'Flujo de Aire: 142m3/min.',
				e4:'Ruido Max: 75 dB (A) +-5',
				img: 'img/ve4.png',
				
			},
			producto33:{
				modelo:'<b>Producto:</b> Ventilador de pedestal',
				sku:'V-PF30',
				subtitulo:'Modelo: V-PF30',
				app:'Ventilador de techo Oscilatorio tipo industrial, con amplio flujo de aire, recomendable para: Restaurantes, Cocinas Industriales o cualquier lugar con la necesidad de tener un ambiente 100% ventilado.',
				nca:7,
				ca1:'Rejilla Reforzada',
				ca2:'Aspa Color Negro Mate',
				ca3:'Aspa metálica 20"',
				ca4:'3 Velocidades',
				ca5:'Ángulo ajustable',
				ca6:'Oscilatorio',
				ca7:'Garantía 1 año',
				ncoa:0,
				nco:1,
				et:1,
				etn:4,
				e1:'127V~60Hz – 180W',
				e2:'RPM: 1500',
				e3:'Flujo de Aire: 150m3/min.',
				e4:'Ruido Max: 70 dB (A) +-5',
				img: 'img/ve5.png',
				
			},
		
	
};
 
 
/*Script sección Más info*/
$('.myitem').click(function () {
	var id = $(this).attr("title");
	
	var myid = "info"+id;
	
	$('.mycontentinfo #txtinfo').html("<p>" + infotec[myid].texto + "</p>");
	$("#imginfo").attr("src",infotec[myid].img);
	$('.mycontentinfo #conttitle').html(infotec[myid].titulo);
	});




/*Script Sección Productos*/


$('.producto').click(function(){
	
	
			var nproducto = $(this).attr("id");
			$('#modtitulo').html(productos[nproducto].modelo);
			$('#modimg').attr("src",productos[nproducto].img);
			$('#modsubtitulo').html(productos[nproducto].subtitulo);
			$('#modapp').html(productos[nproducto].app);
				 
			var detailcar = '';
		  
		  
			for (var i=1; i<=(productos[nproducto].nca); i++){
				var x = "ca".concat(i);
				detailcar = detailcar + (productos[nproducto][x] + "<br/>");
				
				
			}
			$('#modca').html("<p>"+detailcar + "</p>");
			var detailcontenido = '';
			for (var r=1; r<=(productos[nproducto].nco); r++){
				var w = "co".concat(r);
				detailcontenido = detailcontenido + ("<li>" + productos[nproducto][w]+ "</li>");
			}
			$('#modcontenido').html(detailcontenido);
			
			if ((productos[nproducto].ncoa)==1){
				$('#titlecont').html('Contenido:');
			}
			else if((productos[nproducto].et)==1){
				$('#titlecont').html('<b>Especificaciones Técnicas:</b>');
				var mycontent= '';
				for (var l=1; l<=(productos[nproducto].etn); l++){
					var ww = "e".concat(l);
					mycontent = mycontent + ("<li>" + productos[nproducto][ww]+ "</li>");
				}
				$('#modcontenido').html(mycontent);
			}
			else if((productos[nproducto].et)==0){
				$('#titlecont').html('');
			}
			
			

	
			$('#modproducto').modal('show');
	
	});
	

	
	$('#btnenviar').click(function(){
		var Nombre = $('#nombre').val();
		var Correo = $('#correo').val();
		var Empresa = $('#empresa').val();
		var Mensaje= $('#mensaje').val();
		
		
		if (Nombre=="") {
			$('#txtaler').html("Por favor escriba su nombre");
			
		}
		else if (Correo==""){
			$('#txtaler').html("Por favor su E-mail");
		}
		else if (Mensaje==""){
			$('#txtaler').html("Por favor escriba un comentario");
		}
		else{
			var urlData =	"&Nombre=" + Nombre +
						"&Correo=" + Correo +
						"&Empresa=" + Empresa +
						"&Mensaje=" +  Mensaje;
						

					$.ajax({ /*Ejecuto el envío con ajax usando el método POST*/
								type:  'POST',
								url:   'php/mail.php',
								async: true,
								data: urlData,
								dataType: 'text/html',
								success: function() { /* sucesso */
							 },
								complete:  function(data) {
									$('#txtaler').html("Mensaje enviado correctamente");
									var Nombre = $('#nombre').val("");
									var Correo = $('#correo').val("");
									var Empresa = $('#empresa').val("");
									var Mensaje= $('#mensaje').val("");
								}
								});
		}
		
		return false; 
		
	});
	
		
	