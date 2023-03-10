// PREGUNTAS
const prompts = [
  ["hola","ola","oa","hello"],
  ["buenos dias","buen dia" ,"hola buenos dias","oa buenos dias","ola buenos dias"],
  ["hola buenos dias", ], 
  ["cual es tu nombre","como te llamas","quien eres","como te haces llamar","con quien hablo","hola con quien tengo el gusto","quien eres tu","como te llamas usted","como te llamas tu"],
  //enfermedades de su experiencia
  ["en que eres especialista","que experiencia tienes","cuales son las enfermedades que has tratado","en que enfermedades tiene experiencia",
  "cual es tu experiencia laboral como medico virtual","cual es tu experiencia laboral","cual es tu experiencia","que enfermedades has tratado","que enfermedades a tratado","en que enfermedades tienes experiencia" ],
  //enferemedades
  ["como puedes detectar la depresion en un paciente",
  "cuales son los sintomas de la depresion","sintomas de la depresion" ],
  ["como puedes detectar la diabetes en un paciente",
  "cuales son los sintomas de la diabetes","sintomas de la diabetes" ],
  ["como puedes detectar la migrania en un paciente",
  "cuales son los sintomas de la migrania","sintomas de la migrania" ],
  ["como puedes detectar el asma en un paciente",
  "cuales son los sintomas del asma","sintomas del asma" ],
  //consulta 
  /*linea 10*//*["tengo algunos malestares","quiero hacerle una consulta medica","quisiera hacerle una consulta","quiero hacerle una consulta","tengo una consulta" ],
  ["a b c d e f","a b c d e","a b c d"],*/
  //rony
  ["como saber si tengo algun problema de salud"],
  ["que examenes debo hacerme para saber si estoy bien de salud"],
  ["cuales son los sintomas de la gripe"],

  //neyra
  ["cuales son los sintomas de una infeccion del tracto urinario y ccmo se trata", "sintomas de una infeccion del tracto urinario"],
  ["cuales son las recomendaciones para la prevencion de la enfermedad cardiaca", ],
  ["cuales son las causas del colesterol alto y ccmo se puede controlar", ],
  ["cuales son los sintomas del cancer al estomago", ],
  ["cuales son las causas del dolor de cabeza", ],

  ["quisiera hacer una consulta medica","puedo hacerle un consulta", "una consulta","quiero hacer una consulta","deseo hacerle una consulta","quisiera hacerle una consulta","quiero hacerle una consulta"],
  ["necesito una consulta" ],
  ["a"],
  ["b"],
  ["c"],
  ["d"],
  ["e"],
  ["f"],
  ["g"],
  ["h"],
  ["i"],


  ["", ],
  ["", ],
  ["", ],
  ["", ],
  ["", ],
  ["", ],



]


