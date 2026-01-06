
// A számolásokat kétféleképpen készettem el. 
// Az alábbi kódsor hosszú és minden egyes sornál ismételten le kell írni, 
// ugyanakkor számomra ezt tűnt elsőre a legjobban kézzelfoghatónak, de 
// úgy gondolom X sor felett nem igazán praktikus és nem is ajánlott a használtata


//const ára_a = 10                    //az adott szolgáltatás egységára
//a=document.getElementById("a")      // a id vel rendelkező input elérési útvonlala  (itt adom meg a mennyiséget pl fm, db)
//a1=document.getElementById("a1")    // a1 id vel rendelkező div  elérési útvonlala (ide krül a kíírt eredmény)

//function számolás_a(){ a1.innerText=(a.value*ára_a)+ " Ft"} 

// elkészítem a számolás nevű  function-t mely azt csinálja, hogy az a1 id val jelölt divben megjeleníti (innerText), az input mezőbe (a id) beírt érték
//  és a változó szorzatát, illetve + jellel még hozzátesz egy "Ft" stringet.

//a.addEventListener("input",számolás_a )

 //a fenti function azonban nem futna le, ha nem rendelnék hozzá egy eseményfigyelőt, ez az eseményfigyelő az addEventListener.
//  a.addEventListener vagyis az a id vel rendelkező inputhoz hozzáadok egy eseményfigyelőt.
//  "input" vagyis akkor történjen "valami, ha az input mezőbe valami bekerül/változás van benne.
// számolás_a    amint valami bekerül az input mezőbe a fent elkészített function fusson le.


// const ára_b = 20
// b=document.getElementById("b")
// b1=document.getElementById("b1")

// function számolás_b(){ b1.innerText=(b.value*ára_b)+" Ft"}  
// b.addEventListener("input",számolás_b )


// const ára_c = 30
// c=document.getElementById("c")
// c1=document.getElementById("c1")

// function számolás_c(){ c1.innerText=(c.value*ára_c)+" Ft"}  
// c.addEventListener("input",számolás_c )


// const ára_d = 40
// d=document.getElementById("d")
// d1=document.getElementById("d1")

// function számolás_d(){ d1.innerText=(d.value*ára_d)+" Ft"}   
// d.addEventListener("input",számolás_d )


// const ára_e = 50
// e=document.getElementById("e")
// e1=document.getElementById("e1")

// function számolás_e(){ e1.innerText=(e.value*ára_e)+" Ft"}    
// e.addEventListener("input",számolás_e )


// const ára_f = 60
// f=document.getElementById("f")
// f1=document.getElementById("f1")

// function számolás_f(){ f1.innerText=(f.value*ára_f)+" Ft"}   
// f.addEventListener("input",számolás_f )


// const ára_g = 70
// g=document.getElementById("g")
// g1=document.getElementById("g1")

// function számolás_g(){ g1.innerText=(g.value*ára_g)+" Ft"}    
// g.addEventListener("input",számolás_g )



// A msáodik számolás lehetősg, melyet kigondoltam az alábbi:
// Előnye, hogy jóval kevesebb sort tartalmaz, ezáltal pl a hibázási lehetőség is kisebb, illetv több sor esetén is alkalmazható.
// Véleményem szerint nem feltétlenül ez a legjobb megoldás, de az előzőhoz képest egy fokkal összetettebb, és tömörebb.


sorok=document.querySelectorAll(".sorok")  // definiálom a class=sorok nevű "sorokat", vagyis összesen 7 db ot melyk (tartalmaznak egynként labelt, inputot,  span-t és class=eredmény nevű divet is)

sorok.forEach(function (sor) {
    const bemenet= sor.querySelector(".mennyiség");
    const kimenet=sor.querySelector(".eredmény") ;
        bemenet.addEventListener("input", function(){ 
            egységár=bemenet.getAttribute("egységár"); 
            végösszeg=bemenet.value*egységár +" Ft"; 
                kimenet.innerText=végösszeg })})

    // mivel a sorok megszólítása "All"-el történt, ezért nodelistet ad, amin forEach el végigmegyek
    // a function -(sor)- egy sorra vetítve tehát:
        // definiálom a bemenetet, mely úgy választok ki, hogy a sorokon belül, az egy sorban lévé elemek közül, kiválasztom a class=mennyiég nevű elemet, ez gyakorlatilag az input mező. (külön id val is rendelkezik, de jelen esetben csak a class a fontos, hoszen az minden sorban azonos)
        // definiálom a kimenetet, mely, úgy választok ki, hogy a sorokon belül, az egy sorban lévé elemek közül,kiválasztom a class=eredmény nevű elmet, mely gyakorlatilag az eredmény mező (külön id val is rendelkezik, de jelen esetben a class a lényeg, mert az minden sorban ugyanaz)
            //eseménykezelőt rendelek a bemenethez, vagyis input esetén az a function menjen végbe , hogy:
                // definiálom azt, hogy  az egységár megegyezik a bemenetben (inputban) lévő azon egységár attribútummal bemenet.getAttribute("egységár") (ezt a HTML-ben minden input sorba bírtam egységár="10", egységár="20 stb")
                // a végösszeget definiálom, mely egyenlő a korábban definált bemenet értékének(bemenet.value) és az előbb definiált egységár szorzatával és  amegjelenés miatt kap egy + "Ft" stringet.
                    // azért hogy megjelenésre kerüljön az összeg a  class=eredmény div-ekben majd a képernyőn, a kimenet néven megszólított div innerText-ét egyenlővé teszem a kiszámolt végösszeggel


// A videóban láttam 2 féle színű  kijelölést, melynek ha jól értelmeztem, 
// akkor az volt a funkciója, hogy ha az input mezőbe belekattintok,  és ha értéket írok bele, 
// akkor az egész sor háttere pirosra vált, és az is marad, ha van beleírt érték,
// Ha az input mező fölé viszem a kurzort, akkor kék színű lesz, ha leveszem róla  a kurzort akkor ismét nem lesz színe.
// A piros háttér eltűnik, ha frisstem az lapot, (összes érték eltűnik), vagy ha törlön az inputból a számokat
// Az alábbi módszerrel valósítottam meg:

input=document.querySelectorAll("input");  
     
input.forEach(function (egyinput){

        egyinput.oninput=function(){sor=egyinput.parentElement;
            if(egyinput.value !==""){sor.style.backgroundColor = "red"}
            else {sor.style.backgroundColor = "white"}}

        egyinput.onmouseover=function(){sor=egyinput.parentElement;
            if( egyinput.value ===""){sor.style.backgroundColor = "blue"}}

        egyinput.onmouseleave=function(){sor=egyinput.parentElement;
            if( egyinput.value ===""){sor.style.backgroundColor = "white"}}
            
            })


//megszólítom az input mezőket melynek a JS-ben is input nevet adok mivel All lett megszólítva ezért nodelistet ad, így forEachechel végigmegyek rajtuk
//  inputok- végigmegyek rajtuk forEach el, miközben az alábbi functiont adom  (egyinput){
        //egyinputba írás/változtatás/ szám beírása esetén a következő játszódjon le{ mivel nem csak az imput elemet akarom színezni hanem az egész sor,ezért definiálom a sort, mely gyakorlatilag nem más mint az egyinput szülőeleme vagyis sor=egyinput.parentElement
            // ha az egyinputban lévő érték NEM == 0 vagyis tartalmaz értéket, akkor az egész sort pirosra szinezze
            // máskülönben a sor maradjon fehér
        // egyinput fölé húzva az egeret az azlábbi funkció játszódjon le ( szintén kiterjesztve az egész sorra)
            // Ha az egyinput értéke 0 vagyis nincs semmi írva az input mezőbe, üres, akkor az egész sor hátter legyen kék
        // egyiputról az egeret eltávolitom,akor a következő funkcó játszódjon le( szintén kiterjesztve az egész sorra)
            // az egyinput értéke 0 vagyis nincs semmi belírva és ahogy a fentebb meghatároztam nincs rajta az egér, akkor az gész sor legyen fehér