//RESPUESTAS
const replies = [
  ["hola en que puedo ayudarte","hola. soy su medico virtual.como te puedo ayudar"],
  ["Muy buenos dias en que puedo ayudarte","Muy buenos dias soy tu medico virtual en que puedo ayudarte"],
  ["Hola. Muy buenos dias en que puedo ayudarte"],
  ["soy Mediquito","soy tu medico virtual.mi nombre es Mediquito"],
  //respuestas de las enfermedades en la cual tiene experiencia
  ["Tengo experiencia en las enfermedades de:\n-Depresion\n-Diabetes\n-Migra??a\n-Asma\n-Gripe\n-Infeccion del tracto urinario\n-Enfermedad cardiaca\n-Colesterol\n-Cancer al estomago" ],
  //sontomas de cada enfermedad
  ["los sintomas mas frecuetes de la depresion son:\n-Cambios en el apetito y peso \n-Tristeza frecuente \n-Dificultad para concentrarse  \n-Cambios en el estado de animo rapidamente\n-Cambios en el patron de sue??o\n-Pensamientos de suicidio o muerte   " ],
  ["los sintomas mas frecuetes de la diabetes son:\n-Vision borrosa \n-Fatiga\n-Miccion excesiva   \n-Hambre constante \n-Sed constante"],
  ["los sintomas mas frecuetes de la migra??a son:\n-Dolor de cabeza intenso \n-Sensibilidad a la luz,sonido y olores\n-Nauseas y vomitos\n-Vision borrosa o aura visual\n-Problemas de concentracion o confusion \n-Dolor ocular o nasal\n-Cambios en el estado de animo o ansiedad\n-Rigidez en el cuello o la mandibula"],
  ["los sintomas mas frecuetes del asma son:\n-Presion en el pecho\n-Dificultad para respirar\n-Tos persistente\n-Fatiga\nSilvido al respirar\nRespiracion Rapida\n-Sensacion de falta de aire\n"],
  
  //respuesta de consutas

  /*linea 10 ["para realizarte la consulta. mensioname algunos de tus malestares:Aqui tengo una lista :\nA)Cambios en el apetito\nB)Tristesa frecuente\nC)Dificultad para consentrase\nD)Cambios en el estado de animo rapidamente\nE)Cambios en el patron de sue??o\nF)Pensamientos de suicidio o muerte\n Dame tu respuesta de acuerdo a las opciones Ejemplo\nA B C D..."],
  ["Segun las opciones de me arrojaste es muy probable que tenga la enfermedad de la Depresion" ],*/
//vega
  ["Usted presenta problemas de salud si presenta los siguientes sintomas: \n a) Adelgazamiento sin causa aparente \n b) Fiebre persistente o alta\n c) Falta de aire\n d) Cambios inexplicables en los h??bitos intestinales\n e) Confusi??n o cambios en la personalidad\n f) Sensaci??n de saciedad despu??s de comer muy poco\n g) Destellos de luz "],
  ["-Para llegar a encontrar estos diagn??sticos, los ex??menes deben buscar medir desde la presi??n sangu??nea, hacer an??lisis de orina y sangre -que pueden detectar la anemia, colesterol, triglic??ridos o el alto ??ndice de az??car-, electrocardiogramas, medir las defensas a trav??s de los niveles de leucocitos y gl??bulos blancos, una radiograf??a de t??rax y ecograf??a abdominal, estos ??ltimos con la finalidad de detectar problemas en ??rganos internos.\n - an??lisis de orina y sangre\n - radiograf??a de t??rax y ecograf??a abdominal\n - Un check up m??dico o estudio general de salud "],
  ["Los s??ntomas de la gripe incluyen fiebre, escalofr??os, dolor de cuerpo, dolor de cabeza, debilidad, fatiga, tos y congesti??n nasal. "],
//neyra
  ["Los s??ntomas de una infecci??n de vejiga pueden incluir: \n-Dolor o ardor al orinar. \n-Orinar con frecuencia. \n-Sentir la necesidad de orinar a pesar de que la vejiga est?? vac??a. \n-Sangre en la orina. \n-Presi??n o retorcijones en la ingle o la parte inferior del abdomen", ], 
  ["Para la prevencion de la emfermedadad cardiaca puedes seguir algunas recomendacioes como:\n-Alimentaci??n saludable y actividad f??sica. \n-Consumir alimentos frescos y variados, que incluyan en cada una de las comidas frutas enteras y verduras \n-Consumo de tabaco y bebidas alcoh??licas. \n-Control del estr??s, hipertensi??n y diabetes.", ],
  ["Las causas del colesterol alto pueden ser gen??ticas o relacionadas con la dieta y el estilo de vida.\n El colesterol alimentario y la ingesta excesiva de grasas saturadas son las principales causas relacionadas con la dieta. El sedentarismo y el sobrepeso tambi??n pueden contribuir al colesterol alto.\n Para controlar el colesterol alto se recomienda llevar una dieta baja en grasas saturadas y colesterol alimentario, y rica en frutas, verduras y cereales integrales. Tambi??n es importante hacer ejercicio regularmente y mantener un peso saludable. Si estos cambios en el estilo de vida no son suficientes, puede ser necesario tomar medicamentos para controlar el colesterol, como estatinas. Es importante hablar con un m??dico o un especialista en nutrici??n para obtener un plan de tratamiento personalizado. ", ],
  ["Los s??ntomas del c??ncer g??strico pueden incluir: \nDolor abdominal \nP??rdida de apetito\n P??rdida de peso \nHinchaz??n, n??useas y v??mitos \nSangrado en el tracto digestivo y cambios en el h??bito intestinal\n Sin embargo, estos s??ntomas tambi??n pueden ser causados por otras condiciones, por lo que es importante hablar con un m??dico si se experimentan estos s??ntomas. El diagn??stico temprano del c??ncer g??strico es importante para mejorar las posibilidades de tratamiento exitoso. ", ],
  ["Las causas del dolor de cabeza pueden ser m??ltiples, incluyendo tensiones musculares, fatiga, estr??s, deshidrataci??n, problemas de vista, sinusitis, enfermedades card??acas, trastornos hormonales, efectos secundarios de medicamentos, entre otros. Tambi??n pueden ser causadas por trastornos m??dicos m??s graves, como tumores cerebrales o enfermedades autoinmunitarias. Es importante consultar a un m??dico si el dolor de cabeza es recurrente o si se acompa??a de otros s??ntomas. ", ],
  
  ["ok .Para realizar su consulta digame si sospecha de alguna de las siguientes enfermedades? :\na) Depresion\n b) Diabetes\nc) Migra??a\n d) Asma\ne) Gripe\nf) Infeccion del tracto urinario\ng) Enfermedad cardiaca\nh) Colesterol\ni) Cancer al estomago \n Escriba la opci??n de la enfermedad que sospecha:",],
  
  ["Ok segun mi experiencia puedo ayudarte a detectar algunas enfermedades  :\na) Depresion\n b) Diabetes\nc) Migra??a\n d) Asma\ne) Gripe\nf) Infeccion del tracto urinario\ng) Enfermedad cardiaca\nh) Colesterol\ni) Cancer al estomago \n\n Escriba la opci??n de la enfermedad que sospecha:",],

  ["los sintomas mas frecuetes de la depresion son:\n-Cambios en el apetito y peso \n-Tristeza frecuente \n-Dificultad para concentrarse  \n-Cambios en el estado de animo rapidamente\n-Cambios en el patron de sue??o\n-Pensamientos de suicidio o muerte.\n En caso usted presente estos sintomas es muy probable que sifra de depresion. Es recomendable visitar a su medico de cabecera", ],
  ["los sintomas mas frecuetes de la diabetes son:\n-Vision borrosa \n-Fatiga\n-Miccion excesiva   \n-Hambre constante \n-Sed constante \nEn caso usted presente estos sintomas, se le recomienda acudir a un medico recomendado."],
  ["los sintomas mas frecuetes de la migra??a son:\n-Dolor de cabeza intenso \n-Sensibilidad a la luz,sonido y olores\n-Nauseas y vomitos\n-Vision borrosa o aura visual\n-Problemas de concentracion o confusion \n-Dolor ocular o nasal\n-Cambios en el estado de animo o ansiedad\n-Rigidez en el cuello o la mandibula\n En caso usted presente estos sintomas es muy probable que sufra de migra??a. Es recomendable visitar a su medico de cabecera", ],
  ["los sintomas mas frecuetes del asma son:\n-Presion en el pecho\n-Dificultad para respirar\n-Tos persistente\n-Fatiga\nSilvido al respirar\nRespiracion Rapida\n-Sensacion de falta de aire\n En caso usted presente estos sintomas, se le recomienda acudir a un medico recomendado."],
  ["Los s??ntomas de la gripe incluyen fiebre, escalofr??os, dolor de cuerpo, dolor de cabeza, debilidad, fatiga, tos y congesti??n nasal. \n En caso presente estos sintomas se le recomienda acudir a un centro medico, y llevar el tratamiento recomendado.", ],
  ["Los s??ntomas de una infecci??n de vejiga pueden incluir: \n-Dolor o ardor al orinar. \n-Orinar con frecuencia. \n-Sentir la necesidad de orinar a pesar de que la vejiga est?? vac??a. \n-Sangre en la orina. \n-Presi??n o retorcijones en la ingle o la parte inferior del abdomen \n En caso presente estos sintomas se le recomienda acudir a un centro medico, y llevar el tratamiento recomendado.", ], 
  ["Los sintomas de la enfermedad Cardiaca son: \n -Dolor o presi??n en el pecho (angina) \n -Fatiga o debilidad inusua\n -Dificultad para respirar \n -Hinchaz??n en las piernas, pies o abdomen \n -Ritmo card??aco irregular o palpitaciones.\n Si usted presenta los sintomas mencionados se le recomienda acudir a su medico de confianza y realizar el respectivo tratamiento.", ],
  ["El nivel alto de colesterol no tiene s??ntomas. Un an??lisis de sangre es la ??nica manera de detectar si lo tienes.visite al medico.", ],
  ["Los s??ntomas del c??ncer g??strico pueden incluir: \n-Dolor abdominal \n-P??rdida de apetito\n-P??rdida de peso \n-Hinchaz??n, n??useas y v??mitos \n-Sangrado en el tracto digestivo y cambios en el h??bito intestinal\n\n Sin embargo, estos s??ntomas tambi??n pueden ser causados por otras condiciones, por lo que es importante hablar con un m??dico si se experimentan estos s??ntomas. El diagn??stico temprano del c??ncer g??strico es importante para mejorar las posibilidades de tratamiento exitoso. ", ],
  
  ["", ],
  ["", ],
  ["", ],
  ["", ],
]

// Random for any other user input

const alternative = [
  "repite de nuevo",
  "lo siento no te entiendo",
  "no te entiendo "
]

// Whatever else you want :)

//const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]